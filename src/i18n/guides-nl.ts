import type { GuideCollection } from './guides'

export const nl: GuideCollection = {
  navTitle: 'Handleidingen',
  home: 'Home',
  pages: {
    tmuxWebUi: {
      eyebrow: 'tmux-webinterface',
      title: 'Een browserinterface voor je actieve tmux-sessies',
      description:
        'Open bestaande tmux-sessies in een browser, wissel tussen terminalvensters en beheer lokale of SSH-hosts zonder terminalgegevens te verplaatsen',
      summary:
        'AI Anywhere voegt een browserinterface toe aan tmux zonder het te vervangen. Je shells en agents blijven in tmux draaien op de machine waarop je ze hebt gestart',
      sections: [
        {
          title: 'tmux blijft de sessies beheren',
          body: [
            'De lokale server leest de bestaande sessies, vensters en terminalpanelen van tmux. De webinterface openen herstart, kopieert of verplaatst geen sessie',
            'Sluit de browser of verlies je netwerkverbinding; het proces blijft in tmux draaien. Open de pagina opnieuw om naar hetzelfde terminalvenster terug te keren',
          ],
        },
        {
          title: 'Eén overzicht van machines en taken',
          body: ['Lokale sessies en hosts die je via je SSH-configuratie bereikt, staan gegroepeerd in één zijbalk'],
          bullets: [
            'Wissel vanuit de browser tussen tmux-vensters en -panelen',
            'Zie welke AI-codeertaak bezig is of op invoer wacht',
            'Open dezelfde werkruimte op je telefoon wanneer de machine bereikbaar is',
          ],
        },
        {
          title: 'Wat lokaal blijft',
          body: [
            'De webapp wordt aangeboden door het lokale AI Anywhere-proces op 127.0.0.1. Terminaluitvoer, toetsaanslagen, bestanden en toegangsgegevens worden niet via tmux.online doorgestuurd',
          ],
        },
      ],
    },
    claudeCodeBrowser: {
      eyebrow: 'Claude Code',
      title: 'Gebruik Claude Code vanuit een browser zonder de terminal te verplaatsen',
      description: 'Laat Claude Code in tmux draaien, volg de status in een browser en beantwoord vragen vanaf je computer of telefoon',
      summary:
        'Start Claude Code zoals gewoonlijk in tmux. AI Anywhere maakt dezelfde terminal beschikbaar in de browser en geeft aan wanneer Claude op je antwoord wacht',
      sections: [
        {
          title: 'Laat de sessie doorgaan',
          body: [
            'Claude Code blijft in tmux draaien wanneer de browser sluit of SSH wegvalt. De browser is een andere weergave van de sessie, geen tweede Claude-proces',
          ],
        },
        {
          title: 'Kom terug wanneer invoer nodig is',
          body: [
            'Taken zijn per machine gegroepeerd en tonen of ze bezig zijn of wachten. Open de wachtende taak, bekijk de terminalcontext en antwoord in hetzelfde venster',
          ],
          bullets: [
            'Volg subagents als afzonderlijke taken',
            'Wissel tussen repositories zonder elke terminal in de gaten te houden',
            'Antwoord vanaf je telefoon wanneer je niet aan je bureau zit',
          ],
        },
        {
          title: 'Claude-toegangsgegevens blijven waar ze zijn',
          body: [
            'AI Anywhere vraagt niet om je Anthropic-toegangsgegevens en uploadt ze niet. Claude Code blijft op je eigen machine geïnstalleerd en aangemeld',
          ],
        },
      ],
    },
    codexBrowser: {
      eyebrow: 'Codex CLI',
      title: 'Bedien Codex CLI-taken vanuit elke browser',
      description: 'Draai Codex CLI in tmux, volg parallelle codeertaken en grijp via de browser in wanneer een taak invoer nodig heeft',
      summary:
        'Gebruik Codex CLI in je vertrouwde terminalworkflow. AI Anywhere maakt de tmux-sessie lokaal bereikbaar, zodat langlopende taken beschikbaar blijven tussen tabbladen, apparaten en verbroken verbindingen',
      sections: [
        {
          title: 'Houd elke taak in beeld',
          body: [
            'Een Codex-taak hoort bij het tmux-venster waarin hij draait. Parallelle agents en worktrees blijven gescheiden terwijl hun status in één zijbalk zichtbaar is',
          ],
        },
        {
          title: 'Grijp in vanaf een ander scherm',
          body: [
            'Wanneer Codex op een beslissing wacht, open je de taak in een browser op je computer of telefoon en ga je verder in de oorspronkelijke terminal',
          ],
          bullets: [
            'Geen tweede shell om te synchroniseren',
            'Geen terminaltranscript naar de accountdienst',
            'Je hoeft je laptopscherm niet open te laten',
          ],
        },
        {
          title: 'Je Codex-configuratie blijft ongewijzigd',
          body: [
            'Codex CLI, de configuratie en toegangsgegevens blijven op de machine. AI Anywhere biedt een browserinterface en takenoverzicht voor de bestaande tmux-sessie',
          ],
        },
      ],
    },
    security: {
      eyebrow: 'Beveiliging',
      title: 'De terminal blijft op je machine',
      description:
        'Lees hoe AI Anywhere de lokale server, verbindingstokens, Origin-controles en SSH gebruikt, en wat de accountdienst wel en niet doet',
      summary:
        'AI Anywhere is een lokale brug, geen gehoste terminal. De browser praat met het proces naast tmux, terwijl tmux.online de website en accountautorisatie verzorgt',
      sections: [
        {
          title: 'Standaard lokaal',
          body: [
            'De server luistert standaard op 127.0.0.1. Een proces op dat adres is bereikbaar vanaf dezelfde machine, niet rechtstreeks vanaf het openbare internet',
          ],
        },
        {
          title: 'Verbindingen worden gecontroleerd',
          body: [
            'De lokale URL bevat een verbindingstoken en de server controleert de Origin van het verzoek. Een willekeurige webpagina kan niet ongemerkt met een lokale terminal verbinden',
          ],
          bullets: [
            'Terminaluitvoer en toetsaanslagen gaan niet naar de accountdienst',
            'Bestanden en CLI-toegangsgegevens blijven op de machine',
            'Externe verbindingen gebruiken je eigen SSH-configuratie zonder terminalrelay',
          ],
        },
        {
          title: 'Wat de accountdienst doet',
          body: [
            'De accountdienst autoriseert apparaten en beheert lidmaatschappen en API-sleutels. Hij vervoert geen terminalgegevens. Een apparaat intrekken verwijdert de accountautorisatie zonder de tmux-taken op die machine te stoppen',
          ],
        },
      ],
    },
    remoteHosts: {
      eyebrow: 'Externe hosts',
      title: 'Gebruik je bestaande SSH-hosts in dezelfde werkruimte',
      description: 'Bekijk tmux-taken op externe servers via je bestaande SSH-configuratie, zonder gehoste relay of tweede terminalaccount',
      summary:
        'Installeer tmux op de externe server. AI Anywhere gebruikt je bestaande SSH-configuratie en toont de host naast je lokale machine',
      sections: [
        {
          title: 'Wat de externe server nodig heeft',
          body: [
            'Op de externe host is alleen tmux nodig. Gebruik de SSH-sleutels, aliassen, jumphosts en hostverificatie die al op je machine zijn ingesteld',
          ],
          command: 'tmux new -s main',
        },
        {
          title: 'Sessies blijven op de externe machine',
          body: [
            'Opdrachten en agentprocessen draaien in tmux op de externe server. AI Anywhere kopieert de sessie niet naar tmux.online en leidt terminalverkeer niet via een externe relay',
          ],
        },
        {
          title: 'Opnieuw verbinden zonder werk te verliezen',
          body: [
            'Een verbroken browser- of SSH-verbinding stopt tmux niet. Open dezelfde taak zodra de host weer bereikbaar is en ga verder',
          ],
        },
      ],
    },
    install: {
      eyebrow: 'Installatie',
      title: 'Installeer AI Anywhere op macOS of Linux',
      description: 'Installeer de AI Anywhere CLI, start de lokale tmux-webinterface en autoriseer de machine vanuit je browser',
      summary:
        'Het installatieprogramma controleert tmux en Node.js, installeert @ai-anywhere/cli van npm en stelt de lokale dienst in om na een herstart terug te keren',
      sections: [
        {
          title: 'Voer het installatieprogramma uit',
          body: ['Gebruik curl of bekijk eerst het script op tmux.online/install.sh. Vereist tmux en Node.js 22.5 of nieuwer'],
          command: 'curl -fsSL https://tmux.online/install.sh | sh',
        },
        {
          title: 'Autoriseer deze machine',
          body: [
            'Het installatieprogramma start AI Anywhere en opent of toont een lokale URL. Log in en voltooi de apparaatautorisatie als de machine nog niet is geautoriseerd',
          ],
          command: 'ai-anywhere login',
        },
        {
          title: 'Later opnieuw starten',
          body: [
            'De dienst gebruikt launchd op macOS of een systemd-gebruikersservice op Linux. Je kunt hem ook direct starten; de lokale webinterface gebruikt standaard 127.0.0.1:51984',
          ],
          command: 'ai-anywhere up',
        },
        {
          title: 'Bijwerken naar de nieuwste versie',
          body: [
            'Als er een nieuwe versie is, biedt ai-anywhere up maximaal één keer per dag aan die te installeren. Accepteer om bij te werken en start daarna opnieuw volgens de instructies',
            'Voer het installatieprogramma opnieuw uit om op elk moment handmatig bij te werken. Het vervangt de CLI en behoudt je gegevens, actieve tmux-sessies en apparaatautorisatie',
          ],
          bullets: [
            'tmux bewaart je sessies tijdens de update; de dienst vindt ze bij de volgende start terug',
            'De wijzigingen per versie staan op tmux.online/changelog',
          ],
          command: 'curl -fsSL https://tmux.online/install.sh | sh',
        },
      ],
    },
  },
}
