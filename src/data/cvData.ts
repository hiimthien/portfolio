export interface SkillItem {
  name: string;
  context?: { en: string; vi: string };
  description: { en: string; vi: string };
}

export interface SkillCategory {
  title: { en: string; vi: string };
  icon: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: { en: string; vi: string };
  period: string;
  location: string;
  type: { en: string; vi: string };
  isPrimary?: boolean;
  summary: { en: string; vi: string };
  points: { en: string[]; vi: string[] };
  technologies: string[];
}

export interface ProjectHighlight {
  title: { en: string; vi: string };
  detail: { en: string; vi: string };
}

export interface ProjectItem {
  id: string;
  name: string;
  category: { en: string; vi: string };
  tagline: { en: string; vi: string };
  description: { en: string; vi: string };
  githubUrl: string;
  technologies: string[];
  highlights: ProjectHighlight[];
}

export const cvData = {
  personal: {
    name: "Cao Lương Thiện",
    role: {
      en: "Junior PHP / Backend Developer",
      vi: "Lập trình viên PHP / Backend Developer",
    },
    subRole: "PHP 8.3 · CodeIgniter 4 · Laravel 11 · Vue 3 · Redis · MySQL",
    location: "Thu Duc City, Ho Chi Minh City, Vietnam",
    phone: "(+84) 388 145 796",
    email: "thiencao.work@gmail.com",
    github: "hiimthien",
    githubUrl: "https://github.com/hiimthien",
    pdfResumeUrl: "/CV_Cao_Luong_Thien_PHP_Developer.pdf",
    bio: {
      en: "Junior PHP Developer with 1 year of experience building e-commerce systems with third-party integrations (11 fulfillment providers, TikTok Shop) using CodeIgniter 4, Redis and MySQL. Strong in asynchronous processing, secure webhook handling and query optimization. Self-taught Laravel through two personal projects covering concurrency control, payments and real-time features. Seeking a Backend PHP / Laravel role.",
      vi: "Lập trình viên PHP với 1 năm kinh nghiệm xây dựng hệ thống thương mại điện tử tích hợp đối tác thứ ba (11 đơn vị fulfillment, TikTok Shop) bằng CodeIgniter 4, Redis và MySQL. Thế mạnh về xử lý bất đồng bộ, webhook bảo mật và tối ưu hóa truy vấn cơ sở dữ liệu. Tự học và làm chủ Laravel qua 2 dự án cá nhân chuyên sâu về kiểm soát đồng thời (concurrency), thanh toán trực tuyến và tính năng thời gian thực. Định hướng tìm kiếm vị trí Backend PHP / Laravel.",
    },
  },

  education: {
    institution: {
      en: "Nha Trang University",
      vi: "Đại học Nha Trang",
    },
    degree: {
      en: "Associate Degree in Information Technology",
      vi: "Cao đẳng Công nghệ Thông tin",
    },
    period: "Sep 2019 – Sep 2022",
    gpa: "3.4 / 4.0",
  },

  skills: {
    languages: "PHP, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3",
    backend: "CodeIgniter 4 (production), Laravel 11 (personal projects), RESTful APIs, Webhook Processing, Redis Queues",
    frontend: "Vue.js 3 (Composition API), Pinia, Vue Router, Tailwind CSS, Bootstrap",
    databasesAndCaching: "MySQL (Query Optimization, Composite Indexing, Transactions), Redis (Caching, Queue, Distributed Locks)",
    toolsAndIntegrations: "TikTok Shop API, VNPay, Google OAuth, Telegram Bot API, MinIO, PHPUnit, Vitest, Git, Docker, Postman, Vite",
  },

  experiences: [
    {
      company: "TTR Group",
      role: {
        en: "Junior PHP / Full-Stack Developer",
        vi: "Lập trình viên PHP / Full-Stack",
      },
      period: "Sep 2025 – Present",
      location: "Thu Duc City, Ho Chi Minh City, Vietnam",
      type: { en: "Professional Experience", vi: "Kinh nghiệm thực tế" },
      isPrimary: true,
      summary: {
        en: "Project: E-commerce Management Platform — Developing and maintaining backend services and internal management interfaces for an enterprise e-commerce platform.",
        vi: "Dự án: E-commerce Management Platform — Phát triển và bảo trì các dịch vụ backend và giao diện quản trị nội bộ cho nền tảng thương mại điện tử.",
      },
      points: {
        en: [
          "Integrated 11 print-on-demand fulfillment providers using Strategy and Factory patterns, normalizing different third-party APIs behind one interface; adding a provider only requires a new adapter class. Automated order routing and shipment tracking sync.",
          "Moved heavy tasks (catalog mapping, variant sync, batch price updates) to Redis queue workers with automatic retry on failed payloads, keeping the UI responsive and avoiding request timeouts.",
          "Built TikTok Shop webhook pipelines with HMAC signature validation, event routing (order, product, return/refund) and deduplication to prevent duplicate processing on redelivered events.",
          "Removed N+1 queries, added composite indexes on high-traffic tables and introduced Redis caching to reduce database load.",
          "Delivered the Return/Refund Ticket module end to end: multi-status approval workflow in CodeIgniter 4 and a reactive management UI in Vue 3 (Pinia).",
          "Integrated AI content and image services with MinIO object storage, implementing MIME validation, thumbnail generation, WEBP conversion and memory cleanup.",
          "Integrated Telegram Bot API for real-time order and system alerts, using isolated error handling so external API failures do not affect core transaction flows.",
        ],
        vi: [
          "Tích hợp 11 đơn vị fulfillment (print-on-demand) áp dụng Strategy và Factory patterns, chuẩn hóa các API bên ngoài về chung một interface; thêm đối tác mới chỉ cần tạo adapter class. Tự động định tuyến đơn hàng và đồng bộ theo dõi vận chuyển.",
          "Chuyển các tác vụ nặng (ánh xạ danh mục, đồng bộ biến thể, cập nhật giá hàng loạt) sang Redis queue workers với cơ chế tự động thử lại khi lỗi, giữ giao diện phản hồi nhanh và tránh timeout request.",
          "Xây dựng pipeline tiếp nhận webhook TikTok Shop với xác thực chữ ký HMAC, định tuyến sự kiện (đơn hàng, sản phẩm, đổi/trả) và chống trùng lặp dữ liệu khi webhook gửi lại.",
          "Loại bỏ triệt để N+1 queries, thêm chỉ mục composite trên các bảng lưu lượng cao và áp dụng Redis caching để giảm tải cơ sở dữ liệu.",
          "Xây dựng trọn vẹn module Khiếu nại - Đổi/Trả hàng (Return/Refund Ticket): quy trình phê duyệt đa trạng thái trên CodeIgniter 4 và giao diện theo dõi phản ứng nhanh bằng Vue 3 (Pinia).",
          "Tích hợp dịch vụ nội dung và hình ảnh AI với kho lưu trữ đối tượng MinIO: kiểm tra MIME type, sinh thumbnail tự động, chuyển đổi WebP và giải phóng bộ nhớ.",
          "Tích hợp Telegram Bot API cảnh báo đơn hàng và lỗi hệ thống theo thời gian thực, có cơ chế cách ly lỗi độc lập để sự cố API ngoài không ảnh hưởng đến luồng giao dịch chính.",
        ],
      },
      technologies: ["PHP", "CodeIgniter 4", "Vue 3", "Pinia", "MySQL", "Redis", "MinIO", "TikTok Shop API", "Telegram Bot API"],
    },
    {
      company: "Mandatory Military Service",
      role: {
        en: "Active Duty Service Member",
        vi: "Hạ sĩ quan / Chiến sĩ thực hiện nghĩa vụ quân sự",
      },
      period: "Feb 2023 – Jan 2025",
      location: "Vietnam",
      type: { en: "National Service", vi: "Nghĩa vụ Quốc gia" },
      isPrimary: false,
      summary: {
        en: "Completed 2-year mandatory active national military service obligation with disciplined teamwork and operational compliance.",
        vi: "Hoàn thành 2 năm nghĩa vụ quân sự theo luật định với tinh thần kỷ luật cao và khả năng phối hợp đồng đội chuẩn mực.",
      },
      points: {
        en: [
          "Fulfilled full-term active military service obligation with strict discipline, resilience, and adaptability.",
          "Maintained operational readiness and demonstrated high accountability in team assignments.",
        ],
        vi: [
          "Hoàn thành toàn diện thời gian phục vụ tại ngũ 2 năm với tính kỷ luật nghiêm túc, kiên trì và tác phong chuẩn mực.",
          "Rèn luyện ý thức trách nhiệm cao, tinh thần tập thể và khả năng thích ứng linh hoạt trong mọi hoàn cảnh.",
        ],
      },
      technologies: ["Discipline", "Teamwork", "Problem Solving"],
    },
    {
      company: "TMA Solutions",
      role: {
        en: "Software Engineering Trainee (TMA Foundation Training)",
        vi: "Thực tập sinh Kỹ sư phần mềm (TMA Foundation Training)",
      },
      period: "Nov 2022 – Dec 2022",
      location: "Quy Nhon City, Vietnam",
      type: { en: "Foundation Training", vi: "Đào tạo nền tảng" },
      isPrimary: false,
      summary: {
        en: "Company training and probation program covering web backend fundamentals and professional software workflows.",
        vi: "Chương trình đào tạo nền tảng và thử việc của công ty về kiến trúc web backend và quy trình phát triển chuyên nghiệp.",
      },
      points: {
        en: [
          "Built RESTful backend services and learned core web application patterns.",
          "Worked in an Agile/Scrum team using Git workflows and code reviews.",
        ],
        vi: [
          "Thực hành xây dựng dịch vụ backend RESTful và tiếp cận các quy chuẩn thiết kế ứng dụng web cốt lõi.",
          "Làm việc nhóm theo quy trình Agile/Scrum, tuân thủ các quy tắc Git workflow và code review.",
        ],
      },
      technologies: ["PHP", "RESTful APIs", "Git", "Agile / Scrum"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "cinereserve",
      name: "CineReserve",
      category: {
        en: "Real-time Cinema Ticket Booking System",
        vi: "Hệ thống đặt vé xem phim trực tuyến thời gian thực",
      },
      tagline: {
        en: "Real-time Cinema Ticket Booking System solving High-Concurrency Race Conditions",
        vi: "Hệ thống đặt vé xem phim trực tuyến giải quyết bài toán Race Condition khi mở bán cao điểm",
      },
      description: {
        en: "A personal project solving concurrent seat selection race conditions during high-volume traffic. Combines Redis distributed locks (SET NX EX) with MySQL pessimistic locking (SELECT FOR UPDATE) inside transactions, paired with Laravel Reverb WebSockets broadcasting.",
        vi: "Dự án cá nhân giải quyết bài toán Race Condition khi nhiều người cùng chọn một ghế. Kết hợp khóa phân tán Redis (SET NX EX 10 phút) với khóa bi quan MySQL (SELECT FOR UPDATE) trong transaction, phát sóng WebSocket qua Laravel Reverb.",
      },
      githubUrl: "https://github.com/hiimthien/cinereserve",
      technologies: [
        "PHP 8.3",
        "Laravel 11",
        "Vue 3 (TypeScript)",
        "Redis",
        "Laravel Reverb",
        "MySQL 8.0",
        "Docker Compose",
      ],
      highlights: [
        {
          title: {
            en: "Two-Phase Distributed Locking Strategy",
            vi: "Chiến lược khóa hai pha (Two-Phase Locking)",
          },
          detail: {
            en: "Prevented double-booking under concurrent seat reservations by combining Redis distributed locks (SET NX EX) with MySQL pessimistic locking (SELECT FOR UPDATE) inside transactions.",
            vi: "Ngăn chặn hoàn toàn đặt trùng vé khi mở bán cao điểm bằng cách kết hợp Redis distributed locks (SET NX EX) với MySQL pessimistic locking (SELECT FOR UPDATE) bên trong transaction.",
          },
        },
        {
          title: {
            en: "Live Seat Availability Broadcasting",
            vi: "Phát sóng trạng thái ghế theo thời gian thực",
          },
          detail: {
            en: "Broadcast live seat availability to all clients with Laravel Reverb (WebSockets) and a reactive seat map built in Vue 3 + Pinia.",
            vi: "Phát sóng trạng thái ghế theo thời gian thực đến toàn bộ người dùng bằng Laravel Reverb (WebSockets) và sơ đồ ghế phản ứng nhanh viết bằng Vue 3 + Pinia.",
          },
        },
        {
          title: {
            en: "Idempotent Webhooks & QR Ticket Check-In",
            vi: "Webhook thanh toán idempotent & Soát vé mã QR",
          },
          detail: {
            en: "Implemented idempotent payment webhooks, QR-based ticket check-in and automatic reservation expiration.",
            vi: "Xử lý webhook thanh toán idempotent, quét mã QR soát vé tại rạp và cơ chế tự động giải phóng ghế khi hết thời gian giữ chỗ.",
          },
        },
      ],
    },
    {
      id: "techshop",
      name: "TechShop",
      category: {
        en: "Full-Stack Retail Tech E-Commerce & CMS",
        vi: "Thương mại điện tử thiết bị công nghệ & Hệ thống quản trị",
      },
      tagline: {
        en: "Full-Stack Retail Tech E-Commerce & Administrative Operations Hub",
        vi: "Hệ thống thương mại điện tử thiết bị công nghệ & trung tâm quản trị vận hành",
      },
      description: {
        en: "A personal project building a full retail e-commerce flow from storefront to admin dashboard. Features clean Service-Repository pattern, atomic inventory decrements, VNPay payment reconciliation, and real-time events.",
        vi: "Dự án cá nhân xây dựng quy trình thương mại điện tử hoàn chỉnh từ storefront đến admin dashboard. Cấu trúc Service-Repository pattern, trừ tồn kho nguyên tử, đối soát VNPay và sự kiện thời gian thực.",
      },
      githubUrl: "https://github.com/hiimthien/TechShop",
      technologies: [
        "PHP 8.3",
        "Laravel 11 (Sanctum, Reverb, Socialite)",
        "MySQL",
        "Vue 3",
        "TypeScript",
        "Pinia",
        "Tailwind CSS v4",
        "Vite",
      ],
      highlights: [
        {
          title: {
            en: "Service-Repository & Unified JSON Resources",
            vi: "Kiến trúc Service-Repository & Chuẩn hóa API",
          },
          detail: {
            en: "Structured the backend with a Service-Repository pattern, thin REST controllers, Form Request validation and unified JSON Resources.",
            vi: "Cấu trúc backend chuẩn Service-Repository pattern, thin REST controllers, Form Request validation và chuẩn hóa API Resource.",
          },
        },
        {
          title: {
            en: "Atomic Inventory Decrement & VNPay IPN Handler",
            vi: "Khóa tồn kho nguyên tử & Đối soát cổng VNPay",
          },
          detail: {
            en: "Built the checkout pipeline with atomic inventory decrement (anti-overselling), coupon calculation and a secure VNPay IPN handler (SHA512 checksum).",
            vi: "Xây dựng pipeline checkout trừ tồn kho nguyên tử (atomic decrement chống bán vượt), tính toán mã giảm giá và bộ xử lý webhook VNPay IPN bảo mật (HMAC-SHA512 checksum).",
          },
        },
        {
          title: {
            en: "Google OAuth, Real-time Events & Automated Testing",
            vi: "Google OAuth, Sự kiện thời gian thực & Kiểm thử tự động",
          },
          detail: {
            en: "Added Google OAuth 2.0 login, real-time events via Laravel Reverb/Echo, an admin analytics dashboard and automated tests with PHPUnit and Vitest.",
            vi: "Tích hợp đăng nhập Google OAuth 2.0, sự kiện thời gian thực qua Laravel Reverb/Echo, dashboard quản trị phân tích doanh thu và kiểm thử tự động với PHPUnit & Vitest.",
          },
        },
      ],
    },
  ],
};
