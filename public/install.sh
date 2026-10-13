#!/bin/sh
# AI Anywhere installer — gets this machine ready and installs the CLI:
#   1. tmux          (installed via the system package manager if absent)
#   2. Node.js 22.5+ (installed as the latest LTS if you already use fnm or nvm; otherwise the
#                     script stops and points at nodejs.org — it never installs Node system-wide)
#   3. @ai-anywhere/cli  (npm install -g)
#   4. ai-anywhere up    (signs in when needed, then runs in the foreground)
# Re-running starts tmux and resumes saved pi/Codex/Claude IDs. No login service is installed.
#
# Usage:  curl -fsSL https://tmux.online/install.sh | sh
# Desktop: curl -fsSL https://tmux.online/install.sh | sh -s -- --desktop
# Desktop mode reuses an existing bridge, never restarts it, and starts a detached LAN listener.
#
# POSIX sh, no bashisms. Safe to re-run.
set -eu

DESKTOP=0
case "${1:-}" in
  '') ;;
  --desktop) DESKTOP=1; shift ;;
  *) printf 'Unknown installer option: %s\n' "$1" >&2; exit 2 ;;
esac
[ "$#" -eq 0 ] || { printf 'Unexpected installer arguments\n' >&2; exit 2; }

# ── output ───────────────────────────────────────────────────────────
# Real escape bytes (not the literal string "\033…") so they render whether they land in a
# %b colour slot or inside a %s message.
if [ -t 1 ]; then
  C=$(printf '\033[36m')
  G=$(printf '\033[32m')
  Y=$(printf '\033[33m')
  R=$(printf '\033[31m')
  B=$(printf '\033[1m')
  Z=$(printf '\033[0m')
else
  C='' G='' Y='' R='' B='' Z=''
fi
TAG='AI-Anywhere'
say() { printf '%s[%s]%s %s\n' "$C" "$TAG" "$Z" "$*"; }
ok() { printf '%s[%s]%s %s\n' "$G" "$TAG" "$Z" "$*"; }
warn() { printf '%s[%s]%s %s\n' "$Y" "$TAG" "$Z" "$*" >&2; }
die() {
  printf '%s[%s] %s%s\n' "$R" "$TAG" "$*" "$Z" >&2
  exit 1
}
have() { command -v "$1" >/dev/null 2>&1; }

# Stable, uncoloured status lines consumed by the desktop client. No token or account secret is
# included. Normal CLI output (including the browser sign-in URL) remains available to the user.
DESKTOP_STATE=''
desktop_state() {
  DESKTOP_STATE="$1"
  printf 'AA_DESKTOP_STATE=%s\n' "$1"
}

desktop_requirement() {
  desktop_state blocked
  printf 'AA_DESKTOP_REQUIREMENT=%s\n' "$1"
  printf 'AA_DESKTOP_INSTRUCTION=%s\n' "$2"
  warn "$2"
  exit 1
}

requirement() {
  if [ "$DESKTOP" -eq 1 ]; then desktop_requirement "$1" "$2"; fi
  die "$2"
}

desktop_finish() {
  if [ "$1" -ne 0 ] && [ "$DESKTOP_STATE" != blocked ] && [ "$DESKTOP_STATE" != failed ]; then
    desktop_state failed
  fi
}

# 0 = healthy bridge; 1 = no TCP listener; 2 = occupied/unresponsive/unrecognised service.
# The exact JSON prefix is the CLI's /healthz wire response; no Node dependency is needed for
# this early check. Curl never follows redirects or uses a proxy for the loopback request.
desktop_probe() {
  _health_exit=0
  _health="$(curl -fsS --noproxy '*' --connect-timeout 1 --max-time 2 --max-filesize 65536 \
    http://127.0.0.1:51984/healthz 2>/dev/null)" || _health_exit=$?
  if [ "$_health_exit" -eq 7 ]; then return 1; fi
  [ "$_health_exit" -eq 0 ] || return 2
  case "$_health" in
    '{"ok":true,"name":"ai-anywhere-server","version":"'*'"}') return 0 ;;
    *) return 2 ;;
  esac
}

desktop_check() {
  _health_status=0
  desktop_probe || _health_status=$?
  case "$_health_status" in
    0)
      desktop_state ready
      printf 'AA_DESKTOP_ENDPOINT=ws://127.0.0.1:51984\n'
      return 0
      ;;
    1) return 1 ;;
    *) desktop_requirement port "Port 51984 is occupied or its service did not identify itself as AI Anywhere. Close that service or fix its health check, then retry." ;;
  esac
}

