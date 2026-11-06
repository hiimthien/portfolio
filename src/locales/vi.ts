export const vi = {
  nav: {
    name: 'Cao Lương Thiện',
  },
  hero: {
    name: 'Cao Lương Thiện',
    role: 'Junior Backend Developer (PHP) · TP. Hồ Chí Minh',
    bio: 'Mình là Thiện, lập trình viên PHP với hơn 1 năm kinh nghiệm. Hiện mình làm backend (CodeIgniter 4) và giao diện Vue 3 tại TTR Group. Ngoài giờ làm, mình làm các dự án riêng bằng Laravel để học thêm. Mình đang tìm một môi trường để làm việc cùng team và học nhanh hơn.',
    downloadCv: 'Tải CV (PDF)',
  },
  experience: {
    title: 'Kinh nghiệm',
    projectLabel: 'Dự án:',
    roleLabel: 'Vị trí:',
    stackLabel: 'Stack:',
    ttr: {
      company: 'TTR Group',
      role: 'Junior PHP / Full-Stack Developer',
      period: '09/2025 – Hiện tại, TP. Hồ Chí Minh',
      project: 'E-commerce Management Platform',
      bullets: [
        'Tích hợp 11 đơn vị fulfillment (print-on-demand) áp dụng Strategy và Factory patterns, chuẩn hóa các API bên ngoài về chung một interface; thêm đối tác mới chỉ cần tạo adapter class. Tự động định tuyến đơn hàng và đồng bộ theo dõi vận chuyển.',
        'Chuyển các tác vụ nặng (ánh xạ danh mục, đồng bộ biến thể, cập nhật giá hàng loạt) sang Redis queue workers với cơ chế tự động thử lại khi lỗi, giữ giao diện phản hồi nhanh và tránh timeout request.',
        'Xây dựng pipeline tiếp nhận webhook TikTok Shop với xác thực chữ ký HMAC, định tuyến sự kiện (đơn hàng, sản phẩm, đổi/trả) và chống trùng lặp dữ liệu khi webhook gửi lại.',
        'Loại bỏ triệt để N+1 queries, thêm chỉ mục composite trên các bảng lưu lượng cao và áp dụng Redis caching để giảm tải cơ sở dữ liệu.',
        'Xây dựng trọn vẹn module Khiếu nại - Đổi/Trả hàng (Return/Refund Ticket): quy trình phê duyệt đa trạng thái trên CodeIgniter 4 và giao diện theo dõi phản ứng nhanh bằng Vue 3 (Pinia).',
        'Tích hợp dịch vụ nội dung và hình ảnh AI với kho lưu trữ đối tượng MinIO: kiểm tra MIME type, sinh thumbnail tự động, chuyển đổi WebP và giải phóng bộ nhớ.',
        'Tích hợp Telegram Bot API cảnh báo đơn hàng và lỗi hệ thống theo thời gian thực, có cơ chế cách ly lỗi độc lập để sự cố API ngoài không ảnh hưởng đến luồng giao dịch chính.',
      ],
      stack: 'PHP, CodeIgniter 4, Vue 3, Pinia, MySQL, Redis, MinIO, TikTok Shop API',
    },
    military: {
      title: 'Nghĩa vụ Quân sự Bắt buộc',
      period: '02/2023 – 01/2025',
      desc: 'Hoàn thành thời gian thực hiện nghĩa vụ quân sự 2 năm theo quy định.',
    },
    tma: {
      title: 'TMA Solutions (TMA Foundation Training)',
      period: '11/2022 – 12/2022, Quy Nhơn',
      role: 'Thực tập sinh Kỹ sư phần mềm | Chương trình đào tạo và thử việc',
      bullets: [
        'Thực hành xây dựng dịch vụ backend RESTful và tiếp cận các quy chuẩn thiết kế ứng dụng web cốt lõi.',
        'Làm việc nhóm theo quy trình Agile/Scrum, tuân thủ các quy tắc Git workflow và code review.',
      ],
      stack: 'PHP, RESTful APIs, Git, Agile / Scrum',
    },
  },
  projects: {
    title: 'Dự án',
    problemLabel: 'Vấn đề:',
    solutionLabel: 'Cách mình làm:',
    learnedLabel: 'Mình học được:',
    stackLabel: 'Stack:',
    cinereserve: {
      title: 'CineReserve: web đặt vé xem phim',
      summary: 'Dự án cá nhân để tập giải bài toán nhiều người cùng chọn một ghế.',
      problem: 'Hai người có thể bấm chọn cùng một ghế gần như cùng lúc, dẫn đến trùng vé.',
      bullets: [
        'Khi chọn ghế, dùng Redis lock (<code class="bg-stone-100 px-1 py-0.5 rounded text-stone-800">SET NX</code>, giữ 10 phút) để người bấm sau bị chặn ngay.',
        'Dùng Laravel Reverb (WebSocket) để các máy đang xem cùng suất chiếu thấy ghế đổi trạng thái.',
        'Lúc thanh toán, kiểm tra lại trong transaction với <code class="bg-stone-100 px-1 py-0.5 rounded text-stone-800">SELECT ... FOR UPDATE</code>.',
        'Callback thanh toán (mô phỏng VNPAY/MoMo) được xử lý để không tạo vé trùng.',
        'Ngoài ra có trang admin (thống kê, tạo suất chiếu) và trang quét vé QR cho nhân viên.',
      ],
      learned: 'Hiểu sâu bản chất xử lý Race Condition khi mở bán vé cao điểm: phối hợp khóa phân tán trên RAM (Redis SET NX) để phản hồi tức thì với kiểm tra bi quan (SELECT ... FOR UPDATE trong Transaction) ở database nhằm chặn triệt để đặt trùng vé mà không làm nghẽn hệ thống.',
      stack: 'PHP 8.3, Laravel 11, Vue 3 (TypeScript), Redis, Laravel Reverb, MySQL 8.0, Docker Compose',
      slides: [
        {
          label: 'Sơ đồ ghế & Khóa Redis',
          desc: 'Sơ đồ chọn ghế thời gian thực giải quyết Race Condition bằng Redis Lock (SET NX 10 phút), chống chọn trùng ghế và phát sóng WebSocket qua Laravel Reverb.',
        },
        {
          label: 'Trang chủ điện ảnh',
          desc: 'Giao diện rạp phim Dark mode điện ảnh, đồng bộ tự động danh mục phim bom tấn chiếu rạp qua TMDb API.',
        },
        {
          label: 'Chi tiết phim & Lịch chiếu',
          desc: 'Thông tin phim, phân loại độ tuổi, xem trailer trực tiếp và bộ lọc lịch chiếu 7 ngày theo cụm rạp toàn quốc.',
        },
        {
          label: 'Phim đang chiếu',
          desc: 'Bộ lọc thể loại phim (Hành động, Hoạt hình, Kinh dị), điểm đánh giá TMDb và nút đặt vé nhanh.',
        },
      ],
    },
    techshop: {
      title: 'TechShop: web bán đồ công nghệ',
      summary: 'Dự án cá nhân để tập làm một web bán hàng đầy đủ từ giao diện đến trang quản trị.',
      bullets: [
        'Tích hợp cổng thanh toán trực tuyến VNPay Sandbox (HMAC-SHA512) với cơ chế đối soát Idempotent qua Webhook IPN và Return URL, hỗ trợ thanh toán lại trực tiếp.',
        '52 sản phẩm công nghệ (95 biến thể) sử dụng 100% ảnh studio độ phân giải cao lưu trữ local, chuyển đổi bộ lọc danh mục sang URL Slug thân thiện SEO.',
        'Sản phẩm đa biến thể (màu sắc, cấu hình), giỏ hàng phản ứng nhanh Pinia, áp dụng mã giảm giá và đăng nhập an toàn Google OAuth.',
        'Cơ chế Atomic Lock và Database Transaction khi checkout, triệt tiêu race condition chống bán vượt tồn kho (overselling).',
        'Hệ thống quản trị (Admin CMS): Phân tích doanh thu theo kỳ, quản lý vòng đời đơn hàng, tra cứu serial/IMEI và bảo hành điện tử.',
        'Kiểm thử toàn diện với 21 test PHPUnit Feature cho Backend và 4 test Vitest cho Frontend (100% Passed).',
      ],
      learned: 'Làm chủ trọn vẹn tích hợp cổng thanh toán trực tuyến bảo mật (HMAC-SHA512, chuẩn hóa múi giờ và Webhook IPN Idempotent); đồng thời xây dựng kiến trúc E-Commerce khép kín từ sản phẩm đa biến thể, khóa tồn kho nguyên tử chống bán vượt (overselling) đến trang quản trị vận hành.',
      stack: 'PHP 8.3, Laravel 11 (Sanctum, Reverb, Socialite), MySQL, Vue 3, TypeScript, Pinia, Tailwind CSS v4, Vite',
      slides: [
        {
          label: 'Trang chủ bán lẻ',
          desc: 'Giao diện bán lẻ công nghệ hiện đại với banner động, bộ danh mục sản phẩm và ưu đãi Flash Sale.',
        },
        {
          label: 'Chi tiết sản phẩm & Biến thể',
          desc: 'Chọn biến thể đa thuộc tính (switch bàn phím, màu nhôm, LED RGB) đồng bộ tồn kho thực và thông số.',
        },
        {
          label: 'Admin Dashboard',
          desc: 'Bảng điều khiển quản trị: phân tích doanh thu theo kỳ, thống kê tiến trình vận đơn và chỉ số khách hàng.',
        },
        {
          label: 'Quản lý 101 đơn hàng',
          desc: 'Hệ thống quản lý 101 đơn hàng, theo dõi trạng thái thanh toán VNPay và phân luồng đóng gói vận chuyển.',
        },
        {
          label: 'Thanh toán VNPay',
          desc: 'Màn hình đối soát thanh toán trực tuyến VNPay Sandbox (HMAC-SHA512) và xử lý hoàn tất đơn hàng.',
        },
      ],
    },
  },
  skills: {
    title: 'Kỹ năng chuyên môn',
    languagesLabel: 'Ngôn ngữ lập trình:',
    languages: 'PHP, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3',
    backendLabel: 'Backend:',
    backend: 'CodeIgniter 4 (production), Laravel 11 (personal projects), RESTful APIs, Webhook Processing, Redis Queues',
    frontendLabel: 'Frontend:',
    frontend: 'Vue.js 3 (Composition API), Pinia, Vue Router, Tailwind CSS, Bootstrap',
    dbLabel: 'Cơ sở dữ liệu & Caching:',
    db: 'MySQL (Query Optimization, Composite Indexing, Transactions), Redis (Caching, Queue, Distributed Locks)',
    toolsLabel: 'Tích hợp & Công cụ:',
    tools: 'TikTok Shop API, VNPay, Google OAuth, Telegram Bot API, MinIO, PHPUnit, Vitest, Git, Docker, Postman, Vite',
  },
  education: {
    title: 'Học vấn',
    degree: 'Cao đẳng Công nghệ Thông tin · Đại học Nha Trang',
    period: '(09/2019 – 09/2022)',
    gpa: 'GPA: 3.4 / 4.0',
  },
  contact: {
    title: 'Liên hệ',
    desc: 'Bạn có thể liên hệ mình qua email hoặc GitHub.',
  },
  footer: {
    copyright: 'Cao Lương Thiện',
    backToTop: 'Về đầu trang ↑',
  },
};

export type LocaleSchema = typeof vi;
