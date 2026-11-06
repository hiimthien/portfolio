import type { LocaleSchema } from './vi';

export const en: LocaleSchema = {
  nav: {
    name: 'Cao Luong Thien',
  },
  hero: {
    name: 'Cao Luong Thien',
    role: 'Junior Backend Developer (PHP) · Ho Chi Minh City',
    bio: "I'm Thien, a PHP developer with over 1 year of experience. I currently work on backend (CodeIgniter 4) and Vue 3 interfaces at TTR Group. Outside work, I build personal projects with Laravel to learn more. I'm looking for a team environment to collaborate and grow faster.",
    downloadCv: 'Download CV (PDF)',
  },
  experience: {
    title: 'Experience',
    projectLabel: 'Project:',
    roleLabel: 'Role:',
    stackLabel: 'Stack:',
    ttr: {
      company: 'TTR Group',
      role: 'Junior PHP / Full-Stack Developer',
      period: 'Sep 2025 – Present, Ho Chi Minh City',
      project: 'E-commerce Management Platform',
      bullets: [
        'Integrated 11 print-on-demand fulfillment providers using Strategy and Factory patterns, normalizing different third-party APIs behind one interface; adding a provider only requires a new adapter class. Automated order routing and shipment tracking sync.',
        'Moved heavy tasks (catalog mapping, variant sync, batch price updates) to Redis queue workers with automatic retry on failed payloads, keeping the UI responsive and avoiding request timeouts.',
        'Built TikTok Shop webhook pipelines with HMAC signature validation, event routing (order, product, return/refund) and deduplication to prevent duplicate processing on redelivered events.',
        'Removed N+1 queries, added composite indexes on high-traffic tables and introduced Redis caching to reduce database load.',
        'Delivered the Return/Refund Ticket module end to end: multi-status approval workflow in CodeIgniter 4 and a reactive management UI in Vue 3 (Pinia).',
        'Integrated AI content and image services with MinIO object storage, implementing MIME validation, thumbnail generation, WEBP conversion and memory cleanup.',
        'Integrated Telegram Bot API for real-time order and system alerts, using isolated error handling so external API failures do not affect core transaction flows.',
      ],
      stack: 'PHP, CodeIgniter 4, Vue 3, Pinia, MySQL, Redis, MinIO, TikTok Shop API',
    },
    military: {
      title: 'Mandatory Military Service',
      period: 'Feb 2023 – Jan 2025',
      desc: 'Completed 2-year active national military service obligation.',
    },
    tma: {
      title: 'TMA Solutions (TMA Foundation Training)',
      period: 'Nov 2022 – Dec 2022, Quy Nhon',
      role: 'Software Engineering Trainee | Company training and probation program',
      bullets: [
        'Built RESTful backend services and learned core web application patterns.',
        'Worked in an Agile/Scrum team using Git workflows and code reviews.',
      ],
      stack: 'PHP, RESTful APIs, Git, Agile / Scrum',
    },
  },
  projects: {
    title: 'Projects',
    problemLabel: 'Problem:',
    solutionLabel: 'How I solved it:',
    learnedLabel: 'What I learned:',
    stackLabel: 'Stack:',
    cinereserve: {
      title: 'CineReserve: Cinema ticket booking',
      summary: 'A personal project focused on solving concurrent seat selection race conditions.',
      problem: 'Two users clicking the same seat almost simultaneously can cause duplicate bookings.',
      bullets: [
        'Use Redis lock (<code class="bg-stone-100 px-1 py-0.5 rounded text-stone-800">SET NX</code>, 10 min TTL) when selecting a seat to immediately block later attempts.',
        'Use Laravel Reverb (WebSocket) to broadcast seat state updates to clients viewing the same showtime.',
        'Verify seat availability in a database transaction with <code class="bg-stone-100 px-1 py-0.5 rounded text-stone-800">SELECT ... FOR UPDATE</code> during checkout.',
        'Simulated payment webhook callbacks (VNPAY/MoMo) are handled idempotently to avoid duplicate ticket generation.',
        'Includes an admin panel (analytics, showtime scheduling) and a staff QR ticket scanning page.',
      ],
      learned: 'Gained practical insights into handling high-concurrency race conditions: learned that frontend validation alone is insufficient—true consistency requires combining in-memory distributed locks (Redis SET NX) with database pessimistic locking (SELECT ... FOR UPDATE) to guarantee absolute data integrity under peak loads.',
      stack: 'PHP 8.3, Laravel 11, Vue 3 (TypeScript), Redis, Laravel Reverb, MySQL 8.0, Docker Compose',
      slides: [
        {
          label: 'Seat Matrix & Locks',
          desc: 'Real-time interactive seat matrix solving double-booking race conditions with 10-minute Redis locks (SET NX) and WebSocket broadcasting.',
        },
        {
          label: 'Cinema Storefront',
          desc: 'Cinematic dark-mode storefront automatically synchronizing now-playing blockbusters from TMDb API.',
        },
        {
          label: 'Movie & Showtimes',
          desc: 'Comprehensive movie details, age ratings, direct trailer playback, and national theater chain showtime filters.',
        },
        {
          label: 'Now Showing Catalog',
          desc: 'Dynamic movie catalog with genre filtering, audience ratings, runtimes, and fast booking shortcuts.',
        },
      ],
    },
    techshop: {
      title: 'TechShop: Retail tech e-commerce',
      summary: 'A personal project building a full retail e-commerce flow from storefront to admin dashboard.',
      bullets: [
        'Integrated VNPay Sandbox online gateway (HMAC-SHA512) with idempotent Webhook IPN & Return URL reconciliation and instant retry flow.',
        '52 tech products (95 variants) backed by 100% high-res studio photography locally stored, with SEO-friendly category URL slugs.',
        'Multi-variant catalog, reactive Pinia cart, dynamic coupon validation engine, and Google OAuth login.',
        'Atomic locks and database transactions during checkout to prevent concurrency overselling.',
        'Admin CMS hub: Date-range revenue analytics, order lifecycle management, and serial/IMEI electronic warranty lookup.',
        'Backed by 21 backend PHPUnit feature tests and 4 frontend Vitest tests (100% Passed).',
      ],
      learned: 'Mastered resilient third-party payment integration with cryptographic checksums (HMAC-SHA512), timezone alignment, and idempotent webhook handling; along with architecting end-to-end e-commerce state machines to prevent overselling under concurrent checkouts.',
      stack: 'PHP 8.3, Laravel 11 (Sanctum, Reverb, Socialite), MySQL, Vue 3, TypeScript, Pinia, Tailwind CSS v4, Vite',
      slides: [
        {
          label: 'Storefront',
          desc: 'Modern e-commerce storefront with interactive banners, product categories, and real-time flash deals.',
        },
        {
          label: 'Product Details',
          desc: 'Interactive variant selector (switch types, colors, RGB modes) with live stock counts and technical specs.',
        },
        {
          label: 'Admin Dashboard',
          desc: 'Operational business intelligence: revenue analytics, order delivery stages, and customer activity metrics.',
        },
        {
          label: 'Order Lifecycle',
          desc: 'Admin order management hub with live VNPay payment statuses, shipment tracking, and instant action modals.',
        },
        {
          label: 'VNPay Checkout',
          desc: 'Cryptographic SHA-512 payment reconciliation screen with instant callback verification and retry capability.',
        },
      ],
    },
  },
  skills: {
    title: 'Skills & Additional',
    languagesLabel: 'Languages:',
    languages: 'PHP, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3',
    backendLabel: 'Backend:',
    backend: 'CodeIgniter 4 (production), Laravel 11 (personal projects), RESTful APIs, Webhook Processing, Redis Queues',
    frontendLabel: 'Frontend:',
    frontend: 'Vue.js 3 (Composition API), Pinia, Vue Router, Tailwind CSS, Bootstrap',
    dbLabel: 'Databases & Caching:',
    db: 'MySQL (Query Optimization, Composite Indexing, Transactions), Redis (Caching, Queue, Distributed Locks)',
    toolsLabel: 'Integrations & Tools:',
    tools: 'TikTok Shop API, VNPay, Google OAuth, Telegram Bot API, MinIO, PHPUnit, Vitest, Git, Docker, Postman, Vite',
  },
  education: {
    title: 'Education',
    degree: 'Associate Degree in Information Technology · Nha Trang University',
    period: '(09/2019 – 09/2022)',
    gpa: 'GPA: 3.4 / 4.0',
  },
  contact: {
    title: 'Contact',
    desc: 'You can reach me via email or GitHub.',
  },
  footer: {
    copyright: 'Cao Luong Thien',
    backToTop: 'Back to top ↑',
  },
};