# Run a command as root: directly if we already are, via sudo otherwise.
as_root() {
  if [ "$(id -u)" -eq 0 ]; then
    "$@"
  elif [ "$DESKTOP" -eq 1 ]; then
    desktop_requirement sudo "Administrator access is required. Run in a terminal: sudo $* ; then reopen AI Anywhere."
  elif have sudo; then
    sudo "$@"
  else
    die "root access is required to install packages, but sudo is unavailable — run this installer again as root"
  fi
}

OS="$(uname -s)"

# ── 1. tmux ──────────────────────────────────────────────────────────
# 3.1 is the floor: the server relies on capture-pane -N (blank-cell preservation), which older
# tmux rejects outright.
TMUX_MIN_MAJOR=3
TMUX_MIN_MINOR=1

# 0 = this machine's tmux is new enough (or a source build we cannot parse), 1 = missing or too old.
tmux_ok() {
  have tmux || return 1
  # "tmux 3.6a" / "tmux next-3.4" / "tmux 2.9a" — a source build like "tmux master" parses to
  # nothing and passes, since it is newer than any release.
  _v="$(tmux -V 2>/dev/null | sed -n 's/^tmux \(next-\)\{0,1\}\([0-9][0-9]*\)\.\([0-9][0-9]*\).*/\2 \3/p')"
  [ -n "$_v" ] || return 0
  _tmajor="${_v%% *}"
  _tminor="${_v##* }"
  [ "$_tmajor" -gt "$TMUX_MIN_MAJOR" ] && return 0
  [ "$_tmajor" -eq "$TMUX_MIN_MAJOR" ] && [ "$_tminor" -ge "$TMUX_MIN_MINOR" ] && return 0
  return 1
}

install_tmux_linux() {
  # One of the usual package managers, whichever this distro ships.
  if have apt-get; then
    if [ "$DESKTOP" -eq 1 ] && [ "$(id -u)" -ne 0 ]; then
      desktop_requirement tmux "tmux 3.1+ is required. Run in a terminal: sudo apt-get update -qq && sudo apt-get install -y tmux ; then reopen AI Anywhere."
    fi
    as_root apt-get update -qq
    as_root apt-get install -y tmux
  elif have dnf; then
    as_root dnf install -y tmux
  elif have yum; then
    as_root yum install -y tmux
  elif have pacman; then
    as_root pacman -Sy --noconfirm tmux
  elif have zypper; then
    as_root zypper install -y tmux
  elif have apk; then
    as_root apk add tmux
  elif have xbps-install; then
    as_root xbps-install -Sy tmux
  elif have pkg; then
    as_root pkg install -y tmux
  else
    requirement tmux "could not find a package manager to install tmux — install tmux 3.1+ manually and re-run"
  fi
}

ensure_tmux() {
  if tmux_ok; then
    ok "tmux already installed ($(tmux -V))"
    return
  fi
  if have tmux; then
    say "tmux $(tmux -V | cut -d' ' -f2) is older than ${TMUX_MIN_MAJOR}.${TMUX_MIN_MINOR} — upgrading…"
  else
    say "installing tmux…"
  fi
  case "$OS" in
    Darwin)
      have brew || requirement brew "Homebrew is required to install tmux on macOS — get it at https://brew.sh, then re-run"
      brew install tmux || brew upgrade tmux
      ;;
    Linux | FreeBSD | *BSD)
      install_tmux_linux
      ;;
    *)
      requirement tmux "unsupported OS for automatic tmux install: $OS — on Windows, run wsl --install, then run the installer inside WSL; otherwise install tmux manually and re-run"
      ;;
  esac
  have tmux || die "tmux was installed, but it is still not on PATH"
  tmux_ok || die "tmux is still older than ${TMUX_MIN_MAJOR}.${TMUX_MIN_MINOR} ($(tmux -V)) — your distro's package is too old. Install a newer tmux (source build or a third-party repo) and re-run"
  ok "tmux installed ($(tmux -V))"
}

