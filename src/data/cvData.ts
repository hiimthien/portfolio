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

export const cvData = {
  personal: {
    name: "Cao Lương Thiện",
    role: {
      en: "Junior Laravel / PHP Developer",
      vi: "Lập trình viên Laravel / PHP Junior",
    },
    subRole: "Laravel 11 · CodeIgniter 4 · Vue 3",
    location: "Thu Duc City, Ho Chi Minh City, Vietnam",
    phone: "(+84) 388 145 796",
    email: "thiencao.work@gmail.com",
    github: "hiimthien",
    githubUrl: "https://github.com/hiimthien",
    pdfResumeUrl: "/CV_Cao_Luong_Thien_PHP_Developer.pdf",
    bio: {
      en: "Junior Laravel Developer with 1+ year of production experience developing and maintaining e-commerce management backends using PHP and CodeIgniter 4. Actively targeting Laravel roles by applying modern Laravel 11 architecture, Redis-backed queues and atomic locks, and WebSockets in personal full-stack projects.",
      vi: "Lập trình viên Laravel Junior với hơn 1 năm kinh nghiệm thực tế phát triển và bảo trì hệ thống quản lý thương mại điện tử bằng PHP và CodeIgniter 4. Đang chủ động hướng tới các vị trí Laravel Developer thông qua việc áp dụng kiến trúc Laravel 11, hàng đợi/khóa tạm thời với Redis và WebSockets trong dự án cá nhân.",
    },
  },

  skillCategories: [
    {
      title: {
        en: "Backend Development",
        vi: "Phát triển Backend",
      },
      icon: "Server",
      items: [
        {
          name: "Laravel 11",
          context: {
            en: "Personal Project · CineReserve",
            vi: "Dự án cá nhân · CineReserve",
          },
          description: {
            en: "Service-Repository pattern, Form Request validations, API Resources, and Eloquent ORM in personal project development.",
            vi: "Service-Repository pattern, Form Request validation, API Resource và Eloquent ORM trong dự án cá nhân.",
          },
        },
        {
          name: "PHP 8.x & CodeIgniter 4",
          context: {
            en: "Production · TTR Group",
            vi: "Production · TTR Group",
          },
          description: {
            en: "Core production backend stack at TTR Group: RESTful APIs, controllers, custom filters, and clean service layers.",
            vi: "Nền tảng backend chính tại TTR Group: thiết kế RESTful API, controller, custom filter và cấu trúc service rõ ràng.",
          },
        },
        {
          name: "Webhook & API Integrations",
          context: {
            en: "Production · TTR Group",
            vi: "Production · TTR Group",
          },
          description: {
            en: "Signature verification (HMAC), event routing, deduplication, and third-party logistics synchronization.",
            vi: "Xác thực chữ ký HMAC, định tuyến sự kiện, xử lý chống trùng lặp dữ liệu và đồng bộ vận chuyển.",
          },
        },
        {
          name: "Design Patterns",
          context: {
            en: "Production · TTR Group",
            vi: "Production · TTR Group",
          },
          description: {
            en: "Factory and Strategy patterns for modular order fulfillment and pluggable provider integrations.",
            vi: "Factory và Strategy pattern cho quy trình đồng bộ đơn hàng và bóc tách luồng tích hợp linh hoạt.",
          },
        },
      ],
    },
    {
      title: {
        en: "Database & Background Processing",
        vi: "Cơ sở dữ liệu & Xử lý nền",
      },
      icon: "Database",
      items: [
        {
          name: "MySQL 8.0",
          description: {
            en: "Schema design, composite indexing, slow query analysis, and eliminating N+1 query bottlenecks.",
            vi: "Thiết kế schema, đánh composite index, phân tích slow query và triệt tiêu lỗi N+1 truy vấn.",
          },
        },
        {
          name: "Redis Caching",
          description: {
            en: "High-performance key-value caching layers to reduce database read load on frequently accessed data.",
            vi: "Bộ nhớ đệm key-value hiệu năng cao giúp giảm tải truy vấn đọc trực tiếp vào cơ sở dữ liệu.",
          },
        },
        {
          name: "Redis Queue Workers",
          description: {
            en: "Background job processing for bulk product mapping, variant synchronization, and automated retry logic.",
            vi: "Xử lý hàng đợi nền cho đồng bộ biến thể sản phẩm, cập nhật batch và cơ chế retry tự động.",
          },
        },
        {
          name: "Transactions & Locking",
          description: {
            en: "Database transactions (`DB::transaction`) and atomic temporary holding keys (`Cache::add`) for reservation flows.",
            vi: "Database transaction (`DB::transaction`) và khóa tạm thời nguyên tử (`Cache::add`) cho luồng giữ chỗ.",
          },
        },
      ],
    },
    {
      title: {
        en: "Frontend Development",
        vi: "Phát triển Frontend",
      },
      icon: "Layout",
      items: [
        {
          name: "Vue.js 3 & Composition API",
          description: {
            en: "Responsive single-page applications and management interfaces built with `<script setup>` and composables.",
            vi: "Xây dựng ứng dụng SPA và giao diện quản trị phản hồi nhanh với `<script setup>` và composables.",
          },
        },
        {
          name: "Pinia & Vue Router",
          description: {
            en: "Centralized client-side state stores, modular architecture, dynamic routing, and navigation guards.",
            vi: "Quản lý state tập trung với Pinia modular store, điều hướng định tuyến động và navigation guard.",
          },
        },
        {
          name: "TypeScript & JavaScript (ES6+)",
          description: {
            en: "Type-safe interfaces, handling asynchronous API flows (async/await), and modern DOM interactions.",
            vi: "Type-safe interface, xử lý luồng API bất đồng bộ (async/await) và tương tác DOM hiện đại.",
          },
        },
        {
          name: "Tailwind CSS",
          description: {
            en: "Utility-first responsive layouts, consistent spacing systems, and custom UI components.",
            vi: "Layout responsive utility-first, hệ thống khoảng cách nhất quán và tùy biến component mượt mà.",
          },
        },
      ],
    },
    {
      title: {
        en: "Tools & Integrations",
        vi: "Công cụ & Tích hợp",
      },
      icon: "Wrench",
      items: [
        {
          name: "TikTok Shop API",
          description: {
            en: "Synchronizing marketplace orders, product catalogs, and handling webhook event callbacks.",
            vi: "Đồng bộ đơn hàng, danh mục sản phẩm và tiếp nhận callback sự kiện từ webhook TikTok Shop.",
          },
        },
        {
          name: "MinIO & Media Pipelines",
          description: {
            en: "S3-compatible object storage, MIME validation, automated thumbnail generation, and WebP conversion.",
            vi: "Lưu trữ đối tượng chuẩn S3, kiểm tra MIME type, tự động sinh thumbnail và nén ảnh WebP.",
          },
        },
        {
          name: "Telegram Bot API",
          description: {
            en: "Real-time order and operational alert notifications with isolated exception handling.",
            vi: "Gửi thông báo đơn hàng và cảnh báo lỗi vận hành tức thì với cơ chế bọc lỗi cách ly luồng chính.",
          },
        },
        {
          name: "Docker Compose, Git & Postman",
          description: {
            en: "Containerized local environments (PHP, MySQL, Redis, Nginx), Git version control, and API contract testing.",
            vi: "Môi trường cục bộ qua Docker Compose (PHP, MySQL, Redis, Nginx), luồng Git chuẩn và kiểm thử API với Postman.",
          },
        },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      company: "TTR Group",
      role: {
        en: "Junior PHP / Full-Stack Developer",
        vi: "Lập trình viên PHP / Full-Stack",
      },
      period: "Sep 2025 – Present",
      location: "Thu Duc City, Ho Chi Minh City",
      type: { en: "Professional Experience", vi: "Kinh nghiệm thực tế" },
      isPrimary: true,
      summary: {
        en: "Developing and maintaining backend services and internal management interfaces for an enterprise e-commerce platform.",
        vi: "Phát triển và bảo trì các dịch vụ backend và giao diện quản trị nội bộ cho nền tảng thương mại điện tử doanh nghiệp.",
      },
      points: {
        en: [
          "Developed and maintained backend services and RESTful APIs using PHP (CodeIgniter 4) alongside responsive internal admin interfaces in Vue.js 3.",
          "Implemented TikTok Shop webhook processing with cryptographic signature verification, event routing, and deduplication logic; applied Factory and Strategy patterns for external fulfillment integrations.",
          "Engineered Redis background queue workers to handle bulk product mapping, variant updates, and automated retries for large payloads.",
          "Delivered the end-to-end Return/Refund Ticket module with multi-step business eligibility checks in CodeIgniter 4 and a reactive Vue.js 3 + Pinia management UI.",
          "Optimized MySQL performance by eliminating N+1 queries, indexing slow queries, and leveraging Redis caching; integrated MinIO object storage and Telegram Bot API alerts with isolated fault handling.",
        ],
        vi: [
          "Phát triển và bảo trì các dịch vụ backend và RESTful API bằng PHP (CodeIgniter 4) cùng giao diện quản trị nội bộ phản hồi nhanh bằng Vue.js 3.",
          "Xây dựng luồng tiếp nhận webhook TikTok Shop với xác thực chữ ký số, định tuyến sự kiện và chống trùng lặp; áp dụng Factory và Strategy pattern để đồng bộ đơn hàng với các đối tác vận chuyển.",
          "Vận hành hàng đợi nền Redis xử lý ánh xạ danh mục, đồng bộ biến thể sản phẩm và cơ chế retry tự động cho dữ liệu lớn.",
          "Xây dựng trọn vẹn module Khiếu nại - Đổi/Trả hàng (Return/Refund Ticket) trong CodeIgniter 4 kèm giao diện theo dõi phản ứng nhanh bằng Vue.js 3 kết hợp Pinia.",
          "Tối ưu hiệu năng MySQL: loại bỏ lỗi N+1, đánh chỉ mục truy vấn chậm và tận dụng cache Redis; tích hợp lưu trữ MinIO và cảnh báo Telegram Bot với cơ chế cách ly lỗi.",
        ],
      },
      technologies: ["PHP", "CodeIgniter 4", "Vue 3", "Pinia", "MySQL", "Redis", "TikTok Shop API", "MinIO"],
    },
    {
      company: "TMA Solutions",
      role: {
        en: "Software Engineering Trainee",
        vi: "Thực tập sinh Kỹ sư phần mềm (TMA Foundation Training)",
      },
      period: "Nov 2023 – Dec 2023",
      location: "Quy Nhon City, Vietnam",
      type: { en: "Foundation Training", vi: "Đào tạo nền tảng" },
      isPrimary: false,
      summary: {
        en: "Completed foundation software engineering training covering web backend fundamentals and professional development workflows.",
        vi: "Hoàn thành khóa đào tạo nền tảng kỹ sư phần mềm về kiến trúc web backend và quy trình làm việc chuyên nghiệp.",
      },
      points: {
        en: [
          "Gained practical software engineering experience building RESTful backend services and understanding core web application patterns.",
          "Collaborated in an Agile/Scrum team environment, applying standardized Git workflows, code reviews, and industry version control practices.",
        ],
        vi: [
          "Thực hành xây dựng dịch vụ backend RESTful và tiếp cận các quy chuẩn thiết kế ứng dụng web cốt lõi.",
          "Làm việc nhóm theo quy trình Agile/Scrum, tuân thủ các quy tắc Git branching và review mã nguồn.",
        ],
      },
      technologies: ["PHP", "RESTful APIs", "Git", "Agile / Scrum"],
    },
  ] as ExperienceItem[],

  featuredProject: {
    name: "CineReserve",
    category: {
      en: "Featured Personal Project (Laravel Exploration)",
      vi: "Dự án cá nhân tiêu biểu (Thực hành Laravel)",
    },
    tagline: {
      en: "Cinema Ticket Booking System exploring Real-Time Seat Reservation in Laravel 11",
      vi: "Hệ thống đặt vé xem phim trực tuyến nghiên cứu tính năng giữ chỗ thời gian thực trong Laravel 11",
    },
    description: {
      en: "A personal full-stack project built to gain deep, hands-on experience with the modern Laravel 11 ecosystem, real-time WebSocket communication, and temporary resource reservation workflows.",
      vi: "Dự án cá nhân full-stack được xây dựng để thực hành chuyên sâu hệ sinh thái Laravel 11 hiện đại, giao tiếp WebSocket thời gian thực và quy trình giữ chỗ tài nguyên tạm thời.",
    },
    githubUrl: "https://github.com/hiimthien/cinereserve",
    technologies: [
      "PHP 8.3",
      "Laravel 11",
      "Vue 3",
      "TypeScript",
      "Redis",
      "Laravel Reverb",
      "MySQL 8.0",
      "Docker Compose",
    ],
    highlights: [
      {
        title: {
          en: "Temporary Seat Hold via Redis (`Cache::add`)",
          vi: "Tạm giữ ghế bằng Redis nguyên tử (`Cache::add`)",
        },
        detail: {
          en: "When a user selects a seat, the backend executes `Cache::add` with a 10-minute TTL (600 seconds) in Redis. This atomic operation reserves the seat in memory and returns a 422 conflict error to any other session attempting to hold the same seat simultaneously.",
          vi: "Khi người dùng chọn ghế, backend thực hiện lệnh `Cache::add` với thời hạn 10 phút (600 giây) trên Redis. Thao tác nguyên tử này tạm giữ ghế trên bộ nhớ và phản hồi lỗi 422 nếu có phiên khác cố tình chọn trùng cùng thời điểm.",
        },
      },
      {
        title: {
          en: "Real-Time Seat Updates via Laravel Reverb & Echo",
          vi: "Đồng bộ sơ đồ ghế thời gian thực qua Laravel Reverb & Echo",
        },
        detail: {
          en: "Seat state transitions (`holding`, `available`, `booked`) dispatch a `SeatStatusUpdated` broadcast event over WebSockets via Laravel Reverb, allowing connected Vue 3 clients to update seat map colors reactively without polling.",
          vi: "Khi trạng thái ghế thay đổi (`holding`, `available`, `booked`), hệ thống phát sự kiện `SeatStatusUpdated` qua WebSocket bằng Laravel Reverb, giúp client Vue 3 cập nhật màu ghế tức thì mà không cần polling API.",
        },
      },
      {
        title: {
          en: "Transaction-Safe Finalization (`DB::transaction`)",
          vi: "Xác nhận đặt vé trong Database Transaction (`DB::transaction`)",
        },
        detail: {
          en: "At checkout, the booking confirmation is executed inside a database transaction (`DB::transaction`). It validates that held seats match the active session and are not already sold before persisting `Booking` and `BookingSeat` records.",
          vi: "Tại bước thanh toán, quy trình xác nhận đặt vé được bọc trong database transaction (`DB::transaction`). Hệ thống kiểm tra phiên giữ chỗ hợp lệ và ghế chưa bị bán trước khi lưu bản ghi `Booking` và `BookingSeat`.",
        },
      },
      {
        title: {
          en: "Layered Architecture & Docker Compose Setup",
          vi: "Kiến trúc phân lớp & Môi trường Docker Compose",
        },
        detail: {
          en: "Organized with the Service-Repository pattern, Form Request validation, API Resources, and a TypeScript Vue 3 frontend. Fully containerized with Docker Compose (PHP 8.3, Nginx, MySQL 8, Redis 7, Reverb).",
          vi: "Áp dụng Service-Repository pattern, Form Request validation, API Resource và frontend Vue 3 TypeScript. Đóng gói hoàn chỉnh bằng Docker Compose (PHP 8.3, Nginx, MySQL 8, Redis 7, Reverb).",
        },
      },
    ],
  },

  education: {
    institution: "Nha Trang University",
    degree: {
      en: "Associate Degree in Information Technology",
      vi: "Cử nhân Cao đẳng Công nghệ Thông tin",
    },
    period: "Sep 2019 – Sep 2022",
    gpa: "3.4 / 4.0",
    description: {
      en: "Completed core coursework in Data Structures, Object-Oriented Programming, Relational Databases, and Computer Networks.",
      vi: "Hoàn thành chương trình đào tạo nền tảng về Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng (OOP), Cơ sở dữ liệu quan hệ và Mạng máy tính.",
    },
  },
};
