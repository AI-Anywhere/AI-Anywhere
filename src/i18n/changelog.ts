import type { Lang } from './index'

/**
 * Release notes for @ai-anywhere/cli, newest first.
 *
 * English is the baseline; other languages translate per release. A missing translation falls
 * back to English rather than hiding the release — shipping the fact beats waiting for the prose.
 * Lives in i18n because it is copy (and because the ASCII gate exempts only this directory).
 *
 * Data, not prose in a component, so adding a release touches exactly one file. Dates are the
 * dates the version's tag was cut in the core repo.
 */

export interface Release {
  version: string
  /** ISO date (YYYY-MM-DD), the day the release tag was cut. */
  date: string
  /** One user-facing line per change; no trailing periods, matching the site's copy style. */
  changes: { en: string[] } & Partial<Record<Lang, string[]>>
}

/** The list a given page renders, and whether it is a fallback (so the markup can say lang="en"). */
export const changesFor = (release: Release, lang: Lang): { items: string[]; translated: boolean } => {
  const items = release.changes[lang]
  return items ? { items, translated: true } : { items: release.changes.en, translated: lang === 'en' }
}

export const releases: Release[] = [
  {
    version: '0.0.27',
    date: '2026-10-08',
    changes: {
      en: [
        'Desktop installers are now available for macOS and Windows',
        'On macOS, native terminal rendering improves scrolling and text selection',
        'Cmd+R, Ctrl+R and F5 reload the desktop interface and reconnect while preserving running tmux sessions and unsent drafts',
        'Desktop settings and wallpaper transparency now match the web interface more closely',
        'Improved native window and fullscreen controls, sidebar toggling and the macOS Dock activity indicator',
      ],
      ja: [
        'macOS と Windows 向けのデスクトップアプリのインストーラーを公開しました',
        'macOS のネイティブターミナル描画により、スクロールとテキスト選択を改善しました',
        'Cmd+R、Ctrl+R、F5 でデスクトップ画面を再読み込みして再接続できます。実行中の tmux セッションと未送信の下書きは保持されます',
        'デスクトップの設定画面と壁紙の透明度を Web 版に近づけました',
        'ネイティブのウィンドウ操作と全画面表示、サイドバーの開閉、macOS Dock の動作インジケーターを改善しました',
      ],
      ko: [
        'macOS와 Windows용 데스크톱 앱 설치 파일을 제공합니다',
        'macOS에서 네이티브 터미널 렌더링으로 스크롤과 텍스트 선택을 개선했습니다',
        'Cmd+R, Ctrl+R, F5로 데스크톱 화면을 새로고침하고 다시 연결할 수 있으며, 실행 중인 tmux 세션과 보내지 않은 초안은 유지됩니다',
        '데스크톱 설정 화면과 배경화면 투명도를 웹 버전에 더 가깝게 맞췄습니다',
        '네이티브 창 및 전체 화면 제어, 사이드바 열기와 닫기, macOS Dock의 작업 상태 표시를 개선했습니다',
      ],
      pt: [
        'Instaladores do aplicativo para macOS e Windows agora estão disponíveis',
        'No macOS, a renderização nativa do terminal melhora a rolagem e a seleção de texto',
        'Cmd+R, Ctrl+R e F5 recarregam a interface do aplicativo e restabelecem a conexão, preservando as sessões tmux em execução e os rascunhos não enviados',
        'As configurações do aplicativo e a transparência do papel de parede agora estão mais próximas da interface web',
        'Melhorias nos controles nativos da janela e de tela cheia, na abertura e fechamento da barra lateral e no indicador de atividade do Dock do macOS',
      ],
      'zh-Hant': [
        '新增 macOS 與 Windows 桌面客戶端安裝包',
        'macOS 採用原生終端繪製，改善捲動與文字選取',
        'Cmd+R、Ctrl+R 與 F5 可重新載入桌面介面並重新連線，保留執行中的 tmux 會話與未送出的草稿',
        '桌面設定介面與桌布透明度更貼近 Web 版',
        '改善原生視窗與全螢幕控制、側邊欄開關，以及 macOS Dock 的工作狀態指示',
      ],
      'zh-Hans': [
        '新增 macOS 和 Windows 桌面客户端安装包',
        'macOS 采用原生终端绘制，改进滚动与文本选择',
        'Cmd+R、Ctrl+R 和 F5 可重新加载桌面界面并重新连接，保留运行中的 tmux 会话与未发送的草稿',
        '桌面设置界面与壁纸透明度更贴近 Web 版',
        '改进原生窗口与全屏控制、侧边栏开关，以及 macOS Dock 的工作状态指示',
      ],
      vi: [
        'Đã có bộ cài ứng dụng máy tính cho macOS và Windows',
        'Trên macOS, khả năng hiển thị terminal gốc cải thiện thao tác cuộn và chọn văn bản',
        'Cmd+R, Ctrl+R và F5 tải lại giao diện ứng dụng và kết nối lại, đồng thời giữ nguyên các phiên tmux đang chạy và bản nháp chưa gửi',
        'Phần cài đặt và độ trong suốt của hình nền trên ứng dụng máy tính gần với giao diện web hơn',
        'Cải thiện các nút điều khiển cửa sổ và toàn màn hình, thao tác mở đóng thanh bên và chỉ báo hoạt động trên Dock của macOS',
      ],
      nl: [
        'Er zijn nu installatiepakketten voor de desktopapp op macOS en Windows',
        'Op macOS verbetert native terminalweergave het scrollen en selecteren van tekst',
        'Cmd+R, Ctrl+R en F5 herladen de desktopinterface en herstellen de verbinding, terwijl actieve tmux-sessies en niet-verzonden concepten behouden blijven',
        'De instellingen en transparantie van de achtergrond in de desktopapp sluiten nu beter aan op de webinterface',
        'Verbeterde native vensterbediening, bediening voor volledig scherm, het openen en sluiten van de zijbalk en de activiteitsindicator in het macOS Dock',
      ],
    },
  },
  {
    version: '0.0.26',
    date: '2026-10-01',
    changes: {
      en: [
        'The web dashboard now supports Vietnamese and Dutch, with automatic browser language detection or manual selection in Settings',
        'tmux.online adds Simplified Chinese, Vietnamese and Dutch at /zh-Hans, /vi and /nl',
      ],
      ja: [
        'Web ダッシュボードがベトナム語とオランダ語に対応しました。ブラウザの言語を自動検出するほか、設定からも選択できます',
        'tmux.online に簡体字中国語、ベトナム語、オランダ語のページを追加しました（/zh-Hans、/vi、/nl）',
      ],
      ko: [
        '웹 대시보드가 베트남어와 네덜란드어를 지원합니다. 브라우저 언어를 자동으로 감지하거나 설정에서 직접 선택할 수 있습니다',
        'tmux.online에 중국어 간체, 베트남어, 네덜란드어 페이지가 추가되었습니다 (/zh-Hans, /vi, /nl)',
      ],
      pt: [
        'O painel web agora oferece vietnamita e neerlandês, com detecção automática do idioma do navegador ou seleção manual nas Configurações',
        'O tmux.online adiciona chinês simplificado, vietnamita e neerlandês em /zh-Hans, /vi e /nl',
      ],
      'zh-Hant': [
        'Web 儀表板新增越南語與荷蘭語，可自動偵測瀏覽器語言，也可在設定中手動切換',
        'tmux.online 新增簡體中文、越南語與荷蘭語頁面，網址分別為 /zh-Hans、/vi 與 /nl',
      ],
      'zh-Hans': [
        'Web 仪表盘新增越南语与荷兰语，可自动识别浏览器语言，也可在设置中手动切换',
        'tmux.online 新增简体中文、越南语与荷兰语页面，地址分别为 /zh-Hans、/vi 和 /nl',
      ],
      vi: [
        'Bảng điều khiển web hỗ trợ tiếng Việt và tiếng Hà Lan, tự nhận ngôn ngữ trình duyệt hoặc chọn thủ công trong Cài đặt',
        'tmux.online bổ sung tiếng Trung giản thể, tiếng Việt và tiếng Hà Lan tại /zh-Hans, /vi và /nl',
      ],
      nl: [
        'Het webdashboard ondersteunt nu Vietnamees en Nederlands, met automatische herkenning van de browsertaal of handmatige selectie in Instellingen',
        'tmux.online voegt Vereenvoudigd Chinees, Vietnamees en Nederlands toe op /zh-Hans, /vi en /nl',
      ],
    },
  },
  {
    version: '0.0.25',
    date: '2026-10-01',
    changes: {
      vi: [
        'Khi khởi động CLI, chọn IP cục bộ hoặc mạng rồi mở liên kết kết nối được hiển thị; cũng hỗ trợ URL công khai đã cấu hình chuyển tiếp',
        'Vẫn truy cập được qua 127.0.0.1 khi CLI lắng nghe trên giao diện mạng đã chọn',
        'Nhiều máy chủ cầu nối có thể đồng thời phản chiếu cùng ô tmux mà không làm gián đoạn lẫn nhau',
        'Kéo các tab liền kề và sắp xếp tác vụ cùng thư mục làm việc giờ giữ đúng thứ tự mong muốn',
        'Có thể thu gọn nhóm máy chủ và ghi nhớ trạng thái giữa các trình duyệt',
      ],
      nl: [
        "Kies bij het starten van de CLI een lokaal of netwerk-IP en open de getoonde verbindingslink; doorgestuurde openbare URL's worden ook ondersteund",
        'Lokale toegang via 127.0.0.1 blijft beschikbaar wanneer de CLI op een gekozen netwerkinterface luistert',
        'Meerdere brugservers kunnen hetzelfde tmux-paneel weergeven zonder elkaar te onderbreken',
        'Het slepen van aangrenzende tabbladen en herschikken van taken met dezelfde werkmap behoudt nu de gewenste volgorde',
        'Hostgroepen kunnen worden ingeklapt en hun status wordt tussen webclients onthouden',
      ],

      en: [
        'Choose a local or network IP when starting the CLI and open the printed connection link; forwarded public URLs are also supported',
        'Local access at 127.0.0.1 stays available when the CLI listens on a selected network interface',
        'Multiple bridge servers can mirror the same tmux pane without interrupting each other',
        'Dragging adjacent tabs and reordering tasks that share a working directory now preserves the intended order',
        'Host sections can be collapsed, with their state remembered across web clients',
      ],
      ja: [
        'CLI 起動時にローカルまたはネットワーク IP を選び、表示された接続リンクを開けます。転送済みの公開 URL にも対応',
        'CLI が指定したネットワークインターフェースで待ち受ける場合も、127.0.0.1 からアクセスできます',
        '複数のブリッジサーバーが同じ tmux ペインを互いに中断することなく表示できます',
        '隣接タブのドラッグや、同じ作業ディレクトリを使うタスクの並べ替えで、意図した順序が保たれます',
        'ホストセクションを折りたたみ、その状態を Web クライアント間で共有できます',
      ],
      ko: [
        'CLI를 시작할 때 로컬 또는 네트워크 IP를 선택하고 표시된 연결 링크를 열 수 있으며, 전달 설정된 공개 URL도 지원합니다',
        'CLI가 선택한 네트워크 인터페이스에서 수신하더라도 127.0.0.1을 통한 로컬 접근이 유지됩니다',
        '여러 브리지 서버가 서로 방해하지 않고 같은 tmux 창을 미러링할 수 있습니다',
        '인접 탭을 드래그하거나 같은 작업 디렉터리를 사용하는 작업을 재정렬할 때 의도한 순서가 유지됩니다',
        '호스트 섹션을 접을 수 있으며 접힘 상태가 웹 클라이언트 간에 공유됩니다',
      ],
      'zh-Hans': [
        'CLI 启动时可选择本地或网络 IP，打开显示的连接网址即可使用，也支持已设置转发的公开网址',
        'CLI 监听指定网卡时，仍可通过 127.0.0.1 在本地访问',
        '多个桥接服务可同时镜像同一个 tmux pane，不再互相中断输出',
        '修正相邻标签页拖动与相同工作目录任务的排序，保留预期的排列顺序',
        '主机区段可折叠，并在不同网页客户端之间同步记住折叠状态',
      ],
      'zh-Hant': [
        'CLI 啟動時可選擇本機或網路 IP，開啟顯示的連線網址即可使用，也支援已設定轉發的公開網址',
        'CLI 監聽指定網卡時，仍可透過 127.0.0.1 在本機存取',
        '多個橋接服務可同時鏡像同一個 tmux pane，不再互相中斷輸出',
        '修正相鄰分頁拖曳與相同工作目錄任務的排序，保留預期的排列順序',
        '主機區段可折疊，並在不同網頁客戶端之間同步記住折疊狀態',
      ],
    },
  },
  {
    version: '0.0.22',
    date: '2026-09-05',
    changes: {
      vi: [
        'Bảng điều khiển web hỗ trợ tiếng Bồ Đào Nha, tự nhận ngôn ngữ trình duyệt hoặc chọn trong Cài đặt',
        'Website tmux.online cũng hỗ trợ tiếng Bồ Đào Nha tại tmux.online/pt',
        'Đã sửa: sau khi xóa một phiên lịch sử, có thể xóa phiên khác mà không tải lại trang',
      ],
      nl: [
        'Het webdashboard is nu beschikbaar in het Portugees; de browsertaal wordt automatisch herkend of kies de taal in Instellingen',
        'Ook tmux.online is nu beschikbaar in het Portugees op tmux.online/pt',
        'Opgelost: na het verwijderen van een historische sessie kun je een andere verwijderen zonder de pagina te herladen',
      ],

      en: [
        'The web dashboard is now available in Portuguese - the browser language is picked up automatically, or choose it in Settings',
        'tmux.online itself now speaks Portuguese too, at tmux.online/pt',
        'Fixed: after deleting one history session, deleting any other no longer needs a page reload',
      ],
      ja: [
        'Web ダッシュボードがポルトガル語に対応 - ブラウザの言語を自動で検出するほか、設定からも選択できます',
        'tmux.online 本体もポルトガル語に対応しました（tmux.online/pt）',
        '修正: 履歴セッションを 1 件削除したあと、別のセッションを削除するのにページ再読み込みが不要になりました',
      ],
      ko: [
        '웹 대시보드가 포르투갈어를 지원합니다 - 브라우저 언어를 자동으로 감지하며, 설정에서 직접 선택할 수도 있습니다',
        'tmux.online도 포르투갈어를 지원합니다 (tmux.online/pt)',
        '수정: 기록 세션을 하나 삭제한 뒤 다른 세션을 삭제할 때 페이지 새로고침이 필요 없어졌습니다',
      ],
      pt: [
        'O painel web agora está disponível em português - o idioma do navegador é detectado automaticamente, ou escolha nas Configurações',
        'O próprio tmux.online também fala português agora, em tmux.online/pt',
        'Corrigido: depois de excluir uma sessão do histórico, excluir qualquer outra não exige mais recarregar a página',
      ],
      'zh-Hans': [
        'Web 仪表盘添加葡萄牙语支持 - 自动侦测浏览器语言，也可在设置中手动选择',
        'tmux.online 官网同步支持葡萄牙语（tmux.online/pt）',
        '修正：删除一笔历史会话后，再删除其他会话不再需要刷新页面',
      ],
      'zh-Hant': [
        'Web 儀表板新增葡萄牙語支援 - 自動偵測瀏覽器語言，也可在設定中手動選擇',
        'tmux.online 官網同步支援葡萄牙語（tmux.online/pt）',
        '修正：刪除一筆歷史會話後，再刪除其他會話不再需要重新整理頁面',
      ],
    },
  },
  {
    version: '0.0.21',
    date: '2026-09-04',
    changes: {
      vi: [
        'Bảng điều khiển hiển thị lịch sử phiên tác tử từ sáu CLI: claude, codex, pi, opencode, cursor và copilot, kể cả phiên trước khi ứng dụng này được cài',
        'Lịch sử có thể không phân nhóm, nhóm theo CLI hoặc thư mục; mỗi phiên hiển thị lượng token và có thể sắp xếp theo thời gian hoặc token',
        'Nhấp vào dòng lịch sử để xem chi tiết, sao chép lệnh tiếp tục hoặc xóa phiên khỏi kho lưu trữ của CLI',
        'Bảng điều khiển hai cột trên màn hình rộng: tác vụ đang chạy bên trái, lịch sử bên phải',
      ],
      nl: [
        "Het dashboard toont sessiegeschiedenis uit zes CLI's: claude, codex, pi, opencode, cursor en copilot, ook van vóór de installatie van deze app",
        'Geschiedenis kan ongegroepeerd, per CLI of per map worden getoond; elke sessie toont tokengebruik en kan op tijd of tokens worden gesorteerd',
        'Klik op een sessie voor details, om de hervatopdracht te kopiëren of om de sessie uit de eigen opslag van de CLI te verwijderen',
        'Dashboard met twee kolommen op brede schermen: actieve taken links, geschiedenis rechts',
      ],

      en: [
        'The dashboard now shows agent session history from six CLI stores: claude, codex, pi, opencode, cursor, and copilot - including sessions from before this app existed',
        'History clusters flat, by CLI, or by folder; entries show token weight per session with a time/tokens sort toggle',
        "Click a history row to see full details, copy the resume command, or delete the session from the CLI's own store",
        'Two-column dashboard on wider screens: live tasks on the left, history on the right',
      ],
      ja: [
        'ダッシュボードに6つのCLIストアからエージェントセッション履歴を表示: claude、codex、pi、opencode、cursor、copilot - このアプリ導入前のセッションも含まれます',
        '履歴はフラット・CLI別・フォルダー別に分類可能。各セッションのトークン消費量を表示し、時間/トークン順でソート切替',
        '履歴行をクリックで詳細表示、再開コマンドのコピー、CLIストアからのセッション削除が可能',
        'ワイド画面では2カラムレイアウト: 左にライブタスク、右に履歴',
      ],
      ko: [
        '대시보드에 6개 CLI 저장소의 에이전트 세션 기록 표시: claude, codex, pi, opencode, cursor, copilot - 이 앱 설치 전 세션도 포함',
        '기록은 플랫, CLI별, 폴더별로 묶을 수 있으며, 세션별 토큰 소비량을 표시하고 시간/토큰 정렬 전환 가능',
        '기록 행 클릭 시 상세 보기, 재개 명령 복사, CLI 저장소에서 세션 삭제 가능',
        '넓은 화면에서 2열 레이아웃: 왼쪽에 라이브 작업, 오른쪽에 기록',
      ],
      'zh-Hans': [
        '仪表盘现在会显示六个 CLI 存盘的 agent 会话历史：claude、codex、pi、opencode、cursor、copilot，连安装本应用之前的会话也涵盖在内',
        '历史可以平铺、CLI 或文件夹分组；每笔显示 token 消耗量，可切换按时间或 token 排序',
        '点击历史列可查看完整详情、复制 resume 命令，或从 CLI 的存盘删除该会话',
        '宽屏幕双栏布局：左侧为进行中任务，右侧为历史',
      ],
      'zh-Hant': [
        '儀表板現在會顯示六個 CLI 存檔的 agent 會話歷史：claude、codex、pi、opencode、cursor、copilot，連安裝本應用之前的會話也涵蓋在內',
        '歷史可以平鋪、CLI 或資料夾分組；每筆顯示 token 消耗量，可切換按時間或 token 排序',
        '點擊歷史列可查看完整詳情、複製 resume 命令，或從 CLI 的存檔刪除該會話',
        '寬螢幕雙欄佈局：左側為進行中任務，右側為歷史',
      ],
    },
  },
  {
    version: '0.0.20',
    date: '2026-09-01',
    changes: {
      vi: [
        'Cuộn trong Claude Code mượt trở lại: Claude Code 2.1 bật theo dõi chuột khiến mỗi lần cuộn hay di chuyển chuột phải trao đổi với máy chủ và vẽ lại toàn màn hình. Terminal giờ xử lý chuột cục bộ và gộp sự kiện cuộn như với OpenCode; kéo để chọn văn bản cũng hoạt động trở lại',
      ],
      nl: [
        'Soepel scrollen in Claude Code hersteld: muistracking in Claude Code 2.1 veroorzaakte bij elke scrollstap en muisbeweging een retourverzoek en volledige hertekening. De terminal verwerkt de muis nu lokaal en bundelt scrollinvoer, zoals bij OpenCode; slepen om tekst te selecteren werkt weer',
      ],

      en: [
        'Smooth scrolling in Claude Code panes again: Claude Code 2.1 turned on mouse tracking, so every wheel tick and pointer move cost a round trip and a full repaint. The terminal now keeps the mouse local and batches wheel input, as it already does for OpenCode, and dragging to select text works again',
      ],
      ja: [
        'Claude Code ペインのスクロールが再びスムーズに。Claude Code 2.1 がマウストラッキングを有効にしたため、ホイールやポインター移動のたびに往復と全画面再描画が発生していました。OpenCode と同様にマウスをローカルに保ち、ホイール入力をまとめて送信します。ドラッグでのテキスト選択も復活',
      ],
      ko: [
        'Claude Code 창의 스크롤이 다시 부드러워졌습니다. Claude Code 2.1이 마우스 트래킹을 켜면서 휠과 포인터 이동마다 왕복과 전체 화면 다시 그리기가 발생했습니다. 이제 OpenCode처럼 마우스를 로컬로 유지하고 휠 입력을 묶어 보냅니다. 드래그로 텍스트 선택도 다시 가능합니다',
      ],
      'zh-Hans': [
        'Claude Code 标签页的滚动恢复流畅：Claude Code 2.1 打开了鼠标追踪，导致每格滚轮与每次鼠标移动都要一次往返与整屏重绘。现在比照 OpenCode 把鼠标留在本地并批量送出滚轮输入，拖动选取文本也恢复可用',
      ],
      'zh-Hant': [
        'Claude Code 分頁的捲動恢復流暢：Claude Code 2.1 開啟了滑鼠追蹤，導致每格滾輪與每次滑鼠移動都要一次往返與整屏重繪。現在比照 OpenCode 把滑鼠留在本地並批次送出滾輪輸入，拖曳選取文字也恢復可用',
      ],
    },
  },
  {
    version: '0.0.19',
    date: '2026-09-01',
    changes: {
      vi: [
        'Bổ sung hỗ trợ Cursor Agent, với hook vòng đời báo trạng thái đang chạy và đang chờ',
        'Tùy chọn chia sẻ trong menu tab vẫn hiển thị khi máy chủ tắt chia sẻ, kèm lệnh để bật thay vì biến mất',
        'Ẩn số lượng thư mục và máy khi mở rộng vì các dòng bên dưới đã thể hiện nội dung',
      ],
      nl: [
        'Cursor Agent wordt ondersteund, met lifecycle-hooks voor de status bezig of wachtend',
        'De deeloptie blijft zichtbaar in het tabbladmenu wanneer delen op de server uitstaat en toont de opdracht om het in te schakelen',
        'Aantallen bij mappen en machines worden verborgen wanneer ze zijn uitgeklapt, omdat de onderliggende rijen de inhoud al tonen',
      ],

      en: [
        'Cursor Agent joins the supported CLIs, with lifecycle hooks reporting busy and waiting state',
        'The share option in the tab menu now stays visible when the server has sharing off, and shows the command to enable it instead of disappearing',
        'Folder and machine counts hide while expanded, since the rows underneath already show what is inside',
      ],
      ja: [
        'Cursor Agent が対応 CLI に加わりました。ライフサイクルフックで実行中と入力待ちの状態を報告します',
        'タブメニューの共有項目は、サーバー側で共有が無効でも消えなくなり、代わりに有効化コマンドを案内します',
        'フォルダーやマシンを展開している間は件数を非表示に。下に並ぶ行が中身をそのまま示しているためです',
      ],
      ko: [
        'Cursor Agent가 지원 CLI에 추가되었습니다. 라이프사이클 훅으로 실행 중과 입력 대기 상태를 보고합니다',
        '탭 메뉴의 공유 항목이 서버에서 공유가 꺼져 있어도 사라지지 않고, 대신 활성화 명령을 안내합니다',
        '폴더와 컴퓨터를 펼친 동안에는 개수를 숨깁니다. 아래 행들이 이미 내용을 보여주기 때문입니다',
      ],
      'zh-Hans': [
        'Cursor Agent 加入支持的 CLI，通过生命周期钩子回报忙碌与等待输入状态',
        '标签页菜单的分享选项在服务器未打开分享时不再消失，改为显示激活分享的命令',
        '展开文档夹或机器时隐藏总数，下方列出的内容已经一目了然',
      ],
      'zh-Hant': [
        'Cursor Agent 加入支援的 CLI，透過生命週期鉤子回報忙碌與等待輸入狀態',
        '分頁選單的分享選項在伺服器未開啟分享時不再消失，改為顯示啟用分享的指令',
        '展開文件夾或機器時隱藏總數，下方列出的內容已經一目了然',
      ],
    },
  },
  {
    version: '0.0.18',
    date: '2026-08-21',
    changes: {
      vi: [
        'Thư mục tác vụ có phân cấp rõ hơn với biểu tượng thư mục và máy, các mục con thụt vào và khu vực chưa phân nhóm riêng',
        'Tổng số trong thư mục và máy giờ đếm tab, gồm cả tab được gộp đang chạy, thay vì chỉ đếm dòng tác vụ',
      ],
      nl: [
        'Taakmappen hebben een duidelijkere hiërarchie met map- en machinepictogrammen, ingesprongen onderdelen en een aparte sectie voor ongegroepeerde taken',
        'Totalen van mappen en machines tellen nu tabbladen, inclusief actieve samengevoegde tabbladen, in plaats van alleen taakrijen',
      ],

      en: [
        'Task folders now have a clearer hierarchy with folder and machine icons, indented children, and a separate ungrouped section',
        'Folder and machine totals now count tabs, including live merged tabs, instead of counting only task rows',
      ],
      ja: [
        'タスクフォルダーの階層を明確化。フォルダーとマシンのアイコン、子タスクのインデント、独立した未分類セクションを追加',
        'フォルダーとマシンの件数はタスク行ではなくタブ数を表示し、ライブで結合されたタブも集計',
      ],
      ko: [
        '작업 폴더 계층이 더 명확해졌습니다. 폴더와 컴퓨터 아이콘, 하위 작업 들여쓰기, 별도의 미분류 섹션을 추가했습니다',
        '폴더와 컴퓨터 합계가 작업 행 수 대신 탭 수를 표시하며, 실시간으로 병합된 탭도 포함합니다',
      ],
      'zh-Hans': [
        '任务文档夹层级更清楚：加入文档夹与机器图标、子任务缩进，以及独立的未分组区段',
        '文档夹与机器总数现在计算标签页，包含即时合并进来的标签页，不再只计算任务列',
      ],
      'zh-Hant': [
        '任務文件夾層級更清楚：加入文件夾與機器圖示、子任務縮排，以及獨立的未分組區段',
        '文件夾與機器總數現在計算分頁，包含即時合併進來的分頁，不再只計算任務列',
      ],
    },
  },
  {
    version: '0.0.17',
    date: '2026-08-20',
    changes: {
      vi: ['Máy chủ không truy cập được giờ hiển thị trạng thái đang thử lại và có nút thử ngay, không cần chờ lần kiểm tra tiếp theo'],
      nl: ['Een onbereikbare host toont nu dat opnieuw verbinden wordt geprobeerd, met een knop om direct opnieuw te proberen'],

      en: [
        'A host that cannot be reached now shows that it is still being retried, with a button to try again straight away instead of waiting for the next poll',
      ],
      ja: ['到達できないホストは、再試行が続いていることを表示するようになりました。次のポーリングを待たずにすぐ再試行できるボタン付き'],
      ko: ['연결할 수 없는 호스트가 계속 재시도 중임을 표시합니다. 다음 폴링을 기다리지 않고 바로 다시 시도하는 버튼도 함께'],
      'zh-Hans': ['无法连接的主机现在会显示仍在重试，并附上立即重试的按钮，不必等下一次轮询'],
      'zh-Hant': ['無法連線的主機現在會顯示仍在重試，並附上立即重試的按鈕，不必等下一次輪詢'],
    },
  },
  {
    version: '0.0.16',
    date: '2026-08-20',
    changes: {
      vi: [
        'Tự động thử lại: khi CLI kết thúc do lỗi và đã hết lượt tự thử, máy chủ nhập lệnh thử lại vào ô terminal, có giới hạn số lần, thời gian chờ tăng dần và thông báo. Hoạt động ngay cả khi đóng mọi trình duyệt; bật tắt, nội dung và giới hạn nằm trong Cài đặt',
        'Phiên Pi báo các lượt chạy thất bại nên cũng được tự động thử lại',
        'Điện thoại đã được phê duyệt trở thành ứng dụng đầy đủ với mọi cửa sổ và tính năng như máy tính; phê duyệt thiết bị mới vẫn thực hiện trên máy tính',
        'Ẩn phần đường dẫn tệp kéo thả trong cài đặt web nếu trình duyệt không thể cấp quyền thư mục',
      ],
      nl: [
        'Automatisch opnieuw proberen: als een CLI met een fout eindigt en zelf niet meer probeert, voert de server een herhaalopdracht in, met een pogingslimiet, oplopende wachttijd en een melding. Werkt ook met alle browsers gesloten; schakelaar, tekst en limiet staan in Instellingen',
        'Pi-sessies melden nu mislukte beurten, zodat automatisch opnieuw proberen ook daarvoor werkt',
        'Een goedgekeurde telefoon is nu een volledige client met alle vensters en mogelijkheden van de desktop; nieuwe apparaten goedkeuren blijft op de desktop',
        'Webinstellingen verbergen het onderdeel voor bestandspaden als de browser geen maptoegang kan verlenen',
      ],

      en: [
        'Auto retry: when a CLI reports its turn ended in error and its own retries have given up, the server types a retry command into the pane for you - with an attempt budget and growing backoff, and a notice on the pane so you can tell "it retried" from "it hung". Runs on the server, so it works with every browser closed. Toggle, retry text and attempt cap live in Settings',
        'Pi sessions now report failed runs, so auto retry covers them too',
        'An approved phone is now a full client: every window, every capability, same as the desktop. Approving new devices stays on the desktop',
        'Web settings hide the dropped-file path section on browsers that cannot grant a folder',
      ],
      ja: [
        '自動リトライ: CLI がターンのエラー終了を報告し、内蔵リトライも諦めたあと、サーバーが代わりにリトライ指示をペインに入力します。試行回数の上限と漸増バックオフ付きで、ペインに通知が残るため「リトライした」と「固まった」を見分けられます。サーバー側で動くので、ブラウザを全部閉じていても有効。オン/オフ・リトライ文言・上限は設定から',
        'pi セッションが失敗した実行を報告するようになり、自動リトライの対象になりました',
        '承認済みのスマホは完全なクライアントに: すべてのウィンドウ、すべての機能をデスクトップと同等に。新しいデバイスの承認はデスクトップのみのまま',
        'フォルダーを許可できないブラウザーでは、Web 設定のドロップファイルのパス項目を非表示に',
      ],
      ko: [
        '자동 재시도: CLI가 턴이 오류로 끝났다고 보고하고 자체 재시도도 포기하면, 서버가 대신 재시도 명령을 패인에 입력합니다. 시도 횟수 예산과 점증 백오프가 있고, 패인에 알림이 남아 "재시도했다"와 "멈췄다"를 구분할 수 있습니다. 서버에서 실행되므로 브라우저를 모두 닫아도 동작합니다. 켜기/끄기, 재시도 문구, 횟수 한도는 설정에서',
        'pi 세션이 실패한 실행을 보고하게 되어 자동 재시도가 적용됩니다',
        '승인된 휴대폰은 이제 완전한 클라이언트: 모든 창, 모든 기능을 데스크톱과 동일하게 사용합니다. 새 기기 승인은 데스크톱에서만',
        '폴더를 허용할 수 없는 브라우저에서는 웹 설정의 드롭 파일 경로 섹션을 숨깁니다',
      ],
      'zh-Hans': [
        '自动重试：当 CLI 回报该轮以错误结束、且其内置重试已放弃时，服务端会代你把重试命令输入到终端——附带次数预算与递增退避，并在窗格留下通知，让你分得清「重试过了」和「挂住了」。在服务端运行，关闭所有浏览器也有效。开关、重试命令与次数上限都在设置中',
        'pi 会话现在会回报失败的运行，自动重试也涵盖它',
        '获批准的手机现在是完整客户端：每个窗口、每项能力，与桌面相同。批准新设备仍只在桌面进行',
        '浏览器无法授权文件夹时，Web 设置会隐藏拖放文件路径区块',
      ],
      'zh-Hant': [
        '自動重試：當 CLI 回報該輪以錯誤結束、且其內建重試已放棄時，服務端會代你把重試指令輸入到終端——附帶次數預算與遞增退避，並在窗格留下通知，讓你分得清「重試過了」和「掛住了」。在服務端執行，關閉所有瀏覽器也有效。開關、重試指令與次數上限都在設定中',
        'pi 會話現在會回報失敗的執行，自動重試也涵蓋它',
        '獲批准的手機現在是完整客戶端：每個視窗、每項能力，與桌面相同。批准新裝置仍只在桌面進行',
        '瀏覽器無法授權資料夾時，Web 設定會隱藏拖放檔案路徑區塊',
      ],
    },
  },
  {
    version: '0.0.15',
    date: '2026-08-19',
    changes: {
      vi: [
        'Khôi phục bracketed paste khi kết nối với mọi AI CLI, để văn bản nhiều dòng được gửi thành một tin nhắn thay vì gửi từng dòng',
        'CLI đề nghị cài bản nâng cấp thay vì chỉ mô tả, tối đa một lần mỗi ngày',
      ],
      nl: [
        'Bracketed paste wordt bij het koppelen voor elke AI CLI hersteld, zodat geplakte tekst met meerdere regels één bericht blijft',
        'De CLI biedt aan updates te installeren in plaats van ze alleen te beschrijven, maximaal één keer per dag',
      ],

      en: [
        'Bracketed paste is restored on attach for every AI CLI, so a multi-line paste stays one message instead of one submit per line',
        'The CLI offers to install an upgrade instead of describing it, and asks at most once a day',
      ],
      ja: [
        'すべての AI CLI で再アタッチ時にブラケットペーストを復元。複数行の貼り付けが 1 行ごとの送信にならず、1 つのメッセージのままに',
        'CLI はアップグレードを説明するだけでなくインストールを提案し、確認は 1 日 1 回まで',
      ],
      ko: [
        '모든 AI CLI에서 재연결 시 괄호 붙여넣기 모드를 복원하여, 여러 줄 붙여넣기가 줄마다 전송되지 않고 하나의 메시지로 유지됩니다',
        'CLI가 업그레이드를 설명하는 대신 설치를 제안하며, 하루 한 번만 묻습니다',
      ],
      'zh-Hans': [
        '每个 AI CLI 重新连上时都会恢复括号粘贴模式，多行粘贴仍是一则消息，不会逐行送出',
        'CLI 会直接提出安装升级，而不只是描述它，且一天最多询问一次',
      ],
      'zh-Hant': [
        '每個 AI CLI 重新連上時都會恢復括號貼上模式，多行貼上仍是一則訊息，不會逐行送出',
        'CLI 會直接提出安裝升級，而不只是描述它，且一天最多詢問一次',
      ],
    },
  },
  {
    version: '0.0.14',
    date: '2026-08-19',
    changes: {
      vi: [
        'Giao diện điện thoại có trang vào riêng, ngăn tác vụ, dán ảnh chụp màn hình vào hộp tin nhắn và chế độ văn bản dễ đọc cho mọi ô terminal',
        'Thiết bị đã ghép nối có thể thêm nhiều cửa sổ; máy tính hiển thị điện thoại đang kết nối và cho phép ngắt từng thiết bị',
        'Chọn địa chỉ mà mã QR trỏ đến',
        'Lượt chạy thất bại xuất hiện trong danh sách cần chú ý và được gỡ trạng thái lỗi sau khi xử lý',
        'Cuộn cảm ứng mượt hơn, nút dễ chạm hơn và điện thoại không còn thay đổi bố cục cửa sổ trên máy tính',
      ],
      nl: [
        'De telefooninterface heeft een eigen startpunt, een takenlade, geplakte schermafbeeldingen in het berichtvak en een leesbare tekstweergave van elk terminalvenster',
        'Een gekoppeld apparaat kan meerdere vensters verzamelen; de desktop toont verbonden telefoons en kan hun verbinding verbreken',
        'Kies naar welk adres de QR-code verwijst',
        'Mislukte beurten verschijnen in de lijst met taken die aandacht nodig hebben; na afhandeling kan die foutstatus verdwijnen',
        'Soepeler scrollen met aanraking, beter bedienbare knoppen en telefoons kunnen de vensterindeling op de desktop niet meer veranderen',
      ],

      en: [
        'Phones grew up: their own entry point, a task drawer, screenshot paste into the message box, and a readable text view of any pane instead of an 80-column picture',
        'A paired device collects windows; the desktop shows which phones are connected and can cut any of them off',
        'Pick which address the QR code points at',
        'Failed turns land on the dashboard\'s "Needs me" list, and a failed turn can stop being true once you deal with it',
        "Smoother scrolling under a finger, tappable controls, and a phone can no longer re-grid the desktop's window",
      ],
      ja: [
        'スマホが一人前に: 専用の入口、タスクドロワー、メッセージ欄へのスクリーンショット貼り付け、そして 80 桁の画像ではなく読めるテキストでのペイン表示',
        'ペアリング済みデバイスは複数のウィンドウを持てます。デスクトップには接続中のスマホが表示され、いつでも切断できます',
        'QR コードが指すアドレスを選択可能に',
        '失敗したターンはダッシュボードの「要対応」リストに載り、対処すれば消えます',
        '指でのスクロールが滑らかに、コントロールはタップ可能に。スマホがデスクトップのウィンドウの格子を変えることもなくなりました',
      ],
      ko: [
        '휴대폰이 한층 성숙해졌습니다: 전용 입구, 작업 서랍, 메시지 입력창에 스크린샷 붙여넣기, 그리고 80칸 그림 대신 읽을 수 있는 텍스트로 보는 패인 보기',
        '페어링된 기기는 여러 창을 모을 수 있고, 데스크톱에서 연결된 휴대폰을 확인하고 언제든 끊을 수 있습니다',
        'QR 코드가 가리킬 주소를 선택할 수 있습니다',
        '실패한 턴은 대시보드의 "내 확인 필요" 목록에 표시되고, 처리하면 사라집니다',
        '손가락 스크롤이 부드러워지고 컨트롤을 탭할 수 있으며, 휴대폰이 데스크톱 창의 격자를 바꾸는 일이 없어졌습니다',
      ],
      'zh-Hans': [
        '手机长大了：自己的入口、任务抽屉、把截屏贴进消息框，以及任何窗格的可读文本查看，而不是一张 80 栏的图片',
        '配对的设备可收集多个窗口；桌面会显示哪些手机已连接，并可随时切断任何一台',
        '可选择 QR code 指向哪个地址',
        '失败的轮次会出现在仪表盘的「需要我」清单，处理后标记也会消失',
        '手指滑动更顺、控制项可点按，且手机不会再改变桌面窗口的格线',
      ],
      'zh-Hant': [
        '手機長大了：自己的入口、任務抽屜、把截圖貼進訊息框，以及任何窗格的可讀文字檢視，而不是一張 80 欄的圖片',
        '配對的裝置可收集多個視窗；桌面會顯示哪些手機已連線，並可隨時切斷任何一台',
        '可選擇 QR code 指向哪個位址',
        '失敗的輪次會出現在儀表板的「需要我」清單，處理後標記也會消失',
        '手指滑動更順、控制項可點按，且手機不會再改變桌面視窗的格線',
      ],
    },
  },
  {
    version: '0.0.13',
    date: '2026-08-18',
    changes: {
      vi: ['Các thẻ tác vụ trên bảng điều khiển được gom theo nhóm, tiêu đề thông báo kèm biểu tượng CLI'],
      nl: ['Taakchips op het dashboard worden per groep gebundeld en meldingen tonen het CLI-pictogram in de titel'],

      en: ['Dashboard task chips cluster by group, and toasts carry the CLI mark on the title'],
      ja: ['ダッシュボードのタスクチップをグループごとにまとめ、トーストのタイトルに CLI マークを表示'],
      ko: ['대시보드 작업 칩이 그룹별로 묶이고, 토스트 제목에 CLI 마크가 표시됩니다'],
      'zh-Hans': ['仪表盘任务签依群组聚合，toast 标题带上 CLI 标记'],
      'zh-Hant': ['儀表板任務籤依群組聚合，toast 標題帶上 CLI 標記'],
    },
  },
  {
    version: '0.0.12',
    date: '2026-08-18',
    changes: {
      vi: ['Hiển thị lời nhắc nâng cấp khi phiên bản đã phát hành khác phiên bản đang dùng, không chỉ khi mới hơn'],
      nl: ['De updatemelding verschijnt zodra de gepubliceerde versie verschilt, niet alleen wanneer die nieuwer is'],

      en: ['The upgrade prompt fires whenever the published version differs, not only when it is newer'],
      ja: ['公開バージョンが異なれば常にアップグレードを促すように——新しい場合だけではなく'],
      ko: ['게시된 버전이 다르기만 하면 업그레이드를 안내합니다 - 더 새로울 때만이 아니라'],
      'zh-Hans': ['只要发布版本与本地不同就会提示升级，而不只在较新时'],
      'zh-Hant': ['只要發布版本與本機不同就會提示升級，而不只在較新時'],
    },
  },
  {
    version: '0.0.11',
    date: '2026-08-18',
    changes: {
      vi: [
        'Bản phát hành đầu tiên của cầu nối AI Anywhere: tương tác với AI CLI trên máy (claude, codex, gemini, ...) từ thanh bên trình duyệt hoặc bảng điều khiển web',
        'Chia sẻ một cửa sổ tmux với điện thoại bằng mã QR khi bật --share',
        'Máy chủ từ xa qua SSH, thư mục tạm riêng cho từng tài khoản và dấu tích xanh trên các máy đã kết nối',
        'Phát hành lên npm bằng Trusted Publishing (OIDC), không dùng token dài hạn',
      ],
      nl: [
        "Eerste gepubliceerde versie van de AI Anywhere-brug: gebruik AI CLI's op je machine (claude, codex, gemini, ...) vanuit een browserzijpaneel of het webdashboard",
        'Deel een tmux-venster met een telefoon via een QR-code met --share',
        'Externe hosts via SSH, tijdelijke mappen per account en een groen vinkje bij verbonden hosts',
        'Publicatie naar npm via Trusted Publishing (OIDC), zonder langdurig token',
      ],

      en: [
        'First published release of the AI Anywhere bridge: chat with the AI CLIs on your machine (claude, codex, gemini, ...) from a browser side panel or the web dashboard',
        'Hand one tmux window to a phone by QR code, behind --share',
        'Remote hosts over ssh, per-account scratch dirs, and connected hosts marked with the app-wide green check',
        'Published to npm via Trusted Publishing (OIDC), no long-lived token',
      ],
      ja: [
        'AI Anywhere ブリッジの最初の公開リリース: ブラウザのサイドパネルや Web ダッシュボードから、手元のマシンの AI CLI(claude、codex、gemini など)と対話できます',
        'QR コードで tmux ウィンドウを 1 つスマホに渡せます(--share が必要)',
        'ssh 経由のリモートホスト、アカウントごとのスクラッチディレクトリ、接続済みホストには全体共通の緑チェックを表示',
        'npm の Trusted Publishing(OIDC)で公開。長期トークンなし',
      ],
      ko: [
        'AI Anywhere 브리지의 첫 공개 릴리스: 브라우저 사이드 패널이나 웹 대시보드에서 내 컴퓨터의 AI CLI(claude, codex, gemini 등)와 대화할 수 있습니다',
        'QR 코드로 tmux 창 하나를 휴대폰에 넘길 수 있습니다(--share 필요)',
        'ssh 원격 호스트, 계정별 스크래치 디렉터리 지원, 연결된 호스트에는 공통 초록 체크 표시',
        'npm Trusted Publishing(OIDC)으로 게시, 장기 토큰 없음',
      ],
      'zh-Hans': [
        'AI Anywhere 桥接的首个公开版本：从浏览器侧边栏或 Web 仪表盘，与你机器上的 AI CLI（claude、codex、gemini⋯）对话',
        '通过 QR code 把单个 tmux 窗口交给手机（需 --share）',
        '支持 ssh 远程主机、每账号独立暂存目录，已连接主机以全站绿色勾号标示',
        '通过 npm Trusted Publishing（OIDC）发布，无长期 token',
      ],
      'zh-Hant': [
        'AI Anywhere 橋接的首個公開版本：從瀏覽器側邊欄或 Web 儀表板，與你機器上的 AI CLI（claude、codex、gemini⋯）對話',
        '透過 QR code 把單個 tmux 視窗交給手機（需 --share）',
        '支援 ssh 遠端主機、每帳號獨立暫存目錄，已連線主機以全站綠色勾號標示',
        '透過 npm Trusted Publishing（OIDC）發布，無長期 token',
      ],
    },
  },
]