# Keep plugins separate from TPM so this also works without a plugin manager. Existing
# checkouts are reused, never pulled or overwritten on installer re-runs.
ensure_tmux_restore() {
  _restore_dir="$HOME/.config/ai-anywhere/tmux"
  for _plugin in tmux-resurrect tmux-continuum; do
    if [ ! -f "$_restore_dir/$_plugin/${_plugin#tmux-}.tmux" ]; then
      if ! have git; then
        warn "git is required for tmux session recovery plugins; install git and re-run the installer"
        return
      fi
      mkdir -p "$_restore_dir"
      # Clone into a temporary directory: failed downloads must not block the next attempt.
      _clone_dir="$(mktemp -d "$_restore_dir/.clone.XXXXXX")"
      if git clone --depth 1 "https://github.com/tmux-plugins/$_plugin.git" "$_clone_dir"; then
        if [ -e "$_restore_dir/$_plugin" ]; then
          rm -rf "$_clone_dir"
          warn "Incomplete tmux plugin at $_restore_dir/$_plugin; repair it and re-run"
          return
        fi
        mv "$_clone_dir" "$_restore_dir/$_plugin"
      else
        rm -rf "$_clone_dir"
        warn "Could not download $_plugin; re-run the installer to enable session recovery"
        return
      fi
    fi
  done

  _restore_conf="$_restore_dir/recovery.conf"
  # Versioned marker is the fast path; bump it whenever the managed config changes.
  _restore_marker='# AI Anywhere tmux recovery v2'
  if ! grep -qxF "$_restore_marker" "$_restore_conf" 2>/dev/null; then
    cat > "$_restore_conf" <<'TMUX_RECOVERY'
# AI Anywhere tmux recovery v2
# The managed watcher saves every five minutes even without an attached client.
# Avoid concurrent saves from continuum's status-line timer.
set -g @continuum-save-interval '0'
# The installer restores explicitly, after Node and the AI-session helper are ready.
set -g @continuum-restore 'off'
set -g @resurrect-capture-pane-contents 'on'
set -g @resurrect-hook-post-save-all '"$HOME/.config/ai-anywhere/tmux/ai-sessions.sh" save'
run-shell '"$HOME/.config/ai-anywhere/tmux/tmux-resurrect/resurrect.tmux"'
# Load continuum last, after themes that may replace status-right.
run-shell '"$HOME/.config/ai-anywhere/tmux/tmux-continuum/continuum.tmux"'
TMUX_RECOVERY
  fi

  # Match tmux's user-config preference, including existing XDG configurations.
  _tmux_conf="$HOME/.tmux.conf"
  if [ ! -f "$_tmux_conf" ]; then
    if [ -f "${XDG_CONFIG_HOME:-$HOME/.config}/tmux/tmux.conf" ]; then
      _tmux_conf="${XDG_CONFIG_HOME:-$HOME/.config}/tmux/tmux.conf"
    elif [ -f "$HOME/.config/tmux/tmux.conf" ]; then
      _tmux_conf="$HOME/.config/tmux/tmux.conf"
    fi
  fi
  _restore_source='source-file "~/.config/ai-anywhere/tmux/recovery.conf"'
  if ! grep -qxF "$_restore_source" "$_tmux_conf" 2>/dev/null; then
    printf '\n# AI Anywhere: automatic tmux session recovery\n%s\n' "$_restore_source" >> "$_tmux_conf"
  fi
  ok "tmux recovery configured (save every 5 minutes; restore when running this installer)"
}

