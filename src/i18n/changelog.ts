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
    version: '0.0.35',
    date: '2026-10-17',
    changes: {
      en: [
        'Drag sidebar folders to reorder or merge them, and move individual tasks without moving others that share the same working directory',
        'Drag tabs between workspaces to reorder, merge or split them, with edge scrolling, clear drop targets and Escape to cancel',
        'Terminal sessions and views stay intact during moves and merges, including changes synchronized from another client',
        'Desktop notifications sit below the tabs, with a compact card and inset close button, and dismiss after four seconds unless hovered',
        'The macOS desktop app uses smaller graphics buffers to reduce memory use while keeping the native Metal terminal renderer',
        'Setup reuses a compatible Node.js installation, including installations managed by nvm that are missing from the app environment',
        'Repeat desktop launches reuse the matching cached installer instead of downloading it again',
      ],
      'zh-Hans': [
        '拖动侧边栏文件夹即可排序或合并，单独移动任务时不再影响使用相同工作目录的其他任务',
        '在工作区之间拖动标签页即可排序、合并或分屏，支持边缘自动滚动、明确的放置提示和 Escape 取消',
        '移动和合并时保留终端会话与画面，也能同步其他客户端发起的变更',
        '桌面通知移到标签页下方，卡片更紧凑，关闭按钮收进卡片内；四秒后自动消失，鼠标悬停时暂停倒数',
        'macOS 桌面应用使用更小的图形缓冲来降低内存占用，保留原生 Metal 终端渲染',
        '安装时复用兼容的 Node.js，包括由 nvm 管理但未出现在应用环境中的版本',
        '再次启动桌面应用时复用匹配版本的安装脚本缓存，不再重复下载',
      ],
      'zh-Hant': [
        '拖曳側欄資料夾即可排序或合併，單獨移動任務時不再影響使用相同工作目錄的其他任務',
        '在工作區之間拖曳分頁即可排序、合併或分割畫面，支援邊緣自動捲動、明確的放置提示及 Escape 取消',
        '移動與合併時保留終端工作階段及畫面，也能同步其他客戶端發起的變更',
        '桌面通知移到分頁下方，卡片更精簡，關閉按鈕收進卡片內；四秒後自動消失，滑鼠懸停時暫停倒數',
        'macOS 桌面應用程式使用更小的圖形緩衝來降低記憶體佔用，保留原生 Metal 終端繪製',
        '安裝時沿用相容的 Node.js，包括由 nvm 管理但未出現在應用程式環境中的版本',
        '再次啟動桌面應用程式時沿用符合版本的安裝腳本快取，不再重複下載',
      ],
      ja: [
        'サイドバーのフォルダーをドラッグして並べ替えや結合ができ、同じ作業ディレクトリの他のタスクに影響せず個別に移動できます',
        'ワークスペース間でタブをドラッグして並べ替え、結合、画面分割ができます。端での自動スクロール、ドロップ位置の表示、Escape キーでのキャンセルに対応します',
        '移動や結合の際もターミナルのセッションと画面を維持し、別のクライアントからの変更も同期します',
        'デスクトップ通知をタブの下に移動し、カードをコンパクトにして閉じるボタンを内側に配置しました。4秒後に自動で消え、マウスを重ねている間はカウントダウンを一時停止します',
        'macOS デスクトップアプリは小さな描画バッファでメモリ使用量を抑え、ネイティブの Metal ターミナル描画を維持します',
        'セットアップは既存の互換性のある Node.js を再利用します。アプリの環境に含まれていない nvm 管理のバージョンも検出します',
        'デスクトップアプリの再起動時は、対応するインストーラーのキャッシュを再利用して再ダウンロードを省きます',
      ],
      ko: [
        '사이드바 폴더를 끌어서 순서를 바꾸거나 합칠 수 있으며, 같은 작업 디렉터리를 사용하는 다른 작업에 영향을 주지 않고 개별 작업을 이동할 수 있습니다',
        '작업 공간 사이에서 탭을 끌어 순서 변경, 합치기, 화면 분할을 할 수 있습니다. 가장자리 자동 스크롤, 명확한 놓기 위치 표시, Escape 키로 취소를 지원합니다',
        '이동하거나 합칠 때 터미널 세션과 화면을 유지하며, 다른 클라이언트에서 시작한 변경도 동기화합니다',
        '데스크톱 알림을 탭 아래로 옮기고 카드를 간결하게 다듬었으며 닫기 버튼을 안쪽에 배치했습니다. 4초 후 자동으로 사라지고 마우스를 올려놓으면 카운트다운이 일시 정지됩니다',
        'macOS 데스크톱 앱은 더 작은 그래픽 버퍼로 메모리 사용량을 줄이면서 네이티브 Metal 터미널 렌더러를 유지합니다',
        '설치 시 호환되는 기존 Node.js를 재사용하며, 앱 환경에 없는 nvm 관리 버전도 찾습니다',
        '데스크톱 앱을 다시 실행할 때는 일치하는 버전의 설치 스크립트 캐시를 재사용해 다시 다운로드하지 않습니다',
      ],
    },
  },
  {
    version: '0.0.34',
    date: '2026-10-15',
    changes: {
      en: [
        'The macOS desktop app opened from Finder or the Dock scrolls TUIs such as pi again: the wheel reaches the application instead of moving a stale copy of the screen',
        'Drop files from Finder straight onto a macOS terminal pane: a pane on this machine gets their paths, one on another machine gets them uploaded first',
        'Messages sent from the composer to panes on this machine are confirmed and cleared once they arrive, instead of staying marked as sent',
        "The composer's frosted glass shows the wallpaper behind it again when it sits below a terminal",
        'Newer pi builds are shown as working while a run is in flight',
      ],
      'zh-Hans': [
        '从 Finder 或程序坞打开的 macOS 桌面应用，重新可以在 pi 等 TUI 中滚动：滚轮会送达程序本身，不再只是滚动一份过时的屏幕副本',
        '可以把 Finder 里的文件直接拖到 macOS 终端面板：本机面板会填入文件路径，其他机器上的面板会先上传再填入',
        '从输入框发送到本机面板的消息，送达后会被确认并清除，不再一直停留在已发送状态',
        '输入框位于终端下方时，毛玻璃效果重新透出背后的壁纸',
        '新版 pi 运行时会正确显示为工作中',
      ],
      'zh-Hant': [
        '從 Finder 或 Dock 打開的 macOS 桌面應用程式，重新可以在 pi 等 TUI 中捲動：滾輪會送到程式本身，不再只是捲動一份過時的畫面副本',
        '可以把 Finder 裡的檔案直接拖到 macOS 終端面板：本機面板會填入檔案路徑，其他機器上的面板會先上傳再填入',
        '從輸入框送到本機面板的訊息，送達後會被確認並清除，不再一直停在已送出狀態',
        '輸入框位於終端下方時，毛玻璃效果重新透出背後的桌布',
        '新版 pi 執行時會正確顯示為工作中',
      ],
      ja: [
        'Finder や Dock から開いた macOS デスクトップアプリで、pi などの TUI が再びスクロールできるようになりました。ホイールが古い画面のコピーを動かすのではなく、アプリケーションに届きます',
        'Finder のファイルを macOS のターミナルペインへ直接ドロップできます。このマシンのペインにはパスが入力され、他のマシンのペインには先にアップロードされます',
        'コンポーザーからこのマシンのペインへ送ったメッセージは、到着を確認すると消去され、送信済みのまま残らなくなりました',
        'ターミナルの下にあるコンポーザーのすりガラスが、再び背後の壁紙を透かして表示します',
        '新しい pi のビルドも実行中は作業中として表示されます',
      ],
      ko: [
        'Finder나 Dock에서 연 macOS 데스크톱 앱에서 pi 같은 TUI가 다시 스크롤됩니다. 휠이 오래된 화면 사본을 움직이는 대신 애플리케이션에 전달됩니다',
        'Finder의 파일을 macOS 터미널 패널로 바로 끌어다 놓을 수 있습니다. 이 기기의 패널에는 경로가 입력되고, 다른 기기의 패널에는 먼저 업로드됩니다',
        '작성기에서 이 기기의 패널로 보낸 메시지는 도착이 확인되면 지워지며, 더 이상 보냄 상태로 남지 않습니다',
        '터미널 아래에 있는 작성기의 반투명 유리 효과가 다시 뒤의 배경화면을 비춰 줍니다',
        '새 pi 빌드도 실행 중에는 작업 중으로 표시됩니다',
      ],
      vi: [
        'Ứng dụng máy tính macOS mở từ Finder hoặc Dock lại cuộn được các TUI như pi: con lăn chuột tới thẳng ứng dụng thay vì chỉ cuộn một bản sao màn hình cũ',
        'Kéo tệp từ Finder thả thẳng vào khung terminal trên macOS: khung trên máy này nhận đường dẫn, khung trên máy khác được tải tệp lên trước',
        'Tin nhắn gửi từ ô soạn thảo tới khung trên máy này được xác nhận và xóa khi đã tới nơi, thay vì cứ ở trạng thái đã gửi',
        'Hiệu ứng kính mờ của ô soạn thảo lại hiện hình nền phía sau khi nằm dưới terminal',
        'Các bản pi mới được hiển thị là đang làm việc trong khi chạy',
      ],
      nl: [
        "De macOS-desktopapp, geopend vanuit Finder of het Dock, scrollt weer in TUI's zoals pi: het scrollwiel bereikt de applicatie in plaats van een verouderde kopie van het scherm te verschuiven",
        'Sleep bestanden vanuit Finder direct op een macOS-terminalvenster: een venster op deze machine krijgt hun paden, een venster op een andere machine krijgt ze eerst geüpload',
        'Berichten die je vanuit de editor naar vensters op deze machine stuurt, worden bevestigd en gewist zodra ze aankomen, in plaats van als verzonden te blijven staan',
        'Het matglas van de editor laat de achtergrond weer doorschemeren wanneer het onder een terminal staat',
        'Nieuwere pi-versies worden tijdens een run als bezig getoond',
      ],
      pt: [
        'O aplicativo para desktop macOS aberto pelo Finder ou pelo Dock volta a rolar TUIs como o pi: a roda do mouse chega ao aplicativo em vez de mover uma cópia antiga da tela',
        'Arraste arquivos do Finder direto para um painel de terminal no macOS: um painel nesta máquina recebe os caminhos, um em outra máquina recebe os arquivos enviados antes',
        'Mensagens enviadas do editor para painéis nesta máquina são confirmadas e removidas quando chegam, em vez de ficarem marcadas como enviadas',
        'O vidro fosco do editor volta a mostrar o papel de parede quando fica abaixo de um terminal',
        'Versões mais novas do pi aparecem como trabalhando durante uma execução',
      ],
    },
  },
  {
    version: '0.0.33',
    date: '2026-10-14',
    changes: {
      en: [
        'The macOS desktop app can be downloaded from tmux.online: a universal DMG for Apple silicon and Intel with the same version as the CLI',
        'The macOS terminal scrollbar appears on hover or scrolling without taking space from the terminal grid',
        'The dotted space around the terminal uses GPU rendering and matches the terminal background, including transparency',
        'Dragging the sidebar and releasing over a terminal no longer leaves the drag stuck',
        'Over a wallpaper, the sidebar edge, tab strip seam and split dividers no longer leak bright light',
        'Windows local bridge discovery handles refused connections more reliably',
        'Installer update announcements wait until all client packages have built and published successfully',
      ],
      'zh-Hans': [
        '可从 tmux.online 下载 macOS 桌面应用：支持 Apple 芯片与 Intel 的通用 DMG，版本号与 CLI 一致',
        'macOS 终端滚动条在悬停或滚动时显示，不再占用终端网格宽度',
        '终端周围的点阵区域改用 GPU 渲染，并与终端背景及透明度保持一致',
        '拖动侧边栏后在终端上松开鼠标，不再导致拖拽卡住',
        '使用壁纸时，侧边栏边缘、标签栏接缝与分割线不再透出明亮的漏光',
        'Windows 本机桥接服务探测更可靠地处理连接被拒绝的情况',
        '所有客户端包构建和发布成功后，安装入口才会提示新版本',
      ],
      'zh-Hant': [
        '可從 tmux.online 下載 macOS 桌面應用程式：支援 Apple 晶片與 Intel 的通用 DMG，版本號與 CLI 一致',
        'macOS 終端捲軸在停留或捲動時顯示，不再占用終端網格寬度',
        '終端周圍的點陣區域改用 GPU 渲染，並與終端背景及透明度保持一致',
        '拖動側邊欄後在終端上放開滑鼠，不再導致拖曳卡住',
        '使用桌布時，側邊欄邊緣、分頁列接縫與分割線不再透出明亮的漏光',
        'Windows 本機橋接服務探測更可靠地處理連線遭拒的情況',
        '所有客戶端套件構建與發布成功後，安裝入口才會提示新版本',
      ],
      ja: [
        'macOS デスクトップアプリを tmux.online からダウンロードできるようになりました。Apple シリコンと Intel に対応したユニバーサル DMG で、バージョンは CLI と同じです',
        'macOS ターミナルのスクロールバーはホバー時やスクロール時に表示され、グリッドの幅を占有しなくなりました',
        'ターミナル周囲のドット領域は GPU で描画され、透明度を含めターミナルの背景と一致します',
        'サイドバーをドラッグしてターミナル上で離しても、ドラッグが解除されない状態にならなくなりました',
        '壁紙使用時に、サイドバーの境界、タブバーの継ぎ目、分割線から明るい光が漏れなくなりました',
        'Windows でローカルブリッジを検出する際、接続拒否をより確実に処理します',
        'すべてのクライアントパッケージのビルドと公開が成功してから、インストーラーが新バージョンを案内します',
      ],
      ko: [
        'macOS 데스크톱 앱을 tmux.online에서 내려받을 수 있습니다. Apple 실리콘과 Intel을 모두 지원하는 유니버설 DMG이며 버전은 CLI와 같습니다',
        'macOS 터미널 스크롤바는 마우스를 올리거나 스크롤할 때 나타나며 터미널 격자의 너비를 차지하지 않습니다',
        '터미널 주변의 점 무늬 영역을 GPU로 그리며 투명도를 포함한 터미널 배경과 일치시킵니다',
        '사이드바를 드래그한 뒤 터미널 위에서 마우스를 놓아도 드래그가 고정되지 않습니다',
        '배경화면을 쓸 때 사이드바 가장자리, 탭 바 경계, 분할선에 밝은 빛이 새어 보이지 않습니다',
        'Windows에서 로컬 브리지를 찾을 때 연결 거부를 더 안정적으로 처리합니다',
        '모든 클라이언트 패키지의 빌드와 배포가 성공한 뒤에만 설치 프로그램이 새 버전을 안내합니다',
      ],
      vi: [
        'Có thể tải ứng dụng máy tính macOS từ tmux.online: bản DMG universal cho Apple silicon và Intel, cùng phiên bản với CLI',
        'Thanh cuộn terminal macOS xuất hiện khi di chuột tới hoặc cuộn mà không chiếm chiều rộng của lưới terminal',
        'Vùng chấm quanh terminal được dựng bằng GPU và khớp với nền terminal, kể cả độ trong suốt',
        'Kéo thanh bên rồi thả chuột trên terminal không còn khiến thao tác kéo bị kẹt',
        'Khi dùng hình nền, mép thanh bên, đường nối dải tab và đường chia không còn bị lộ sáng',
        'Windows xử lý kết nối bị từ chối ổn định hơn khi tìm cầu nối cục bộ',
        'Trình cài đặt chỉ thông báo phiên bản mới sau khi mọi gói ứng dụng được xây dựng và phát hành thành công',
      ],
      nl: [
        'De macOS-desktopapp is te downloaden via tmux.online: een universele DMG voor Apple silicon en Intel, met hetzelfde versienummer als de CLI',
        'De macOS-terminal toont de schuifbalk bij aanwijzen of scrollen zonder ruimte van het terminalraster in te nemen',
        'Het puntengebied rondom de terminal wordt op de GPU getekend en volgt de terminalachtergrond, inclusief transparantie',
        'De zijbalk verslepen en boven een terminal loslaten laat de sleepactie niet meer vastlopen',
        'Met een achtergrond lekt er geen fel licht meer langs de zijbalkrand, de tabbalknaad en de scheidingslijnen',
        'Windows handelt geweigerde verbindingen betrouwbaarder af bij het zoeken naar de lokale bridge',
        'De installer kondigt een update pas aan nadat alle clientpakketten succesvol zijn gebouwd en gepubliceerd',
      ],
      pt: [
        'O aplicativo para desktop macOS pode ser baixado em tmux.online: um DMG universal para Apple Silicon e Intel, com a mesma versão da CLI',
        'A barra de rolagem do terminal macOS aparece ao passar o mouse ou rolar, sem ocupar espaço da grade',
        'A área pontilhada ao redor do terminal usa renderização por GPU e acompanha o fundo do terminal, incluindo a transparência',
        'Arrastar a barra lateral e soltar sobre o terminal não deixa mais o arraste travado',
        'Com papel de parede, a borda da barra lateral, a junção das abas e os divisores não deixam mais vazar luz clara',
        'A descoberta da ponte local no Windows trata conexões recusadas com mais confiabilidade',
        'O instalador só anuncia uma atualização depois que todos os pacotes de clientes forem compilados e publicados com sucesso',
      ],
    },
  },
  {
    version: '0.0.32',
    date: '2026-10-13',
    changes: {
      en: [
        "The macOS desktop terminal now runs on Ghostty's GPU (Metal) renderer: output parses many times faster off the UI thread, scrolling and resizing stay smooth, and clearing the screen no longer leaves stale rows behind",
        'TUIs such as Codex no longer show shifted or missing lines at the bottom after attaching: blank rows of the captured screen are kept',
        'A new window no longer flashes as a shrunken block before filling the pane, and dragging the sidebar keeps the terminal following the pointer',
        "The space beside a grid that does not fill the pane shows tmux's dot pattern, with a wallpaper too, and never under the text",
        'The mouse wheel scrolls full-screen apps that do not track the mouse by sending arrow keys',
        'Sizing a pane to the attached terminal is now off by default',
      ],
      ja: [
        'macOS デスクトップ版のターミナルが Ghostty の GPU（Metal）レンダラーで動作するようになりました。出力の解析は UI スレッド外で何倍も速くなり、スクロールやリサイズは滑らかになり、画面クリア後に古い行が残らなくなりました',
        'Codex などの TUI でアタッチ後に下部の行がずれたり欠けたりしなくなりました。キャプチャした画面の空行を保持します',
        '新しいウィンドウが縮んだブロックとして一瞬表示されることがなくなり、サイドバーのドラッグ中もターミナルがポインターに追従します',
        'グリッドがペインを満たさないときの余白に、壁紙使用時も tmux のドット模様を表示します。テキストの下には描画しません',
        'マウスを追跡しない全画面アプリでは、ホイールが矢印キーとして送られスクロールできます',
        '接続中のターミナルにペインサイズを合わせる設定は既定でオフになりました',
      ],
      ko: [
        'macOS 데스크톱 터미널이 Ghostty의 GPU(Metal) 렌더러로 동작합니다. 출력 파싱이 UI 스레드 밖에서 몇 배 빨라지고, 스크롤과 크기 조절이 부드러워졌으며, 화면을 지운 뒤 이전 줄이 남지 않습니다',
        'Codex 같은 TUI에서 연결 후 하단 줄이 밀리거나 사라지지 않습니다. 캡처한 화면의 빈 줄을 유지합니다',
        '새 창이 줄어든 블록으로 잠깐 보였다가 채워지는 현상이 사라졌고, 사이드바를 드래그할 때 터미널이 포인터를 따라옵니다',
        '그리드가 패널을 다 채우지 못할 때 남는 공간에 배경화면을 쓸 때도 tmux 점 무늬를 표시하며, 텍스트 아래에는 그리지 않습니다',
        '마우스를 추적하지 않는 전체 화면 앱에서 휠이 화살표 키로 전달되어 스크롤됩니다',
        '연결된 터미널 크기에 패널을 맞추는 설정이 기본으로 꺼졌습니다',
      ],
      'zh-Hant': [
        'macOS 桌面版終端改用 Ghostty 的 GPU（Metal）渲染：輸出解析在 UI 執行緒外快上數倍，捲動與縮放更順暢，清屏後不再殘留舊內容',
        'Codex 等 TUI 連上後底部不再錯位或缺行：保留擷取畫面中的空行',
        '新視窗不再先閃出一塊縮小的畫面再填滿，拖動側邊欄時終端會跟手',
        '網格未填滿窗格時，空出的區域顯示 tmux 的點陣（有桌布時也一樣），且不會畫在文字下方',
        '不追蹤滑鼠的全螢幕程式中，滾輪會以方向鍵送出，可以捲動',
        '窗格尺寸跟隨已連接終端的設定改為預設關閉',
      ],
      'zh-Hans': [
        'macOS 桌面终端改用 Ghostty 的 GPU（Metal）渲染器：输出解析在 UI 线程外加快数倍，滚动和缩放更流畅，清屏后不再残留旧内容',
        'Codex 等 TUI 连接后底部不再错位或缺行：保留捕获画面中的空行',
        '新窗口不再先闪出缩小的画面再填满，拖动侧边栏时终端会跟随指针',
        '网格未填满面板时，空白区域显示 tmux 点阵，使用壁纸时也一样，且不会画在文字下方',
        '在不跟踪鼠标的全屏程序中，滚轮会发送方向键以滚动内容',
        '面板尺寸跟随已连接终端的设置改为默认关闭',
      ],
      vi: [
        'Terminal trên macOS chuyển sang bộ dựng GPU (Metal) của Ghostty: phân tích đầu ra nhanh hơn nhiều lần ngoài luồng giao diện, cuộn và đổi kích thước mượt hơn, xóa màn hình không còn để lại dòng cũ',
        'Các TUI như Codex không còn lệch hoặc thiếu dòng ở cuối sau khi kết nối: giữ nguyên các dòng trống của ảnh chụp màn hình terminal',
        'Cửa sổ mới không còn nháy thành một khối thu nhỏ trước khi lấp đầy khung; terminal theo sát con trỏ khi kéo thanh bên',
        'Khoảng trống ngoài lưới hiển thị họa tiết chấm của tmux, kể cả khi có hình nền, và không vẽ dưới văn bản',
        'Con lăn gửi phím mũi tên để cuộn trong ứng dụng toàn màn hình không theo dõi chuột',
        'Tùy chọn đổi kích thước khung theo terminal đang kết nối mặc định được tắt',
      ],
      nl: [
        'De macOS-terminal gebruikt nu de GPU-renderer (Metal) van Ghostty: uitvoer wordt buiten de UI-thread veel sneller verwerkt, scrollen en schalen blijven soepel en wissen laat geen oude regels achter',
        'TUI’s zoals Codex tonen na het verbinden geen verschoven of ontbrekende regels onderaan meer: lege regels in de schermopname blijven behouden',
        'Een nieuw venster flitst niet meer als een verkleind blok voordat het paneel gevuld wordt; bij het slepen van de zijbalk volgt de terminal de aanwijzer',
        'De ruimte buiten het raster toont het puntenpatroon van tmux, ook met een achtergrondafbeelding, maar nooit onder de tekst',
        'Het muiswiel verstuurt pijltjestoetsen om te scrollen in schermvullende apps zonder muisregistratie',
        'Paneelafmetingen aanpassen aan de verbonden terminal staat nu standaard uit',
      ],
      pt: [
        'O terminal do macOS agora usa o renderizador GPU (Metal) do Ghostty: a saída é processada várias vezes mais rápido fora da thread da interface, a rolagem e o redimensionamento ficam suaves e limpar a tela não deixa linhas antigas',
        'TUIs como o Codex não mostram mais linhas deslocadas ou ausentes na parte inferior após conectar: as linhas vazias da captura são preservadas',
        'Uma nova janela não pisca mais como um bloco reduzido antes de preencher o painel, e o terminal acompanha o ponteiro ao arrastar a barra lateral',
        'O espaço fora da grade mostra o padrão de pontos do tmux, inclusive com papel de parede, sem desenhar sob o texto',
        'A roda do mouse envia teclas de seta para rolar aplicativos em tela cheia que não rastreiam o mouse',
        'Ajustar o painel ao tamanho do terminal conectado agora vem desativado por padrão',
      ],
    },
  },
  {
    version: '0.0.31',
    date: '2026-10-13',
    changes: {
      en: [
        'After a reboot the saved tabs come back even when the AA tmux session was recreated by hand before the server started; previously the snapshot was silently dropped and overwritten',
        "New private data dialog: tokens and passwords are saved to a per-tab file on the pane's machine, and the AI is given the path instead of the value in the conversation",
        'Continue on phone opens the tab in the AI Anywhere mobile app; the CLI accepts --no-qr to skip printing the QR code',
        'The installer restarts tmux and resumes pi, Codex and Claude sessions by their exact IDs after the machine or tmux server goes away',
        'The desktop app reads local panes directly from tmux for faster output',
        'Reattaching no longer loses the first output or captures a half-painted screen after a resize, and restores mouse and keypad modes so scrolling and arrow keys keep working',
        'A returning browser gets its window sizes back at once instead of one repaint per tab',
        'Vietnamese and Dutch interface',
      ],
      ja: [
        '再起動後、サーバー起動前に AA の tmux セッションを手動で作り直していても保存されたタブが復元されます。これまではスナップショットが黙って破棄され上書きされていました',
        '新しいプライベートデータ入力: トークンやパスワードはペインのマシン上のタブ専用ファイルに保存され、AI には会話内の値ではなくパスが渡されます',
        '「スマホで続ける」で AI Anywhere モバイルアプリにそのタブを開けるようになりました。CLI は --no-qr で QR コードの表示を省略できます',
        'インストーラーが tmux を再起動し、マシンや tmux サーバーが停止した後も pi・Codex・Claude のセッションを正確な ID で再開します',
        'デスクトップアプリはローカルのペインを tmux から直接読み取り、出力がより高速になりました',
        '再接続時に最初の出力を取りこぼしたり、リサイズ後に描画途中の画面を取得したりしなくなり、マウスとキーパッドのモードも復元されるためスクロールや矢印キーが引き続き使えます',
        'ブラウザに戻ると、タブごとに再描画することなくウィンドウサイズが一度に復元されます',
        'ベトナム語とオランダ語のインターフェース',
      ],
      ko: [
        '재부팅 후 서버를 시작하기 전에 AA tmux 세션을 직접 다시 만들었더라도 저장된 탭이 복원됩니다. 이전에는 스냅샷이 조용히 버려지고 덮어써졌습니다',
        '새 개인 데이터 입력: 토큰과 비밀번호는 패널이 실행 중인 머신의 탭 전용 파일에 저장되며, AI에는 대화 속 값 대신 경로가 전달됩니다',
        '휴대폰에서 계속하기로 AI Anywhere 모바일 앱에서 해당 탭을 열 수 있습니다. CLI는 --no-qr로 QR 코드 출력을 생략할 수 있습니다',
        '설치 프로그램이 tmux를 다시 시작하고, 머신이나 tmux 서버가 종료된 뒤에도 pi, Codex, Claude 세션을 정확한 ID로 재개합니다',
        '데스크톱 앱이 로컬 패널을 tmux에서 직접 읽어 출력이 더 빨라졌습니다',
        '다시 연결할 때 첫 출력을 놓치거나 크기 변경 후 반쯤 그려진 화면을 캡처하지 않으며, 마우스와 키패드 모드를 복원해 스크롤과 방향키가 계속 동작합니다',
        '브라우저로 돌아오면 탭마다 다시 그리지 않고 창 크기가 한 번에 복원됩니다',
        '베트남어와 네덜란드어 인터페이스',
      ],
      'zh-Hant': [
        '重開機後即使在伺服器啟動前手動重建了 AA 的 tmux 工作階段，已儲存的分頁也會恢復；先前快照會被默默丟棄並覆寫',
        '新增私密資料對話框：權杖與密碼會存到窗格所在機器上的分頁專用檔案，AI 拿到的是路徑，而不是對話裡的明文',
        '「在手機上繼續」可直接在 AI Anywhere 手機 App 中開啟該分頁；CLI 新增 --no-qr 可不列印 QR 碼',
        '安裝程式會重新啟動 tmux，並在機器或 tmux 伺服器停止後依精確 ID 恢復 pi、Codex 與 Claude 會話',
        '桌面 App 直接從 tmux 讀取本機窗格，輸出更快',
        '重新連線不再遺漏第一段輸出，調整大小後也不會擷取到畫到一半的畫面，並會恢復滑鼠與鍵盤模式，捲動與方向鍵持續可用',
        '回到瀏覽器時一次恢復所有視窗尺寸，不再每個分頁各重繪一次',
        '新增越南語與荷蘭語介面',
      ],
      'zh-Hans': [
        '重启后，即使在服务启动前手动重建了 AA 的 tmux 会话，已保存的标签页也会恢复；此前快照会被静默丢弃并覆盖',
        '新增私密数据对话框：令牌和密码保存到面板所在机器上的标签页专用文件，AI 收到的是路径，而非对话中的明文',
        '“在手机上继续”可在 AI Anywhere 手机 App 中打开对应标签页；CLI 新增 --no-qr 可跳过打印二维码',
        '机器或 tmux 服务停止后，安装程序会重启 tmux，并根据精确 ID 恢复 pi、Codex 和 Claude 会话',
        '桌面 App 直接从 tmux 读取本机面板，输出更快',
        '重新连接不再丢失首段输出或在缩放后捕获未画完的画面，并恢复鼠标和小键盘模式，保持滚动和方向键可用',
        '返回浏览器时一次恢复所有窗口尺寸，不再逐个标签页重绘',
        '新增越南语和荷兰语界面',
      ],
      vi: [
        'Sau khi khởi động lại, các thẻ đã lưu vẫn được khôi phục dù phiên tmux AA được tạo lại thủ công trước khi máy chủ chạy; trước đây bản chụp bị bỏ qua và ghi đè',
        'Hộp thoại dữ liệu riêng tư mới lưu token và mật khẩu vào tệp riêng của thẻ trên máy chạy khung terminal; AI nhận đường dẫn thay vì giá trị trong hội thoại',
        'Tiếp tục trên điện thoại mở thẻ trong ứng dụng AI Anywhere; CLI hỗ trợ --no-qr để không in mã QR',
        'Trình cài đặt khởi động lại tmux và khôi phục phiên pi, Codex, Claude theo đúng ID khi máy hoặc máy chủ tmux dừng',
        'Ứng dụng desktop đọc trực tiếp các khung cục bộ từ tmux để xuất nhanh hơn',
        'Kết nối lại không còn mất đầu ra ban đầu hay chụp màn hình đang vẽ dở sau khi đổi kích thước; chế độ chuột và bàn phím số được khôi phục để cuộn và phím mũi tên tiếp tục hoạt động',
        'Khi quay lại trình duyệt, kích thước mọi cửa sổ được khôi phục cùng lúc thay vì vẽ lại từng thẻ',
        'Thêm giao diện tiếng Việt và tiếng Hà Lan',
      ],
      nl: [
        'Na een herstart komen opgeslagen tabs terug, ook als de AA-tmux-sessie handmatig is hersteld voordat de server start; voorheen werd de momentopname stilzwijgend weggegooid en overschreven',
        'Een nieuw venster voor privégegevens bewaart tokens en wachtwoorden in een bestand per tab op de paneelcomputer; de AI krijgt het pad in plaats van de waarde in het gesprek',
        'Doorgaan op telefoon opent de tab in de mobiele AI Anywhere-app; --no-qr slaat de QR-code in de CLI over',
        'Het installatieprogramma herstart tmux en hervat pi-, Codex- en Claude-sessies op hun exacte ID nadat de computer of tmux-server stopt',
        'De desktopapp leest lokale panelen rechtstreeks uit tmux voor snellere uitvoer',
        'Opnieuw verbinden verliest geen eerste uitvoer meer en legt geen half getekend scherm vast na een formaatwijziging; muis- en toetsenblokmodi worden hersteld zodat scrollen en pijltjestoetsen blijven werken',
        'Terugkeren naar de browser herstelt alle vensterafmetingen tegelijk in plaats van tab voor tab opnieuw te tekenen',
        'Een Vietnamese en Nederlandse interface',
      ],
      pt: [
        'Após reiniciar, as abas salvas voltam mesmo se a sessão tmux AA tiver sido recriada manualmente antes do servidor iniciar; antes, a captura era descartada e sobrescrita silenciosamente',
        'Novo diálogo de dados privados: tokens e senhas ficam em um arquivo por aba na máquina do painel, e a IA recebe o caminho em vez do valor na conversa',
        'Continuar no celular abre a aba no aplicativo AI Anywhere; a CLI aceita --no-qr para não imprimir o código QR',
        'O instalador reinicia o tmux e retoma sessões pi, Codex e Claude pelos IDs exatos após a máquina ou o servidor tmux parar',
        'O aplicativo desktop lê os painéis locais diretamente do tmux para acelerar a saída',
        'Reconectar não perde mais a saída inicial nem captura uma tela parcialmente desenhada após redimensionar; os modos do mouse e do teclado numérico são restaurados para manter a rolagem e as setas funcionando',
        'Ao voltar ao navegador, todos os tamanhos de janela são restaurados de uma vez, sem redesenhar aba por aba',
        'Interface em vietnamita e neerlandês',
      ],
    },
  },
  {
    version: '0.0.30',
    date: '2026-10-12',
    changes: {
      en: [
        'The installer always uses the official npm registry and refreshes package metadata online, preventing stale caches from hiding new releases',
      ],
      ja: [
        'インストーラーは常に公式 npm レジストリを使用し、パッケージ情報をオンラインで更新して古いキャッシュによる新バージョンの取得失敗を防ぎます',
      ],
      ko: [
        '설치 프로그램이 항상 공식 npm 레지스트리를 사용하고 패키지 정보를 온라인으로 갱신하여 오래된 캐시로 새 버전을 찾지 못하는 문제를 방지합니다',
      ],
      'zh-Hant': ['安裝程式固定使用官方 npm 源並在線更新套件資訊，避免舊快取導致找不到新版本'],
      'zh-Hans': ['安装程序始终使用官方 npm 源并在线刷新包元数据，避免旧缓存导致找不到新版本'],
      vi: ['Trình cài đặt luôn dùng registry npm chính thức và làm mới siêu dữ liệu trực tuyến, tránh bộ nhớ đệm cũ che mất phiên bản mới'],
      nl: [
        'Het installatieprogramma gebruikt altijd het officiële npm-register en vernieuwt pakketgegevens online, zodat een oude cache nieuwe releases niet verbergt',
      ],
      pt: [
        'O instalador sempre usa o registro oficial do npm e atualiza os metadados online, evitando que caches antigos ocultem novas versões',
      ],
    },
  },
  {
    version: '0.0.29',
    date: '2026-10-12',
    changes: {
      en: [
        'The official installer now supports desktop startup, reusing a healthy bridge or starting it in the background',
        'Desktop bundle versions now stay in sync with CLI releases',
      ],
      ja: [
        '公式インストーラーがデスクトップ起動に対応し、正常なブリッジを再利用するかバックグラウンドで起動します',
        'デスクトップアプリのバージョンを CLI リリースと同期します',
      ],
      ko: [
        '공식 설치 프로그램이 데스크톱 시작을 지원하며 정상 작동 중인 브리지를 재사용하거나 백그라운드에서 시작합니다',
        '데스크톱 앱 버전을 CLI 릴리스와 동기화합니다',
      ],
      'zh-Hant': ['官方安裝程式支援桌面啟動，重用正常運作的橋接服務或在背景啟動服務', '桌面安裝包版本與 CLI 發布版本保持同步'],
      'zh-Hans': ['官方安装程序支持桌面端启动，可复用正常运行的桥接服务或在后台启动服务', '桌面安装包版本与 CLI 发布版本保持同步'],
      vi: [
        'Trình cài đặt chính thức hỗ trợ khởi động desktop, tái sử dụng cầu nối đang hoạt động hoặc khởi chạy nó trong nền',
        'Phiên bản gói desktop đồng bộ với bản phát hành CLI',
      ],
      nl: [
        'Het officiële installatieprogramma ondersteunt het starten van de desktopapp en hergebruikt een werkende bridge of start deze op de achtergrond',
        'Versies van desktopbundels blijven gelijk aan CLI-releases',
      ],
      pt: [
        'O instalador oficial agora suporta a inicialização do desktop, reutilizando uma ponte saudável ou iniciando-a em segundo plano',
        'As versões dos pacotes desktop ficam sincronizadas com as versões da CLI',
      ],
    },
  },
  {
    version: '0.0.28',
    date: '2026-10-12',
    changes: {
      en: [
        'The installer now configures automatic tmux session saving every 5 minutes and restoration on tmux startup, including pane contents',
        'Repeated installs reuse existing recovery plugins and preserve your tmux configuration',
      ],
      ja: [
        'インストーラーが tmux セッションを 5 分ごとに自動保存し、tmux 起動時にペインの内容を含めて復元するよう設定します',
        '再インストール時は既存の復元プラグインを再利用し、tmux の設定を保持します',
      ],
      ko: [
        '설치 프로그램이 tmux 세션을 5분마다 자동 저장하고 tmux 시작 시 창 내용과 함께 복원하도록 설정합니다',
        '반복 설치 시 기존 복원 플러그인을 재사용하고 tmux 설정을 유지합니다',
      ],
      'zh-Hant': ['安裝程式自動設定每 5 分鐘儲存 tmux 會話，啟動 tmux 時恢復會話與面板內容', '重複安裝會重用既有恢復插件並保留 tmux 設定'],
      'zh-Hans': [
        '安装程序自动配置每 5 分钟保存 tmux 会话，并在 tmux 启动时恢复会话及面板内容',
        '重复安装会复用现有恢复插件并保留 tmux 配置',
      ],
      vi: [
        'Trình cài đặt tự động lưu phiên tmux mỗi 5 phút và khôi phục khi tmux khởi động, bao gồm nội dung khung terminal',
        'Cài lại sẽ tái sử dụng plugin khôi phục hiện có và giữ nguyên cấu hình tmux',
      ],
      nl: [
        'Het installatieprogramma stelt automatisch opslaan van tmux-sessies om de 5 minuten in en herstelt ze bij het starten van tmux, inclusief paneelinhoud',
        'Opnieuw installeren hergebruikt bestaande herstelplugins en behoudt je tmux-configuratie',
      ],
      pt: [
        'O instalador configura o salvamento automático de sessões tmux a cada 5 minutos e a restauração ao iniciar o tmux, incluindo o conteúdo dos painéis',
        'Reinstalações reutilizam os plugins de recuperação existentes e preservam sua configuração do tmux',
      ],
    },
  },
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
      pt: [
        'Escolha um IP local ou de rede ao iniciar a CLI e abra o link de conexão exibido; URLs públicas encaminhadas também são suportadas',
        'O acesso local por 127.0.0.1 continua disponível quando a CLI escuta em uma interface de rede selecionada',
        'Vários servidores de ponte podem espelhar o mesmo painel tmux sem interromper uns aos outros',
        'Arrastar abas adjacentes e reordenar tarefas com o mesmo diretório de trabalho preserva a ordem desejada',
        'As seções de hosts podem ser recolhidas, com o estado lembrado entre clientes web',
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
      pt: [
        'O painel agora mostra o histórico de sessões de seis CLIs: claude, codex, pi, opencode, cursor e copilot, incluindo sessões anteriores à existência deste aplicativo',
        'O histórico pode ser exibido sem agrupamento, por CLI ou por pasta; cada sessão mostra seu consumo de tokens, com ordenação por tempo ou tokens',
        'Clique em uma entrada para ver os detalhes completos, copiar o comando de retomada ou excluir a sessão do armazenamento da própria CLI',
        'Em telas largas, o painel tem duas colunas: tarefas ativas à esquerda e histórico à direita',
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
      pt: [
        'A rolagem voltou a ser suave nos painéis do Claude Code: a versão 2.1 ativou o rastreamento do mouse, fazendo cada movimento e passo da roda exigir uma ida e volta e um redesenho completo. O terminal agora mantém o mouse local e agrupa a entrada da roda, como já faz no OpenCode, e arrastar para selecionar texto funciona novamente',
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
      pt: [
        'O Cursor Agent passa a integrar as CLIs suportadas, com hooks de ciclo de vida informando os estados de atividade e espera',
        'A opção de compartilhar no menu da aba permanece visível quando o compartilhamento está desativado no servidor e mostra o comando para ativá-lo',
        'As contagens de pastas e máquinas ficam ocultas quando expandidas, pois as linhas abaixo já mostram seu conteúdo',
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
      pt: [
        'As pastas de tarefas têm uma hierarquia mais clara, com ícones de pasta e máquina, itens recuados e uma seção separada para itens sem grupo',
        'Os totais de pastas e máquinas agora contam abas, incluindo abas mescladas ativas, em vez de apenas linhas de tarefas',
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
      pt: [
        'Um host inacessível agora mostra que as tentativas continuam, com um botão para tentar novamente imediatamente sem esperar a próxima consulta',
      ],
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
      pt: [
        'Nova tentativa automática: quando uma CLI encerra o turno com erro após esgotar suas próprias tentativas, o servidor envia um comando de nova tentativa ao painel, com limite de tentativas, espera crescente e um aviso para distinguir uma nova tentativa de um travamento. Funciona com todos os navegadores fechados. A ativação, o texto e o limite ficam em Configurações',
        'As sessões Pi agora informam execuções com falha, permitindo novas tentativas automáticas',
        'Um celular aprovado agora é um cliente completo, com todas as janelas e capacidades do desktop; a aprovação de novos dispositivos permanece no desktop',
        'As configurações web ocultam a seção de caminho dos arquivos arrastados em navegadores que não podem conceder acesso a uma pasta',
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
      pt: [
        'O modo de colagem delimitada é restaurado ao conectar a qualquer CLI de IA, mantendo uma colagem de várias linhas como uma única mensagem',
        'A CLI oferece instalar a atualização em vez de apenas descrevê-la e pergunta no máximo uma vez por dia',
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
      pt: [
        'Os celulares ganham uma entrada própria, um menu de tarefas, colagem de capturas no campo de mensagem e uma visualização legível do texto de qualquer painel em vez de uma imagem de 80 colunas',
        'Um dispositivo pareado reúne janelas; o desktop mostra os celulares conectados e permite desconectar qualquer um',
        'Escolha o endereço para o qual o código QR aponta',
        'Turnos com falha aparecem na lista de tarefas que precisam de atenção e deixam esse estado após serem tratados',
        'Rolagem mais suave ao toque, controles fáceis de tocar e o celular não pode mais alterar a grade da janela do desktop',
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
      pt: ['Os indicadores de tarefas no painel são reunidos por grupo, e as notificações mostram o ícone da CLI no título'],
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
      pt: ['O aviso de atualização aparece sempre que a versão publicada difere da instalada, não apenas quando é mais recente'],
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
      pt: [
        'Primeira versão publicada da ponte AI Anywhere: converse com as CLIs de IA da sua máquina (claude, codex, gemini e outras) pelo painel lateral do navegador ou pelo painel web',
        'Compartilhe uma janela tmux com um celular por código QR usando --share',
        'Hosts remotos por SSH, diretórios temporários por conta e hosts conectados marcados com o indicador verde do aplicativo',
        'Publicação no npm por Trusted Publishing (OIDC), sem token de longa duração',
      ],
    },
  },
]
