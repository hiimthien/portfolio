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
      en: "Software Engineer / Backend Developer",
      vi: "Kỹ sư phần mềm / Backend Developer",
    },
    subRole: "Laravel 11 · FrankenPHP Octane · Vue 3 · Nuxt 3",
    location: "Thu Duc City, Ho Chi Minh City, Vietnam",
    phone: "(+84) 388 145 796",
    email: "thiencao.work@gmail.com",
    github: "hiimthien",
    githubUrl: "https://github.com/hiimthien",
    pdfResumeUrl: "/CV_Cao_Luong_Thien_PHP_Developer.pdf",
    bio: {
      en: "Software Engineer specializing in PHP/Laravel backend architecture and modern Vue/Nuxt frontends. 1+ year of production e-commerce experience combined with verified production-grade personal projects solving concurrency control, high-throughput runtimes with FrankenPHP Octane, and end-to-end full-stack workflows.",
      vi: "Kỹ sư phần mềm định hướng chuyên sâu kiến trúc backend PHP/Laravel và frontend hiện đại Vue/Nuxt. Sở hữu 1+ năm kinh nghiệm thực tế trong lĩnh vực e-commerce kết hợp các dự án full-stack giải quyết bài toán chống trùng race condition, kiến trúc chịu tải cao với FrankenPHP Octane và kiểm thử tự động.",
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
            en: "CineReserve · ConsultFlow · TechShop",
            vi: "CineReserve · ConsultFlow · TechShop",
          },
          description: {
            en: "Service-Repository pattern, Form Requests, API Resources, Eloquent ORM, and background jobs.",
            vi: "Service-Repository pattern, Form Request validation, API Resource, Eloquent ORM và xử lý hàng đợi.",
          },
        },
        {
          name: "FrankenPHP & Laravel Octane",
          context: {
            en: "SaaS Project · ConsultFlow",
            vi: "Dự án SaaS · ConsultFlow",
          },
          description: {
            en: "High-throughput asynchronous worker mode, serving API requests with microsecond latency without bootstrapping overhead.",
            vi: "Vận hành Octane worker mode trên nền FrankenPHP, phục vụ request với độ trễ tối thiểu mà không phải bootstrap framework lặp lại.",
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
            en: "Cryptographic HMAC verification, event routing, idempotency handling, and third-party logistics synchronization.",
            vi: "Xác thực chữ ký HMAC, định tuyến sự kiện, xử lý idempotency chống trùng lặp dữ liệu và đồng bộ vận chuyển.",
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
          name: "MySQL 8.0 & PostgreSQL 14",
          description: {
            en: "Relational schema design, composite indexing, slow query analysis, and ACID transactional integrity.",
            vi: "Thiết kế schema, đánh composite index, phân tích slow query và đảm bảo tính toàn vẹn giao dịch ACID.",
          },
        },
        {
          name: "Redis Concurrency & Distributed Locks",
          description: {
            en: "Two-Phase locking strategy with atomic temporary holding keys (SET NX EX) to prevent race conditions.",
            vi: "Chiến lược khóa hai lớp (Two-Phase Locking) với khóa phân tán nguyên tử Redis (SET NX EX) chống Race Condition.",
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
          name: "Transactions & Data Integrity",
          description: {
            en: "Pessimistic database locking (`SELECT FOR UPDATE`) and transactional wallet ledgers.",
            vi: "Khóa bi quan tầng cơ sở dữ liệu (`SELECT FOR UPDATE`) và sổ cái giao dịch tài chính đảm bảo toàn vẹn tuyệt đối.",
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
            en: "Responsive single-page applications and management interfaces built with `<script setup>`, composables, and Pinia.",
            vi: "Xây dựng ứng dụng SPA và giao diện quản trị phản hồi nhanh với `<script setup>`, composables và Pinia.",
          },
        },
        {
          name: "Nuxt 3 (SSR & Full-Stack)",
          description: {
            en: "Modern server-side rendering, universal routing, auto-imports, and clean layout architectures in ConsultFlow.",
            vi: "Kiến trúc Server-Side Rendering với Nuxt 3, định tuyến thông minh và tối ưu trải nghiệm người dùng trong ConsultFlow.",
          },
        },
        {
          name: "TypeScript & JavaScript (ES6+)",
          description: {
            en: "Strict type-safe interfaces, handling asynchronous API flows (async/await), and modern DOM interactions.",
            vi: "Strict type-safe interface, xử lý luồng API bất đồng bộ (async/await) và tương tác DOM hiện đại.",
          },
        },
        {
          name: "Tailwind CSS (v3 & v4)",
          description: {
            en: "Utility-first responsive layouts, modern dark-mode aesthetic, and polished developer interfaces.",
            vi: "Layout responsive utility-first, phong cách dark-mode hiện đại và các component tinh tế.",
          },
        },
      ],
    },
    {
      title: {
        en: "DevOps & Tools",
        vi: "DevOps & Công cụ",
      },
      icon: "Wrench",
      items: [
        {
          name: "Docker & Docker Compose",
          description: {
            en: "Containerized multi-service stacks (FrankenPHP, PHP-FPM, MySQL, PostgreSQL, Redis, Nginx, Nuxt).",
            vi: "Đóng gói kiến trúc đa container hoàn chỉnh (FrankenPHP, PHP-FPM, MySQL, PostgreSQL, Redis, Nginx, Nuxt).",
          },
        },
        {
          name: "Automated Testing (PHPUnit / Pest)",
          description: {
            en: "Feature and unit test suites covering race conditions, payment idempotency, order flows, and warranty claims.",
            vi: "Bộ test Feature/Unit bao phủ luồng Race Condition, Webhook Idempotency, đặt hàng và bảo hành.",
          },
        },
        {
          name: "GitHub Actions CI/CD",
          description: {
            en: "Automated pipelines executing test suites, Laravel Pint style formatting, and vue-tsc type checking.",
            vi: "Pipeline CI tự động kiểm thử, chuẩn hóa coding style với Laravel Pint và type-check với vue-tsc.",
          },
        },
        {
          name: "MinIO & Media Pipelines",
          description: {
            en: "S3-compatible object storage, MIME validation, automated thumbnail generation, and WebP conversion.",
            vi: "Lưu trữ đối tượng chuẩn S3, kiểm tra MIME type, tự động sinh thumbnail và nén ảnh WebP.",
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
      en: "Featured Concurrency Project",
      vi: "Dự án Tiêu Biểu về Concurrency",
    },
    tagline: {
      en: "Real-time Cinema Ticket Booking System solving High-Concurrency Race Conditions",
      vi: "Hệ thống đặt vé xem phim trực tuyến giải quyết bài toán Race Condition khi mở bán cao điểm",
    },
    description: {
      en: "A production-grade full-stack project designed to eliminate seat double-booking race conditions during high-volume spikes. Employs a Two-Phase Locking strategy with Redis atomic locks in RAM and pessimistic database locking at checkout, combined with WebSocket broadcasting via Laravel Reverb.",
      vi: "Dự án full-stack tập trung giải quyết bài toán chống trùng ghế đồng thời khi mở bán vé cao điểm. Áp dụng chiến lược khóa 2 lớp (Two-Phase Locking) với Redis atomic lock ở tầng RAM và Pessimistic Locking ở tầng cơ sở dữ liệu khi thanh toán, đồng bộ trực tiếp qua WebSocket Laravel Reverb.",
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
      "PHPUnit CI",
    ],
    highlights: [
      {
        title: {
          en: "Two-Phase Locking (Redis SET NX EX + DB Pessimistic Lock)",
          vi: "Chiến lược khóa 2 lớp (Redis SET NX EX + Khóa bi quan MySQL)",
        },
        detail: {
          en: "When a user picks a seat, Redis executes `SET lock:showtime:{id}:seat:{id} {session_id} NX EX 600` in ~1-2ms, instantly deflecting concurrent clicks without database overhead. Final confirmation executes within a MySQL pessimistic transaction (`SELECT ... FOR UPDATE`).",
          vi: "Khi người dùng chọn ghế, Redis thực thi lệnh `SET lock:showtime:{id}:seat:{id} {session_id} NX EX 600` chỉ trong ~1-2ms, chặn tức thì các click đồng thời mà không đè tải I/O lên MySQL. Bước xác nhận cuối cùng dùng khóa bi quan (`SELECT FOR UPDATE`) trong transaction.",
        },
      },
      {
        title: {
          en: "Real-Time Broadcast via Laravel Reverb & Echo",
          vi: "Đồng bộ sơ đồ ghế thời gian thực qua Laravel Reverb & Echo",
        },
        detail: {
          en: "Seat state transitions (holding, available, booked) dispatch WebSocket broadcast events via Laravel Reverb. Connected Vue 3 clients update seat map colors reactively with zero polling overhead.",
          vi: "Mỗi thay đổi trạng thái ghế đều kích hoạt sự kiện phát thanh WebSocket qua Laravel Reverb. Các client Vue 3 cập nhật màu sắc sơ đồ ghế tức thì mà không cần polling API liên tục.",
        },
      },
      {
        title: {
          en: "Anti-Fraud Check-In & Idempotent Webhook Handling",
          vi: "Soát vé QR chống gian lận & Xử lý Webhook Idempotency",
        },
        detail: {
          en: "Implemented TicketCheckInService with tamper-evident QR code validation and idempotent webhook processing to guarantee orders are never fulfilled twice upon external retries.",
          vi: "Triển khai TicketCheckInService kiểm tra mã QR chống quét trùng vé và xử lý webhook idempotent bảo đảm đơn hàng không bao giờ bị kích hoạt hai lần khi có retry.",
        },
      },
    ],
  },

  otherProjects: [
    {
      id: "consultflow",
      name: "ConsultFlow",
      category: {
        en: "High-Performance SaaS Platform",
        vi: "Nền tảng SaaS Hiệu Năng Cao",
      },
      tagline: {
        en: "SaaS Booking & Consultation Platform powered by Laravel 11 & FrankenPHP Octane",
        vi: "Nền tảng SaaS đặt lịch & tư vấn trực tuyến với Laravel 11 & FrankenPHP Octane",
      },
      description: {
        en: "A modern, high-throughput SaaS booking platform orchestrating multi-role consultations (Consultant, Client, Admin), automated calendar slot conflict prevention, and ledger-based wallet transactions.",
        vi: "Nền tảng SaaS đặt lịch tư vấn chịu tải cao, hỗ trợ đa vai trò (Chuyên gia, Khách hàng, Quản trị), thuật toán chống trùng lịch hẹn và quản lý ví giao dịch nội bộ.",
      },
      githubUrl: "https://github.com/hiimthien/saas-booking",
      technologies: [
        "Laravel 11",
        "FrankenPHP (Octane)",
        "Nuxt 3",
        "PostgreSQL 14",
        "Redis",
        "Docker Compose",
        "Feature Tests",
      ],
      highlights: [
        {
          title: {
            en: "FrankenPHP Octane Worker Mode",
            vi: "Vận hành FrankenPHP Octane Worker Mode",
          },
          detail: {
            en: "Configured Laravel Octane on top of FrankenPHP to keep application bootstrap in memory, achieving sub-millisecond API response times and superior concurrency throughput.",
            vi: "Cấu hình Laravel Octane trên nền FrankenPHP giữ framework thường trú trong RAM, đem lại tốc độ phản hồi cực nhanh và khả năng xử lý đồng thời vượt trội.",
          },
        },
        {
          title: {
            en: "Conflict-Free Scheduling Engine",
            vi: "Thuật toán kiểm soát lịch hẹn chống trùng giờ",
          },
          detail: {
            en: "Engineered slot calculation and booking conflict prevention logic with database transactions to strictly guarantee overlapping time slots cannot be double-booked.",
            vi: "Thuật toán tính toán khung giờ trống và cơ chế kiểm soát xung đột lịch hẹn bọc trong database transaction, loại bỏ hoàn toàn rủi ro trùng lịch của chuyên gia.",
          },
        },
        {
          title: {
            en: "Ledger-Based Wallet System",
            vi: "Hệ thống ví số dư mô hình sổ cái giao dịch",
          },
          detail: {
            en: "Architected internal wallet service with immutable transaction history, ensuring financial balance consistency during booking holds, deductions, and payouts.",
            vi: "Xây dựng WalletService theo mô hình sổ cái giao dịch, bảo toàn tính toàn vẹn số dư tài khoản khi giữ tiền đặt hẹn, trừ phí và thanh toán.",
          },
        },
      ],
    },
    {
      id: "techshop",
      name: "TechShop",
      category: {
        en: "Full-Stack Retail E-Commerce",
        vi: "Thương Mại Điện Tử Bán Lẻ",
      },
      tagline: {
        en: "Full-Stack Retail Tech E-Commerce & Administrative Operations Hub",
        vi: "Hệ thống thương mại điện tử thiết bị công nghệ & trung tâm quản trị vận hành",
      },
      description: {
        en: "An end-to-end e-commerce platform built with Laravel 11 REST API and Vue 3 (Pinia), featuring dynamic catalog filtering, coupon validation, order state machines, and warranty claim management.",
        vi: "Hệ thống thương mại điện tử thiết bị công nghệ toàn diện xây dựng trên Laravel 11 REST API và Vue 3 (Pinia), tích hợp bộ lọc danh mục động, mã giảm giá, máy trạng thái đơn hàng và xử lý bảo hành.",
      },
      githubUrl: "https://github.com/hiimthien/TechShop",
      technologies: [
        "Laravel 11",
        "Vue 3",
        "TypeScript",
        "Pinia",
        "Tailwind CSS v4",
        "VNPay Gateway (HMAC-SHA512)",
        "MySQL 8.0",
        "21 Feature Tests",
      ],
      highlights: [
        {
          title: {
            en: "VNPay Sandbox Payment Gateway & Idempotent Audit",
            vi: "Tích hợp cổng VNPay Sandbox & Đối soát Idempotent",
          },
          detail: {
            en: "Engineered end-to-end online payment integration with HMAC-SHA512 checksum validation, automatic timezone handling (GMT+7), idempotent Webhook IPN updates, and in-app instant retry flow.",
            vi: "Triển khai cổng thanh toán trực tuyến bảo mật với mã hóa HMAC-SHA512, chuẩn hóa múi giờ Việt Nam, xử lý Webhook IPN idempotent và tính năng thử lại thanh toán tức thì.",
          },
        },
        {
          title: {
            en: "Atomic Inventory Locks & Anti-Overselling Checkout",
            vi: "Khóa tồn kho nguyên tử & Chống bán vượt số lượng",
          },
          detail: {
            en: "Protected stock counts under high concurrency using atomic cache locks and conditional database decrements during checkout, guaranteeing zero overselling.",
            vi: "Bảo vệ tồn kho đa người dùng bằng atomic cache lock và trừ kho có điều kiện trong database transaction, triệt tiêu rủi ro bán vượt tồn kho.",
          },
        },
        {
          title: {
            en: "100% Studio Photography Catalog & 21 Feature Tests",
            vi: "Kho 100% ảnh Studio cục bộ & Bộ 21 test Feature",
          },
          detail: {
            en: "Organized 52 products (95 variants) with high-res studio photography locally stored, converted dynamic category filters to SEO-friendly slugs, and achieved 100% pass on 21 backend feature tests.",
            vi: "Chuẩn hóa 52 sản phẩm (95 biến thể) với ảnh studio chất lượng cao lưu trữ local, chuyển đổi bộ lọc sang slug chuẩn SEO và đạt 100% pass trên bộ 21 test Feature.",
          },
        },
      ],
    },
  ] as ProjectItem[],

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