# Standalone helpers are embedded so curl | sh needs no checkout or extra downloads.
# They persist exact IDs, never select a conversation merely because its directory matches.
ensure_ai_session_restore() {
  _restore_dir="$HOME/.config/ai-anywhere/tmux"
  [ -f "$_restore_dir/recovery.conf" ] || return 0
  mkdir -p "$_restore_dir"
  cat > "$_restore_dir/ai-sessions.cjs" <<'AI_SESSIONS'
const fs = require('node:fs')
const path = require('node:path')
const { execFileSync, spawn } = require('node:child_process')
const home = process.env.HOME
const dir = path.join(home, '.config/ai-anywhere/tmux')
const file = path.join(dir, 'ai-sessions.json')
const run = (args) => execFileSync('tmux', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trimEnd()
const quote = (s) => "'" + s.replace(/'/g, "'\\''") + "'"
const uuid = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i
const panes = () => run(['list-panes', '-a', '-F', '#{pane_id}\t#{session_name}:#{window_index}.#{pane_index}\t#{pane_current_path}\t#{pane_current_command}\t#{pane_pid}\t#{@ai-session-id}\t#{@ai-session-tool}\t#{@ai-session-file}'])
  .split('\n').filter(Boolean).map((line) => {
    const [pane, target, cwd, command, pid, id, tool, sessionFile] = line.split('\t')
    return { pane, target, cwd, command, pid: Number(pid), id, tool, sessionFile }
  })
const processes = () => execFileSync('ps', ['-axo', 'pid=,ppid=,command='], { encoding: 'utf8' }).split('\n').flatMap((line) => {
  const m = line.trim().match(/^(\d+)\s+(\d+)\s+(.*)$/)
  return m ? [{ pid: Number(m[1]), parent: Number(m[2]), command: m[3] }] : []
})
const descendants = (pid, rows) => {
  const ids = new Set([pid])
  let size
  do { size = ids.size; for (const row of rows) if (ids.has(row.parent)) ids.add(row.pid) } while (ids.size !== size)
  return rows.filter((row) => ids.has(row.pid))
}
const identify = (pane, rows) => {
  const children = descendants(pane.pid, rows)
  const ai = children.find((row) => /(?:^|[/ ])(?:codex|claude|pi)(?:\.exe)?(?: |$)/.test(row.command))
  if (!ai) return null // Don't revive an AI process the user already exited.
  const tool = ai.command.match(/(?:^|[/ ])(codex|claude|pi)(?:\.exe)?(?: |$)/)[1]
  const explicit = ai.command.match(/(?:resume|--resume|--session|--session-id)\s+([0-9a-f-]{36})(?:\s|$)/i)
  let id = explicit?.[1] || (pane.tool === tool || !pane.tool ? pane.id : '')
  let sessionFile = pane.sessionFile || ''
  if (!uuid.test(id || '')) {
    // Normal fresh Codex/Claude launches may keep their transcript open.
    for (const child of children) {
      let open = ''
      try { open = execFileSync('lsof', ['-p', String(child.pid), '-Fn'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }) } catch {}
      const files = open.split('\n').filter((s) => s.startsWith('n') && s.endsWith('.jsonl') &&
        (tool === 'codex' ? s.includes('/.codex/sessions/') : tool === 'claude' ? s.includes('/.claude/projects/') && !s.includes('/subagents/') : s.includes('/.pi/agent/sessions/')))
      if (files.length !== 1) continue
      const match = files[0].match(/([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12})\.jsonl$/i)
      if (match) { id = match[1]; sessionFile = files[0].slice(1); break }
    }
  }
  if (!uuid.test(id || '')) { console.error(`AI recovery: cannot determine exact ${tool} session in ${pane.target}; not saved`); return null }
  return { target: pane.target, cwd: pane.cwd, tool, id, sessionFile }
}
const save = () => {
  const rows = processes()
  const entries = panes().map((pane) => identify(pane, rows)).filter(Boolean)
  fs.mkdirSync(dir, { recursive: true, mode: 0o700 })
  const temp = file + '.' + process.pid
  fs.writeFileSync(temp, JSON.stringify({ version: 1, entries }, null, 2), { mode: 0o600 })
  fs.renameSync(temp, file)
}
const restore = () => {
  if (!fs.existsSync(file)) return
  const { version, entries } = JSON.parse(fs.readFileSync(file, 'utf8'))
  if (version !== 1 || !Array.isArray(entries)) throw new Error('Invalid AI session snapshot')
  const current = panes()
  const rows = processes()
  const active = new Set(current.map((pane) => identify(pane, rows)).filter(Boolean).map((x) => x.tool + ':' + x.id))
  for (const entry of entries) {
    const { target, cwd, tool, id, sessionFile } = entry
    if (!['pi', 'codex', 'claude'].includes(tool) || !uuid.test(id || '') || typeof target !== 'string' || typeof cwd !== 'string') continue
    const key = tool + ':' + id
    if (active.has(key)) continue
    const pane = current.find((p) => p.target === target)
    // Never send resume commands into an existing application or user's occupied shell.
    if (!pane || !['sh', 'bash', 'zsh', 'fish', 'dash', 'ksh'].includes(pane.command) || descendants(pane.pid, rows).length !== 1) continue
    if (!fs.existsSync(cwd)) { console.error(`AI recovery: directory missing for ${target}: ${cwd}`); continue }
    try { execFileSync('/bin/sh', ['-c', 'command -v "$1"', 'sh', tool], { stdio: 'ignore' }) } catch { console.error(`AI recovery: ${tool} is not installed; skipped ${target}`); continue }
    const args = tool === 'pi' ? ['pi', '--no-extensions', '--extension', path.join(dir, 'pi-session.ts'), '--session', sessionFile && fs.existsSync(sessionFile) ? sessionFile : id]
      : tool === 'codex' ? ['codex', 'resume', id] : ['claude', '--resume', id]
    // Launch directly in the restored pane: avoids shell startup races and quoting differences.
    const command = args.map(quote).join(' ') + '; exec ' + quote(process.env.SHELL || '/bin/sh')
    run(['set-option', '-p', '-t', pane.pane, '@ai-session-id', id])
    run(['set-option', '-p', '-t', pane.pane, '@ai-session-tool', tool])
    if (sessionFile) run(['set-option', '-p', '-t', pane.pane, '@ai-session-file', sessionFile])
    run(['respawn-pane', '-k', '-t', pane.pane, '-c', cwd, command])
    active.add(key)
  }
}
try {
  if (process.argv[2] === 'save') save()
  else if (process.argv[2] === 'restore') restore()
  else if (process.argv[2] === 'start-watch') {
    const pid = Number(run(['show-option', '-gqv', '@ai-recovery-watcher-pid']))
    let alive = false
    if (pid) { try { process.kill(pid, 0); alive = true } catch {} }
    if (!alive) {
      const child = spawn(process.execPath, [__filename, 'watch', run(['display-message', '-p', '#{pid}'])], { detached: true, stdio: 'ignore' })
      run(['set-option', '-g', '@ai-recovery-watcher-pid', String(child.pid)])
      child.unref()
    }
  }
  else if (process.argv[2] === 'watch') {
    setInterval(() => {
      try {
        if (run(['display-message', '-p', '#{pid}']) !== process.argv[3]) process.exit(0)
        execFileSync(path.join(dir, 'tmux-resurrect/scripts/save.sh'), ['quiet'], { stdio: 'ignore', timeout: 120000 })
      } catch { process.exit(0) }
    }, 300000)
  }
  else if (process.argv[2] === 'record') {
    const data = JSON.parse(fs.readFileSync(0, 'utf8'))
    const id = data.session_id || data.sessionId
    const tool = process.argv[3]
    if (process.env.TMUX_PANE && uuid.test(id || '') && ['codex', 'claude'].includes(tool) && !data.parent_session_id && !data.parent_thread_id) {
      run(['set-option', '-p', '-t', process.env.TMUX_PANE, '@ai-session-id', id])
      run(['set-option', '-p', '-t', process.env.TMUX_PANE, '@ai-session-tool', tool])
      run(['set-option', '-p', '-t', process.env.TMUX_PANE, '@ai-session-file', ''])
    }
  }
  else if (process.argv[2] === 'install-hooks') {
    for (const [tool, name] of [['codex', '.codex/hooks.json'], ['claude', '.claude/settings.json']]) {
      const configFile = path.join(home, name)
      try {
        const config = fs.existsSync(configFile) ? JSON.parse(fs.readFileSync(configFile, 'utf8')) : {}
        const command = quote(path.join(dir, 'ai-sessions.sh')) + ' record ' + tool
        config.hooks ||= {}
        config.hooks.SessionStart ||= []
        if (config.hooks.SessionStart.some((group) => group.hooks?.some((hook) => hook.command === command))) continue
        config.hooks.SessionStart.push({ hooks: [{ type: 'command', command, timeout: 3 }] })
        fs.mkdirSync(path.dirname(configFile), { recursive: true })
        const temp = configFile + '.' + process.pid
        fs.writeFileSync(temp, JSON.stringify(config, null, 2) + '\n', { mode: 0o600 })
        fs.renameSync(temp, configFile)
      } catch (error) { console.error(`AI recovery: preserved unreadable ${configFile}: ${error.message}`) }
    }
  }
  else throw new Error('Expected save or restore')
} catch (error) { console.error('AI recovery:', error.message); process.exitCode = 1 }
AI_SESSIONS
  # Absolute Node path also works when tmux's environment predates nvm/fnm initialisation.
  _recovery_node="$(command -v node)"
  printf '#!/bin/sh\nexec "%s" "$HOME/.config/ai-anywhere/tmux/ai-sessions.cjs" "$@"\n' "$_recovery_node" > "$_restore_dir/ai-sessions.sh"
  chmod 700 "$_restore_dir/ai-sessions.sh"
  cat > "$_restore_dir/pi-session.ts" <<'PI_SESSION'
import { execFileSync } from 'node:child_process'
export default function (pi: any) {
  pi.on('session_start', (_event: any, ctx: any) => {
    if (!process.env.TMUX_PANE) return
    const values = { '@ai-session-tool': 'pi', '@ai-session-id': ctx.sessionManager.getSessionId(), '@ai-session-file': ctx.sessionManager.getSessionFile() || '' }
    for (const [key, value] of Object.entries(values)) {
      try { execFileSync('tmux', ['set-option', '-p', '-t', process.env.TMUX_PANE, key, value], { stdio: 'ignore' }) } catch {}
    }
  })
}
PI_SESSION
  # Fresh Pi sessions record IDs too. Explicit --no-extensions users can pass --extension
  # to this same helper; resumed sessions above do so without enabling unrelated loops.
  mkdir -p "$HOME/.pi/agent/extensions"
  cat > "$HOME/.pi/agent/extensions/ai-anywhere-session.ts" <<'PI_LOADER'
export { default } from '../../../.config/ai-anywhere/tmux/pi-session.ts'
PI_LOADER

  "$_restore_dir/ai-sessions.sh" install-hooks

  _restore_layout=0
  if ! tmux has-session -t AA 2>/dev/null; then
    # new-session keeps a fresh server alive; start-server alone exits without sessions.
    tmux new-session -d -s AA || tmux has-session -t AA
    _restore_layout=1
  fi
  tmux source-file "$_restore_dir/recovery.conf"
  # Suppress continuum's asynchronous startup restore; resurrect is run synchronously here.
  if [ "$_restore_layout" -eq 1 ]; then
    "$_restore_dir/tmux-resurrect/scripts/restore.sh" || warn "Could not restore tmux layout; saved files have been kept"
  fi
  "$_restore_dir/ai-sessions.sh" start-watch || warn "Could not start periodic tmux snapshot saving"
  "$_restore_dir/ai-sessions.sh" restore || warn "Some AI sessions could not be restored; saved files have been kept"
  # Save immediately as well as on continuum's schedule (which needs an attached client).
  "$_restore_dir/tmux-resurrect/scripts/save.sh" quiet || warn "Could not save tmux layout"
  ok "tmux started; saved pi, Codex and Claude sessions restored where available"
}

# ── 2. Node.js ───────────────────────────────────────────────────────
# 22.5 is the floor because the CLI's package.json declares engines >=22.5.0.
NODE_MIN_MAJOR=22
NODE_MIN_MINOR=5

# 0 = this machine's node is new enough, 1 = missing or too old.
node_ok() {
  have node || return 1
  # process.versions.node is always "MAJOR.MINOR.PATCH".
  _major="$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null || echo 0)"
  _minor="$(node -p 'process.versions.node.split(".")[1]' 2>/dev/null || echo 0)"
  case "$_major$_minor" in
    '' | *[!0-9]*) return 1 ;;
  esac
  [ "$_major" -gt "$NODE_MIN_MAJOR" ] && return 0
  [ "$_major" -eq "$NODE_MIN_MAJOR" ] && [ "$_minor" -ge "$NODE_MIN_MINOR" ] && return 0
  return 1
}

# Node is deliberately NOT installed system-wide. Distro packages and NodeSource both mean touching
# apt/dnf sources as root to put a second Node on a machine that may already manage its own — too
# invasive for an installer. If the user already runs a version manager we drive it; otherwise we
# stop and let them choose. So the only automatic path is fnm or nvm, installing the latest LTS.

# nvm is a shell function sourced from nvm.sh, never a binary on PATH — `command -v nvm` cannot see
# it from a non-interactive script. Locate the script itself instead.
nvm_sh() {
  for _c in "${NVM_DIR:-}/nvm.sh" "$HOME/.nvm/nvm.sh" "$HOME/.config/nvm/nvm.sh" \
    /opt/homebrew/opt/nvm/nvm.sh /usr/local/opt/nvm/nvm.sh; do
    if [ -s "$_c" ]; then
      echo "$_c"
      return 0
    fi
  done
  return 1
}

install_node_fnm() {
  say "found fnm ($(command -v fnm)) — installing the latest LTS…"
  fnm install --lts
  # fnm only ever mutates the shell that calls it. Without importing its env here, the Node it just
  # installed is invisible to the rest of this script. `--shell bash` emits plain `export` lines,
  # which any POSIX shell can eval.
  eval "$(fnm env --shell bash)" || true
  fnm use lts-latest >/dev/null 2>&1 || true
  # Make it this user's default too, so the next shell — and the server on next login — still has it.
  fnm default lts-latest >/dev/null 2>&1 || true
}

install_node_nvm() {
  _nvm="$(nvm_sh)"
  say "found nvm ($_nvm) — installing the latest LTS…"
  # nvm.sh is not written against `set -eu`: it reads unset variables and returns non-zero in
  # ordinary paths, either of which would abort this script mid-install. Relax both while it runs;
  # node_ok below is the real gate on whether any of it worked.
  set +eu
  # shellcheck source=/dev/null
  . "$_nvm"
  nvm install --lts
  nvm use --lts
  set -eu
}

ensure_node() {
  if node_ok; then
    ok "Node.js $(node -v) ✓"
    return
  fi
  if have node; then
    say "Node.js $(node -v) is older than ${NODE_MIN_MAJOR}.${NODE_MIN_MINOR}"
  else
    say "Node.js not found"
  fi

  if have fnm; then
    install_node_fnm
  elif nvm_sh >/dev/null 2>&1; then
    install_node_nvm
  else
    requirement node "Node.js ${NODE_MIN_MAJOR}.${NODE_MIN_MINOR}+ is required. Install it from https://nodejs.org and re-run. (If you use nvm or fnm, this script installs the latest LTS through it automatically.)"
  fi

  # A version manager can report success and still leave this shell pointing elsewhere — an older
  # node earlier in PATH, or an env import that did not take. Check rather than assume.
  have node || requirement node "the version manager finished, but Node.js is still not on PATH — open a new shell and re-run, or install Node.js from https://nodejs.org"
  node_ok || requirement node "the version manager installed $(node -v), which is below the required ${NODE_MIN_MAJOR}.${NODE_MIN_MINOR} — an older Node.js binary may be earlier in PATH. Install Node.js from https://nodejs.org and re-run."
  ok "Node.js $(node -v) installed"
}

# ── 3. the CLI ───────────────────────────────────────────────────────
PKG='@ai-anywhere/cli'
# The latest published version, updated on every release (scripts/publish-cli.sh in the core repo
# enforces that this matches the package.json being published). Pinning makes the script
# reproducible and lets a re-run skip npm entirely when nothing changed.
CLI_VERSION='0.0.32'
PTY_PKG='@homebridge/node-pty-prebuilt-multiarch'
CLI_BIN=''

install_cli_with_npm() {
  _npm_major="$(npm -v | cut -d. -f1)"
  case "$_npm_major" in
    '' | *[!0-9]*) _npm_major=0 ;;
  esac

  # Scope-specific registries take precedence over npm's default registry. Override both the
  # CLI and its scoped native dependency without changing the user's prefix or proxy settings.
  # Always revalidate metadata online, even when npmrc enables offline/prefer-offline mode.
  set -- "$@" install -g --registry=https://registry.npmjs.org \
    --@ai-anywhere:registry=https://registry.npmjs.org \
    --@homebridge:registry=https://registry.npmjs.org \
    --prefer-online --prefer-offline=false --offline=false

  # npm 11 asks global installers to explicitly approve dependencies with lifecycle scripts.
  # npm 10 does not know this option. Error-level logging keeps failures visible while omitting
  # transitive deprecation, funding and update notices from the one-line installer.
  if [ "$_npm_major" -ge 11 ]; then
    "$@" --allow-scripts="$PTY_PKG" --loglevel=error --no-fund --no-audit "$PKG@$CLI_VERSION"
  else
    "$@" --loglevel=error --no-fund --no-audit "$PKG@$CLI_VERSION"
  fi
}

