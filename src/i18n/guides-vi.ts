import type { GuideCollection } from './guides'

export const vi: GuideCollection = {
  navTitle: 'Hướng dẫn',
  home: 'Trang chủ',
  pages: {
    tmuxWebUi: {
      eyebrow: 'Giao diện web tmux',
      title: 'Giao diện trình duyệt cho các phiên tmux đang chạy',
      description:
        'Mở các phiên tmux hiện có trong trình duyệt, chuyển giữa các ô terminal và quản lý máy cục bộ hoặc SSH mà không di chuyển dữ liệu terminal',
      summary:
        'AI Anywhere bổ sung giao diện trình duyệt cho tmux mà không thay thế tmux. Shell và tác tử của bạn tiếp tục chạy trong tmux trên máy nơi bạn khởi động chúng',
      sections: [
        {
          title: 'tmux vẫn quản lý phiên',
          body: [
            'Máy chủ cục bộ đọc các phiên, cửa sổ và ô terminal hiện có của tmux. Mở WebUI không khởi động lại, sao chép hay di chuyển phiên',
            'Đóng trình duyệt hoặc mất mạng, tiến trình vẫn chạy trong tmux. Mở lại trang để trở về cùng ô terminal',
          ],
        },
        {
          title: 'Một giao diện cho mọi máy và tác vụ',
          body: ['Các phiên cục bộ và máy chủ kết nối qua cấu hình SSH của bạn được nhóm trong cùng thanh bên'],
          bullets: [
            'Chuyển giữa cửa sổ và ô tmux từ trình duyệt',
            'Xem tác vụ lập trình AI nào đang chạy hoặc chờ nhập liệu',
            'Mở cùng không gian làm việc trên điện thoại khi có thể kết nối đến máy',
          ],
        },
        {
          title: 'Dữ liệu nào được giữ cục bộ',
          body: [
            'Ứng dụng web do tiến trình AI Anywhere cục bộ tại 127.0.0.1 cung cấp. Đầu ra terminal, phím bấm, tệp và thông tin xác thực không đi qua tmux.online',
          ],
        },
      ],
    },
    claudeCodeBrowser: {
      eyebrow: 'Claude Code',
      title: 'Dùng Claude Code từ trình duyệt mà không di chuyển terminal',
      description: 'Giữ Claude Code chạy trong tmux, theo dõi trạng thái qua trình duyệt và trả lời lời nhắc từ máy tính hoặc điện thoại',
      summary:
        'Khởi động Claude Code trong tmux như thường lệ. AI Anywhere hiển thị cùng terminal đó trong trình duyệt và đánh dấu khi Claude cần bạn trả lời',
      sections: [
        {
          title: 'Giữ phiên tiếp tục chạy',
          body: [
            'Claude Code vẫn chạy trong tmux khi đóng trình duyệt hoặc mất kết nối SSH. Trình duyệt chỉ là một cách xem phiên, không phải tiến trình Claude thứ hai',
          ],
        },
        {
          title: 'Quay lại khi cần nhập liệu',
          body: [
            'Các tác vụ được nhóm theo máy và hiển thị trạng thái đang chạy hoặc đang chờ. Mở tác vụ đang chờ, xem ngữ cảnh terminal rồi trả lời ngay trong ô đó',
          ],
          bullets: [
            'Theo dõi từng tác tử phụ như một tác vụ riêng',
            'Chuyển giữa các kho mã mà không phải canh mọi terminal',
            'Trả lời bằng điện thoại khi không ở bàn làm việc',
          ],
        },
        {
          title: 'Thông tin xác thực Claude giữ nguyên vị trí',
          body: [
            'AI Anywhere không yêu cầu hay tải lên thông tin xác thực Anthropic. Claude Code vẫn được cài đặt và đăng nhập trên máy của bạn',
          ],
        },
      ],
    },
    codexBrowser: {
      eyebrow: 'Codex CLI',
      title: 'Điều khiển tác vụ Codex CLI từ mọi trình duyệt',
      description: 'Chạy Codex CLI trong tmux, theo dõi các tác vụ lập trình song song và chỉ can thiệp qua trình duyệt khi cần nhập liệu',
      summary:
        'Dùng Codex CLI theo quy trình terminal quen thuộc. AI Anywhere hiển thị phiên tmux cục bộ để các tác vụ dài vẫn sẵn sàng khi đổi tab, đổi thiết bị hoặc mất kết nối',
      sections: [
        {
          title: 'Luôn thấy trạng thái từng tác vụ',
          body: [
            'Mỗi tác vụ Codex tương ứng với cửa sổ tmux đang chạy nó. Các tác tử và worktree song song có thể tách riêng nhưng vẫn hiển thị trạng thái trong cùng thanh bên',
          ],
        },
        {
          title: 'Can thiệp từ màn hình khác',
          body: ['Khi Codex dừng để chờ quyết định, mở tác vụ từ trình duyệt máy tính hoặc điện thoại và tiếp tục trong terminal gốc'],
          bullets: [
            'Không cần đồng bộ shell thứ hai',
            'Không tải bản ghi terminal lên dịch vụ tài khoản',
            'Không cần giữ màn hình laptop mở',
          ],
        },
        {
          title: 'Cấu hình Codex của bạn không thay đổi',
          body: [
            'Codex CLI, cấu hình và thông tin xác thực đều ở trên máy. AI Anywhere bổ sung giao diện trình duyệt và danh sách tác vụ cho phiên tmux hiện có',
          ],
        },
      ],
    },
    security: {
      eyebrow: 'Bảo mật',
      title: 'Terminal luôn ở trên máy của bạn',
      description: 'Tìm hiểu máy chủ cục bộ, token kết nối, kiểm tra Origin, kết nối SSH và giới hạn của dịch vụ tài khoản AI Anywhere',
      summary:
        'AI Anywhere là cầu nối cục bộ, không phải terminal được lưu trữ trực tuyến. Trình duyệt giao tiếp với tiến trình chạy cạnh tmux, còn tmux.online phụ trách website và cấp quyền tài khoản',
      sections: [
        {
          title: 'Mặc định chỉ dùng cục bộ',
          body: [
            'Máy chủ mặc định lắng nghe trên 127.0.0.1. Tiến trình gắn với địa chỉ này chỉ truy cập được từ cùng máy, không trực tiếp từ Internet công cộng',
          ],
        },
        {
          title: 'Mọi kết nối được kiểm tra',
          body: [
            'URL cục bộ chứa token kết nối và máy chủ kiểm tra Origin của yêu cầu. Một trang web bất kỳ không thể âm thầm kết nối đến terminal cục bộ đang mở',
          ],
          bullets: [
            'Đầu ra terminal và phím bấm không gửi đến dịch vụ tài khoản',
            'Tệp và thông tin xác thực CLI ở lại trên máy',
            'Kết nối từ xa dùng cấu hình SSH của bạn, không qua trung gian truyền terminal',
          ],
        },
        {
          title: 'Dịch vụ tài khoản làm gì',
          body: [
            'Dịch vụ tài khoản cấp quyền thiết bị, quản lý tư cách thành viên và khóa API, không truyền dữ liệu terminal. Thu hồi thiết bị chỉ gỡ quyền tài khoản, không dừng các tác vụ tmux đang chạy trên máy đó',
          ],
        },
      ],
    },
    remoteHosts: {
      eyebrow: 'Máy chủ từ xa',
      title: 'Dùng các máy SSH hiện có trong cùng không gian làm việc',
      description:
        'Xem tác vụ tmux trên máy chủ từ xa bằng cấu hình SSH hiện có, không cần dịch vụ trung gian hay tài khoản terminal thứ hai',
      summary: 'Cài tmux trên máy chủ từ xa. AI Anywhere dùng cấu hình SSH hiện có và nhóm máy đó cạnh máy cục bộ',
      sections: [
        {
          title: 'Máy chủ từ xa cần gì',
          body: [
            'Máy từ xa chỉ cần tmux. Tiếp tục dùng khóa SSH, bí danh, máy trung chuyển và xác minh máy chủ đã cấu hình trên máy của bạn',
          ],
          command: 'tmux new -s main',
        },
        {
          title: 'Phiên làm việc ở lại máy từ xa',
          body: [
            'Lệnh và tiến trình tác tử chạy trong tmux trên máy chủ từ xa. AI Anywhere không sao chép phiên vào tmux.online hay truyền terminal qua dịch vụ trung gian bên ngoài',
          ],
        },
        {
          title: 'Kết nối lại mà không mất công việc',
          body: ['Mất kết nối trình duyệt hoặc SSH không dừng tmux. Khi máy chủ truy cập được trở lại, mở cùng tác vụ để tiếp tục'],
        },
      ],
    },
    install: {
      eyebrow: 'Cài đặt',
      title: 'Cài AI Anywhere trên macOS hoặc Linux',
      description: 'Cài AI Anywhere CLI, khởi động giao diện web tmux cục bộ và cấp quyền cho máy qua trình duyệt',
      summary: 'Trình cài đặt kiểm tra tmux và Node.js, cài @ai-anywhere/cli từ npm và cấu hình dịch vụ tự chạy lại sau khi khởi động máy',
      sections: [
        {
          title: 'Chạy trình cài đặt',
          body: ['Dùng curl hoặc xem script tại tmux.online/install.sh trước khi chạy. Cần tmux và Node.js 22.5 trở lên'],
          command: 'curl -fsSL https://tmux.online/install.sh | sh',
        },
        {
          title: 'Cấp quyền cho máy này',
          body: [
            'Trình cài đặt khởi động AI Anywhere và mở hoặc hiển thị URL cục bộ. Nếu máy chưa được cấp quyền, hãy đăng nhập và hoàn tất quy trình cấp quyền thiết bị',
          ],
          command: 'ai-anywhere login',
        },
        {
          title: 'Khởi động lại sau này',
          body: [
            'Dịch vụ dùng launchd trên macOS hoặc dịch vụ người dùng systemd trên Linux. Bạn cũng có thể khởi động trực tiếp; WebUI cục bộ mặc định dùng 127.0.0.1:51984',
          ],
          command: 'ai-anywhere up',
        },
        {
          title: 'Nâng cấp lên phiên bản mới nhất',
          body: [
            'Khi có phiên bản mới, ai-anywhere up đề nghị cài đặt tối đa một lần mỗi ngày. Đồng ý để nâng cấp tại chỗ rồi khởi động lại theo hướng dẫn',
            'Để nâng cấp thủ công bất cứ lúc nào, chạy lại trình cài đặt. CLI được thay thế nhưng dữ liệu, các phiên tmux đang chạy và quyền thiết bị đều được giữ lại',
          ],
          bullets: [
            'tmux giữ các phiên trong khi nâng cấp; dịch vụ kết nối lại với chúng ở lần khởi động sau',
            'Xem thay đổi của từng phiên bản tại tmux.online/changelog',
          ],
          command: 'curl -fsSL https://tmux.online/install.sh | sh',
        },
      ],
    },
  },
}
