import { INSTALL_URL, ISSUES_URL, NPM_URL, REPO_URL } from '../config'
import type { Copy } from './index'

export const nl: Copy = {
  meta: {
    title: 'AI-codeeragents in je browser | tmux.online',
    description:
      'Volg en bedien Claude Code, Codex, Gemini CLI, Aider, Copilot CLI en elke tmux-sessie vanuit elke browser. Terminalgegevens blijven op je machine',
    ogAlt: 'tmux.online-werkruimte met AI-codeertaken die aandacht nodig hebben',
  },
  brand: {
    name: 'tmux.online',
    tagline: 'by AI Anywhere',
  },
  nav: {
    primaryLabel: 'Hoofdnavigatie',
    install: 'Installeren',
    features: 'Functies',
    faq: 'Veelgestelde vragen',
    github: 'GitHub',
    signIn: 'Inloggen',
    account: 'Account',
    skipToContent: 'Naar inhoud springen',
  },
  dashboard: {
    label: 'Dashboard',
    navLabel: 'Accountbeheer',
    open: 'Dashboard openen',
    redirecting: 'Dashboard openen…',
    continue: 'Doorgaan',
    titleSuffix: ' — tmux.online',
  },
  hero: {
    installMethodLabel: 'Installatiemethode',
    eyebrow: 'De opdrachtregel, zo eenvoudig als een webpagina',
    title: 'Your agents. Any browser. Anywhere',
    lede: 'Volg Claude Code, Codex en alle AI-codeertaken in tmux. Grijp vanuit elke browser in zodra ze je nodig hebben',
    installLabel: 'macOS en Linux',
    copy: 'Kopiëren',
    copied: 'Gekopieerd',
    copyAria: 'Installatieopdracht kopiëren',
    scriptLink: 'Lees eerst het script',
    requirement: 'Vereist tmux en Node.js 22.5+',
  },
  download: {
    label: 'Desktopapp',
    mac: 'macOS',
    windows: 'Windows',
    soon: 'Binnenkort',
    soonTitle: 'Nog niet beschikbaar om te downloaden',
    note: 'Desktopversies zijn in ontwikkeling. Gebruik tot die tijd de installatieopdracht hierboven; de app werkt in elke browser',
  },
  demo: {
    caption: 'Eén werkruimte voor lokale en externe machines, met alle taken en tabbladen in beeld',
    tabs: ['tmux.online', 'localhost:51984'],
    url: '127.0.0.1:51984',
    railTitle: 'Machines en taken',
    groups: [
      {
        name: 'Deze machine',
        items: [
          {
            name: 'api-server',
            detail: 'main · 3 panes',
            state: 'waiting',
          },
          {
            name: 'web',
            detail: 'feat/i18n',
            state: 'busy',
          },
          {
            name: 'notes',
            detail: 'main',
            state: 'idle',
          },
        ],
      },
      {
        name: 'caniforia',
        items: [
          {
            name: 'deploy',
            detail: 'main · 2 panes',
            state: 'idle',
          },
          {
            name: 'logs',
            detail: 'tail -f',
            state: 'busy',
          },
        ],
      },
    ],
    paneTabs: ['claude', 'server', 'git'],
    stateLabels: {
      waiting: 'Wacht op jou',
      busy: 'Bezig',
      idle: '',
    },
    terminal: [
      {
        kind: 'prompt',
        text: 'claude',
      },
      {
        kind: 'dim',
        text: '  ⏵ reading src/lib/layout.ts',
      },
      {
        kind: 'dim',
        text: '  ⏵ reading src/state/useAttention.ts',
      },
      {
        kind: 'plain',
        text: 'The drag target is computed from the pane tree, not the tmux',
      },
      {
        kind: 'plain',
        text: 'layout, so splitting the view never sends a tmux command',
      },
      {
        kind: 'blank',
        text: '',
      },
      {
        kind: 'attention',
        text: '  Apply this change to layout.ts?',
      },
      {
        kind: 'plain',
        text: '  1. Yes   2. Yes, and don’t ask again   3. No',
      },
      {
        kind: 'cursor',
        text: '  ❯ ',
      },
    ],
  },
  steps: {
    title: 'Aan de slag in drie stappen',
    items: [
      {
        n: '01',
        title: 'Voer het installatieprogramma uit',
        body: 'Installeert zo nodig tmux, downloadt AI Anywhere van npm en stelt launchd of systemd in om het na een herstart weer te starten',
      },
      {
        n: '02',
        title: 'Open de getoonde link',
        body: 'Wacht tot de server gereed is en toont een localhost-URL met een token. Open deze in een browser op die machine',
      },
      {
        n: '03',
        title: 'Ga verder waar je was gebleven',
        body: 'Je bestaande vensters verschijnen links; niets wordt herstart, opnieuw gekoppeld of verplaatst',
      },
    ],
  },
  features: {
    title: 'Werkt zelfstandig en vraagt je aandacht wanneer nodig',
    items: [
      {
        icon: 'terminal',
        title: 'Open je bestaande tmux-sessies',
        body: 'Je actieve sessies openen ongewijzigd in de browser. Er wordt niets verplaatst, gekopieerd of herstart. Ga verder waar je was gebleven',
      },
      {
        icon: 'nodes',
        title: 'Alle machines in één zijbalk',
        body: 'Bekijk deze machine en alle servers waarmee je via SSH verbindt in één zijbalk. Elke host heeft zijn eigen taken, allemaal binnen bereik',
      },
      {
        icon: 'signal',
        title: 'Weet wanneer een taak je nodig heeft',
        body: 'Zodra een CLI pauzeert voor een vraag, licht de taak op. Werk ondertussen aan iets anders; je hoeft niet te blijven kijken',
      },
      {
        icon: 'checklist',
        title: 'Volg elke subagent afzonderlijk',
        body: 'Wanneer een CLI subagents start, wordt elk afzonderlijk gevolgd. Je ziet wat elke tak doet en welke op je wachten',
      },
      {
        icon: 'history',
        title: 'Verbinding weg, werk gaat door',
        body: 'Sluit het tabblad of verbreek SSH; het werk gaat door in tmux. Verbind opnieuw wanneer je wilt en ga verder',
      },
      {
        icon: 'power',
        title: 'Komt terug na een herstart',
        body: 'Na een herstart keert je werkruimte vanzelf terug, met dezelfde taken en tabbladen, zonder handmatig herstel',
      },
      {
        icon: 'shield',
        title: 'Niets verlaat je machine',
        body: 'Je hele werkruimte draait op hardware die je beheert. Uitvoer, toetsaanslagen, bestanden en sleutels worden nooit geüpload',
      },
      {
        icon: 'image',
        title: '75% minder afbeeldingstokens',
        body: 'Schermafbeeldingen worden geoptimaliseerd voordat ze het model bereiken, met 75% minder afbeeldingstokens zonder extra werk',
      },
      {
        icon: 'phone',
        title: 'Ook op je telefoon',
        body: 'Open dezelfde werkruimte op je telefoon om een taak te bekijken, te antwoorden of op een externe server te werken wanneer je niet aan je bureau zit',
      },
    ],
  },
  stats: {
    eyebrow: 'In cijfers',
    items: [
      {
        to: 75,
        unit: '%',
        icon: null,
        label: 'minder afbeeldingstokens',
      },
      {
        to: 70,
        unit: '%',
        icon: null,
        label: 'kleinere afbeeldingsuploads',
      },
      {
        to: null,
        unit: '',
        icon: 'shield',
        label: 'vraagt nooit om je bestanden',
      },
    ],
  },
  sells: {
    eyebrow: 'En ook dit',
    items: [
      {
        icon: 'history',
        label: 'Je sessies gaan nooit verloren',
      },
      {
        icon: 'signal',
        label: 'Meldt wanneer een taak je nodig heeft',
      },
      {
        icon: 'power',
        label: 'Taken keren terug na een herstart',
      },
      {
        icon: 'nodes',
        label: 'Alle externe machines op één plek',
      },
      {
        icon: 'phone',
        label: 'Werkt op je telefoon',
      },
      {
        icon: 'shield',
        label: 'Terminalgegevens komen nooit bij de accountdienst',
      },
    ],
  },
  extension: {
    label: 'Chrome-extensie',
    title: 'Of gebruik de zijbalk',
    body: 'Dezelfde werkruimte draait in het Chrome-zijpaneel naast wat je leest. Met de elementkiezer stuur je de URL, CSS-selector en HTML van een deel van de pagina direct naar je CLI, zodat de AI precies weet wat je bedoelt',
    cta: 'Bekijk de extensie',
  },
  security: {
    label: 'Waar het draait',
    title: 'Op jouw machine en nergens anders',
    body: 'tmux.online verzorgt accounts en apparaatautorisatie voor AI Anywhere. Terminalsessies, CLI-processen, toetsaanslagen en lokale sleutels blijven op hardware die je beheert',
    points: [
      'De server luistert standaard op 127.0.0.1; verbindingen zijn beveiligd met toegangsgegevens',
      'Bij elke verbinding wordt de Origin gecontroleerd, die een webpagina niet kan vervalsen, zodat andere tabbladen geen toegang krijgen',
      'Externe verbindingen gebruiken je eigen SSH-configuratie. Er is geen terminalrelay of telemetrie',
    ],
  },
  faq: {
    title: 'Vragen',
    items: [
      {
        q: 'Verandert dit mijn tmux-configuratie?',
        a: 'Er wordt niets naar je configuratie geschreven. De standaard tmux-sessie is AA. Vensters die door de app zijn aangepast, keren na het sluiten van de pagina terug naar automatische afmetingen',
      },
      {
        q: 'Wat heb ik nodig?',
        a: 'tmux en Node.js 22.5 of nieuwer',
      },
      {
        q: 'Werkt het op een externe server?',
        a: 'Installeer tmux op de externe server. Meer is niet nodig',
      },
      {
        q: 'Moet ik de extensie installeren?',
        a: 'Nee. De server biedt de webapp aan op 127.0.0.1:51984. De extensie voegt het zijpaneel en de elementkiezer toe',
      },
    ],
  },
  cta: {
    title: 'Laat de terminal draaien, zodat jij niet hoeft te blijven kijken',
    body: 'Eén opdracht om te installeren, één link om te openen. Daarna kun je verder',
  },
  changelog: {
    eyebrow: 'Releaseopmerkingen',
    title: 'Wijzigingen',
    description: 'Wat er veranderde in elke versie van AI Anywhere: versies, datums en wijzigingen',
    intro: 'Alle versies van de CLI-brug, browserextensie en het webdashboard, van nieuw naar oud',
    home: 'Home',
    versionPrefix: 'v',
  },
  footer: {
    rights: 'Standaard alleen lokaal. Terminaltoegang is beveiligd met toegangsgegevens',
    columns: [
      {
        title: 'Project',
        links: [
          {
            label: 'GitHub',
            href: REPO_URL,
          },
          {
            label: 'Problemen melden',
            href: ISSUES_URL,
          },
          {
            label: 'Wijzigingen',
            href: '/changelog',
          },
        ],
      },
      {
        title: 'Installeren',
        links: [
          {
            label: 'install.sh',
            href: INSTALL_URL,
          },
          {
            label: '@ai-anywhere/cli',
            href: NPM_URL,
          },
        ],
      },
    ],
    langLabel: 'Taal',
  },
  analytics: {
    label: 'Cookievoorkeuren',
    body: 'Cookies toestaan? Met analytische cookies meten we bezoeken en het gebruik van de site. Terminalinhoud, opdrachten, accountgegevens en uitnodigingscodes worden nooit verstuurd',
    accept: 'Accepteren',
    reject: 'Weigeren',
    settings: 'Cookie-instellingen',
  },
  auth: {
    signInWithGitHub: 'Doorgaan met GitHub',
    switchAccount: 'Ander GitHub-account gebruiken',
    signOut: 'Uitloggen',
    loading: 'Controleren…',
    genericError: 'Er is iets misgegaan. Probeer het zo opnieuw',
    networkError: 'De accountdienst is niet bereikbaar',
  },
  account: {
    metaTitle: 'Account — tmux.online',
    metaDescription: 'Beheer je tmux.online-account, aangemelde apparaten en API-sleutels',
    label: 'Account',
    signedOutTitle: 'Inloggen bij tmux.online',
    signedOutBody: 'Log in om apparaten te autoriseren, hun toegang op afstand in te trekken en API-sleutels te beheren',
    signedInAs: 'Ingelogd als',
    devicesTitle: 'Apparaten',
    devicesBody:
      'Bekijk alle apparaten die AI Anywhere mogen gebruiken. Een apparaat verwijderen vergrendelt de lokale interfaces zonder tmux-taken te stoppen',
    devicesEmpty: 'Geen aangemelde apparaten',
    deviceOnline: 'Online',
    deviceOffline: 'Offline',
    deviceLastSeen: 'Laatst gezien',
    deviceRevoke: 'Verwijderen',
    deviceRevokeConfirm: '{name} verwijderen? AI Anywhere op dat apparaat wordt direct vergrendeld',
    confirmCancel: 'Annuleren',
    keysTitle: 'API-sleutels',
    keysBody: 'Langdurige toegangsgegevens voor scripts en CI. Gebruik de x-api-key-requestheader. Intrekken gaat direct in',
    keysEmpty: 'Nog geen sleutels',
    keyNameLabel: 'Naam',
    keyNamePlaceholder: 'ci-deploy',
    keyCreate: 'Sleutel aanmaken',
    keyCreating: 'Aanmaken…',
    keyCreatedTitle: 'Kopieer deze sleutel nu',
    keyCreatedBody:
      'Alleen de hash wordt opgeslagen en de sleutel wordt niet opnieuw getoond. Ben je hem kwijt, trek hem dan in en maak een nieuwe aan',
    keyCopy: 'Kopiëren',
    keyCopied: 'Gekopieerd',
    keyRevoke: 'Intrekken',
    keyRevokeConfirm: 'Deze sleutel intrekken? Alles wat hem gebruikt, stopt direct met werken',
    keyCreatedAt: 'Aangemaakt',
    keyNameRequired: 'Geef de sleutel een naam zodat je hem later herkent',
  },
  membership: {
    navTitle: 'Tijdelijke uitnodigingsactie',
    invalidInviteLink: 'Deze uitnodigingslink is ongeldig. Vraag je vriend om een nieuwe',
    dismissInvalidInvite: 'Sluiten',
    title: 'Nodig 3 vrienden uit voor een levenslang lidmaatschap',
    intro: 'Een levenslang lidmaatschap is normaal betaald. Nodig tijdelijk 3 vrienden uit die zich aanmelden en ontvang het gratis',
    deadline: 'Actie eindigt op {deadline}',
    progressTitle: 'Voortgang van uitnodigingen',
    progressCount: '{points} / {threshold} vrienden aangemeld',
    progressRemaining: 'Nog {n} om een levenslang lidmaatschap te ontgrendelen',
    progressComplete: 'Levenslang lidmaatschap ontgrendeld',
    tierTrial: 'Proefperiode',
    tierPermanent: 'Levenslang lid',
    trialLeft: 'Nog {n} dagen in je proefperiode',
    trialEnded: 'Je proefperiode is afgelopen',
    permanentBody: 'Je hebt nu levenslang toegang',
    premiumBadge: 'Premiumlid',
    inviteModeLabel: 'Uitnodigingsvorm',
    inviteLinkTab: 'Uitnodigingslink',
    inviteCodeTab: 'Uitnodigingscode',
    inviteBody: 'Vrienden die zich via deze link aanmelden voordat de actie eindigt, tellen mee voor je voortgang',
    inviteCodeBody: 'Vrienden kunnen deze code na registratie koppelen op de lidmaatschapspagina. Daarna tellen ze mee voor je voortgang',
    inviteCopy: 'Uitnodigingslink kopiëren',
    inviteCodeCopy: 'Uitnodigingscode kopiëren',
    inviteCopied: 'Gekopieerd',
    bindTitle: 'Uitnodigingscode koppelen',
    bindBody: 'Koppel de code van een vriend voor 7 extra proefdagen. Je kunt maar één keer een code koppelen',
    bindPlaceholder: 'UITNODIGINGSCODE',
    bind: 'Koppelen',
    binding: 'Koppelen…',
    bindErrors: {
      invalid_code: 'Deze code is ongeldig. Controleer hem en probeer opnieuw',
      already_redeemed: 'Je hebt al een uitnodigingscode gekoppeld',
      self_invite: 'Je kunt je eigen uitnodigingscode niet koppelen',
      cycle: 'Je kunt geen code koppelen van iemand die jij hebt uitgenodigd',
    },
    downlineTitle: 'Aangemelde vrienden',
    downlineRevenueHint: 'Als uitgenodigde vrienden op het platform betalen, ontvang je een deel van de opbrengst',
    downlineEmpty: 'Nog niemand aangemeld',
    downlineEmptyCta: 'Deel je link voordat de actie eindigt. Nodig 3 vrienden uit voor een levenslang lidmaatschap',
    downlineJoined: 'Aangemeld',
    downlineAnon: 'Iemand',
    downlineMore: 'Meer laden',
    downlineLoading: 'Laden…',
  },
  device: {
    metaTitle: 'Apparaat autoriseren — tmux.online',
    metaDescription: 'Keur een verzoek om een apparaat bij je tmux.online-account aan te melden goed of weiger het',
    label: 'Apparaat',
    title: 'Apparaat autoriseren',
    body: 'Een apparaat vraagt toegang tot je account. Controleer of de onderstaande code overeenkomt met die op het apparaat en keur het verzoek goed',
    codeLabel: 'Code van het apparaat',
    codePlaceholder: 'ABCD-1234',
    continue: 'Doorgaan',
    approve: 'Goedkeuren',
    deny: 'Weigeren',
    working: 'Bezig…',
    approvedTitle: 'Apparaat goedgekeurd',
    approvedBody: 'Het apparaat is geautoriseerd. Over 3 seconden ga je naar je apparaten',
    deniedTitle: 'Apparaat geweigerd',
    deniedBody: 'Er is niets geautoriseerd. Je kunt dit tabblad sluiten',
    invalidCode: 'Deze code is ongeldig. Vergelijk hem met de code op het apparaat',
    expiredCode: 'Deze code is verlopen. Vraag op het apparaat een nieuwe aan',
    missingCode: 'Voer de code in die het apparaat toont',
  },
  notFound: {
    code: '404',
    title: 'Hier is geen terminalvenster',
    body: 'Dit adres bestaat niet op deze site',
    cta: 'Terug naar het begin',
  },
}