install_cli() {
  # Fast path: this exact version is already installed — nothing for npm to do.
  if have ai-anywhere && [ "$(ai-anywhere -v 2>/dev/null || true)" = "$CLI_VERSION" ]; then
    CLI_BIN="$(command -v ai-anywhere)"
    ok "${PKG} v${CLI_VERSION} already installed: $CLI_BIN"
    return
  fi
  have npm || requirement npm "npm is required to install ${PKG} but was not found — install it alongside Node.js and re-run"
  # Being on PATH is not enough: a distro can leave npm as a dangling alternatives symlink when the
  # npm package itself is absent (openSUSE's /usr/bin/npm-default does exactly this). Without this
  # check the script marches on and fails later inside npm with a bare "No such file or directory".
  npm -v >/dev/null 2>&1 || requirement npm "npm is on PATH at $(command -v npm), but it does not run — install your distro's npm package for Node.js ${NODE_MIN_MAJOR}, then re-run"
  say "installing ${PKG}@${CLI_VERSION}…"
  # A root-owned global prefix (system Node on Linux) needs sudo; a user-owned one (nvm, fnm,
  # Homebrew) must NOT get it — installing as root there leaves files the user can't later update.
  _prefix="$(npm prefix -g 2>/dev/null || echo '')"
  if [ -n "$_prefix" ] && [ -w "$_prefix" ]; then
    install_cli_with_npm npm
  else
    say "npm's global prefix (${_prefix:-unknown}) is not writable — installing with sudo"
    install_cli_with_npm as_root npm
  fi
  if have ai-anywhere; then
    CLI_BIN="$(command -v ai-anywhere)"
    ok "installed: $CLI_BIN"
  elif [ -n "$_prefix" ] && [ -x "$_prefix/bin/ai-anywhere" ]; then
    CLI_BIN="$_prefix/bin/ai-anywhere"
    warn "${PKG} installed, but 'ai-anywhere' is not on PATH."
    warn "Add npm's global bin to PATH:  export PATH=\"\$(npm prefix -g)/bin:\$PATH\""
  else
    # The package landed, but npm's global bin dir isn't on PATH — a real and common state that
    # isn't a failure of the install itself, so report it as a next step rather than dying.
    warn "${PKG} installed, but 'ai-anywhere' is not on PATH."
    warn "Add npm's global bin to PATH:  export PATH=\"\$(npm prefix -g)/bin:\$PATH\""
  fi
}

# ── run ──────────────────────────────────────────────────────────────
if [ "$DESKTOP" -eq 1 ]; then
  trap 'desktop_finish "$?"' 0
  desktop_state checking
  have curl || desktop_requirement curl "curl is required. Install curl with your system package manager, then retry the official installer: curl -fsSL https://tmux.online/install.sh | sh -s -- --desktop"
  if desktop_check; then
    if have tmux && node_ok; then
      ensure_tmux_restore
      ensure_ai_session_restore
    fi
    exit 0
  fi
  desktop_state installing
fi
say "setting up AI Anywhere…"
ensure_tmux
ensure_tmux_restore
ensure_node
ensure_ai_session_restore
install_cli

printf '\n'
if [ -n "$CLI_BIN" ]; then
  if [ "$DESKTOP" -eq 1 ]; then
    # A second app or terminal may have started the bridge during dependency installation.
    if desktop_check; then exit 0; fi
    desktop_state starting
    _start_exit=0
    "$CLI_BIN" up -d --host 0.0.0.0 --port 51984 </dev/null || _start_exit=$?
    # A competing startup can win the port while this CLI is waiting for account authorisation.
    # Reuse that healthy bridge rather than treating the losing process as a failed launch.
    if desktop_check; then exit 0; fi
    if [ "$_start_exit" -ne 0 ]; then
      die "AI Anywhere could not start (exit $_start_exit). Follow the instructions above, then retry."
    fi
    die "AI Anywhere exited without a healthy service on port 51984. Run ai-anywhere logs in a terminal for details."
  fi
  ok "${B}All set.${Z} Starting AI Anywhere…"
  # The installer owns this restart, so apply the same validated shutdown as answering "y" to
  # `up`'s occupied-port prompt. `down` refuses to signal a process it cannot identify as ours.
  "$CLI_BIN" down >/dev/null
  # `curl ... | sh` leaves stdin attached to the installer pipe. Restore the controlling terminal
  # for any exceptional prompt that still needs user input after the validated shutdown.
  if [ -t 1 ] && ( : </dev/tty ) 2>/dev/null; then
    exec "$CLI_BIN" up </dev/tty
  fi
  exec "$CLI_BIN" up
else
  if [ "$DESKTOP" -eq 1 ]; then
    desktop_requirement path "AI Anywhere was installed but its executable could not be found. Add npm's global bin directory to PATH, then reopen the app."
  fi
  ok "${B}Installed.${Z} Update PATH as shown above, then run:  ${Y}ai-anywhere up${Z}"
fi
