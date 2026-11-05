<template>
  <section id="projects" class="text-left space-y-12">
    <div>
      <h2 class="text-xl font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2">
        {{ isEn ? 'Projects' : 'Dự án' }}
      </h2>
    </div>

    <!-- Project 1: CineReserve -->
    <article class="space-y-4">
      <div>
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="text-lg font-semibold text-stone-900">
            CineReserve: {{ isEn ? 'Cinema ticket booking' : 'web đặt vé xem phim' }}
          </h3>
          <a
            href="https://github.com/hiimthien/cinereserve"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 hover:text-emerald-700"
          >
            GitHub ↗
          </a>
        </div>
        <p class="text-stone-600 text-[15px] mt-0.5">
          {{ isEn
            ? 'A personal project focused on solving concurrent seat selection race conditions.'
            : 'Dự án cá nhân để tập giải bài toán nhiều người cùng chọn một ghế.'
          }}
        </p>
      </div>

      <!-- Multi-Screenshot Showcase for CineReserve -->
      <div class="space-y-2.5">
        <!-- Tab selector -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <button
            v-for="(slide, idx) in cineScreenshots"
            :key="slide.src"
            type="button"
            @click="selectCineSlide(idx)"
            :class="[
              'px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap cursor-pointer',
              currentCineSlide === idx
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
            ]"
          >
            {{ isEn ? slide.labelEn : slide.labelVi }}
          </button>
        </div>

        <!-- Frame -->
        <div class="aspect-video w-full rounded-lg border border-stone-200 overflow-hidden bg-stone-900 shadow-sm relative group">
          <img
            :src="cineScreenshots[currentCineSlide].src"
            :alt="cineScreenshots[currentCineSlide].labelEn"
            class="w-full h-full object-cover transition-opacity duration-300"
          />

          <!-- Prev/Next Controls -->
          <button
            type="button"
            @click="prevCineSlide"
            class="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            @click="nextCineSlide"
            class="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Next slide"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Indicators dots -->
          <div class="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-stone-900/60 backdrop-blur-xs">
            <button
              v-for="(_, idx) in cineScreenshots"
              :key="idx"
              type="button"
              @click="selectCineSlide(idx)"
              :class="[
                'h-1.5 rounded-full transition-all cursor-pointer',
                currentCineSlide === idx ? 'bg-white w-3' : 'bg-white/50 hover:bg-white/80 w-1.5'
              ]"
              :aria-label="`Slide ${idx + 1}`"
            />
          </div>
        </div>

        <!-- Slide Caption -->
        <p class="text-xs text-stone-500 italic text-center">
          {{ isEn ? cineScreenshots[currentCineSlide].descEn : cineScreenshots[currentCineSlide].descVi }}
        </p>
      </div>

      <!-- Problem & Solution -->
      <div class="text-[16px] text-stone-800 space-y-3 leading-relaxed">
        <p>
          <strong class="font-medium text-stone-900">{{ isEn ? 'Problem:' : 'Vấn đề:' }}</strong>
          {{ isEn
            ? 'Two users clicking the same seat almost simultaneously can cause duplicate bookings.'
            : 'Hai người có thể bấm chọn cùng một ghế gần như cùng lúc, dẫn đến trùng vé.'
          }}
        </p>

        <div>
          <strong class="font-medium text-stone-900 block mb-1.5">
            {{ isEn ? 'How I solved it:' : 'Cách mình làm:' }}
          </strong>
          <ul class="list-disc pl-5 space-y-1 text-stone-700 text-[15.5px]">
            <li v-if="!isEn">Khi chọn ghế, dùng Redis lock (<code class="bg-stone-100 px-1 py-0.5 rounded text-stone-800">SET NX</code>, giữ 10 phút) để người bấm sau bị chặn ngay.</li>
            <li v-else>Use Redis lock (<code class="bg-stone-100 px-1 py-0.5 rounded text-stone-800">SET NX</code>, 10 min TTL) when selecting a seat to immediately block later attempts.</li>

            <li v-if="!isEn">Dùng Laravel Reverb (WebSocket) để các máy đang xem cùng suất chiếu thấy ghế đổi trạng thái.</li>
            <li v-else>Use Laravel Reverb (WebSocket) to broadcast seat state updates to clients viewing the same showtime.</li>

            <li v-if="!isEn">Lúc thanh toán, kiểm tra lại trong transaction với <code class="bg-stone-100 px-1 py-0.5 rounded text-stone-800">SELECT ... FOR UPDATE</code>.</li>
            <li v-else>Verify seat availability in a database transaction with <code class="bg-stone-100 px-1 py-0.5 rounded text-stone-800">SELECT ... FOR UPDATE</code> during checkout.</li>

            <li v-if="!isEn">Callback thanh toán (mô phỏng VNPAY/MoMo) được xử lý để không tạo vé trùng.</li>
            <li v-else>Simulated payment webhook callbacks (VNPAY/MoMo) are handled idempotently to avoid duplicate ticket generation.</li>

            <li v-if="!isEn">Ngoài ra có trang admin (thống kê, tạo suất chiếu) và trang quét vé QR cho nhân viên.</li>
            <li v-else>Includes an admin panel (analytics, showtime scheduling) and a staff QR ticket scanning page.</li>
          </ul>
        </div>

        <p class="text-stone-600 text-[15px] leading-relaxed">
          <strong class="font-medium text-stone-800">{{ isEn ? 'What I learned:' : 'Mình học được:' }}</strong>
          {{ isEn
            ? ' Gained practical insights into handling high-concurrency race conditions: learned that frontend validation alone is insufficient—true consistency requires combining in-memory distributed locks (Redis SET NX) with database pessimistic locking (SELECT ... FOR UPDATE) to guarantee absolute data integrity under peak loads.'
            : ' Hiểu sâu bản chất xử lý Race Condition khi mở bán vé cao điểm: phối hợp khóa phân tán trên RAM (Redis SET NX) để phản hồi tức thì với kiểm tra bi quan (SELECT ... FOR UPDATE trong Transaction) ở database nhằm chặn triệt để đặt trùng vé mà không làm nghẽn hệ thống.'
          }}
        </p>
      </div>

      <!-- Plain Text Stack (No pills) -->
      <div class="text-xs sm:text-sm text-stone-600 pt-1">
        <span class="font-medium text-stone-800">Stack:</span> PHP 8.3, Laravel 11, Vue 3 (TypeScript), Redis, Laravel Reverb, MySQL 8.0, Docker Compose
      </div>
    </article>

    <!-- Project 2: TechShop -->
    <article class="space-y-4 pt-6 border-t border-stone-200">
      <div>
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="text-lg font-semibold text-stone-900">
            TechShop: {{ isEn ? 'Retail tech e-commerce' : 'web bán đồ công nghệ' }}
          </h3>
          <a
            href="https://github.com/hiimthien/TechShop"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 hover:text-emerald-700"
          >
            GitHub ↗
          </a>
        </div>
        <p class="text-stone-600 text-[15px] mt-0.5">
          {{ isEn
            ? 'A personal project building a full retail e-commerce flow from storefront to admin dashboard.'
            : 'Dự án cá nhân để tập làm một web bán hàng đầy đủ từ giao diện đến trang quản trị.'
          }}
        </p>
      </div>

      <!-- Multi-Screenshot Showcase with Tabs & Controls -->
      <div class="space-y-2.5">
        <!-- Tab selector -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <button
            v-for="(slide, idx) in techScreenshots"
            :key="slide.src"
            type="button"
            @click="selectTechSlide(idx)"
            :class="[
              'px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap cursor-pointer',
              currentTechSlide === idx
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
            ]"
          >
            {{ isEn ? slide.labelEn : slide.labelVi }}
          </button>
        </div>

        <!-- Frame -->
        <div class="aspect-video w-full rounded-lg border border-stone-200 overflow-hidden bg-stone-100 shadow-sm relative group">
          <img
            :src="techScreenshots[currentTechSlide].src"
            :alt="techScreenshots[currentTechSlide].labelEn"
            class="w-full h-full object-cover transition-opacity duration-300"
          />

          <!-- Prev/Next Controls -->
          <button
            type="button"
            @click="prevTechSlide"
            class="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            @click="nextTechSlide"
            class="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Next slide"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Indicators dots -->
          <div class="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-stone-900/60 backdrop-blur-xs">
            <button
              v-for="(_, idx) in techScreenshots"
              :key="idx"
              type="button"
              @click="selectTechSlide(idx)"
              :class="[
                'h-1.5 rounded-full transition-all cursor-pointer',
                currentTechSlide === idx ? 'bg-white w-3' : 'bg-white/50 hover:bg-white/80 w-1.5'
              ]"
              :aria-label="`Slide ${idx + 1}`"
            />
          </div>
        </div>

        <!-- Slide Caption -->
        <p class="text-xs text-stone-500 italic text-center">
          {{ isEn ? techScreenshots[currentTechSlide].descEn : techScreenshots[currentTechSlide].descVi }}
        </p>
      </div>

      <!-- Key details -->
      <div class="text-[16px] text-stone-800 space-y-3 leading-relaxed">
        <ul class="list-disc pl-5 space-y-1 text-stone-700 text-[15.5px]">
          <li v-if="!isEn">Tích hợp cổng thanh toán trực tuyến VNPay Sandbox (HMAC-SHA512) với cơ chế đối soát Idempotent qua Webhook IPN và Return URL, hỗ trợ thanh toán lại trực tiếp.</li>
          <li v-else>Integrated VNPay Sandbox online gateway (HMAC-SHA512) with idempotent Webhook IPN & Return URL reconciliation and instant retry flow.</li>

          <li v-if="!isEn">52 sản phẩm công nghệ (95 biến thể) sử dụng 100% ảnh studio độ phân giải cao lưu trữ local, chuyển đổi bộ lọc danh mục sang URL Slug thân thiện SEO.</li>
          <li v-else>52 tech products (95 variants) backed by 100% high-res studio photography locally stored, with SEO-friendly category URL slugs.</li>

          <li v-if="!isEn">Sản phẩm đa biến thể (màu sắc, cấu hình), giỏ hàng phản ứng nhanh Pinia, áp dụng mã giảm giá và đăng nhập an toàn Google OAuth.</li>
          <li v-else>Multi-variant catalog, reactive Pinia cart, dynamic coupon validation engine, and Google OAuth login.</li>

          <li v-if="!isEn">Cơ chế Atomic Lock và Database Transaction khi checkout, triệt tiêu race condition chống bán vượt tồn kho (overselling).</li>
          <li v-else>Atomic locks and database transactions during checkout to prevent concurrency overselling.</li>

          <li v-if="!isEn">Hệ thống quản trị (Admin CMS): Phân tích doanh thu theo kỳ, quản lý vòng đời đơn hàng, tra cứu serial/IMEI và bảo hành điện tử.</li>
          <li v-else>Admin CMS hub: Date-range revenue analytics, order lifecycle management, and serial/IMEI electronic warranty lookup.</li>

          <li v-if="!isEn">Kiểm thử toàn diện với 21 test PHPUnit Feature cho Backend và 4 test Vitest cho Frontend (100% Passed).</li>
          <li v-else>Backed by 21 backend PHPUnit feature tests and 4 frontend Vitest tests (100% Passed).</li>
        </ul>

        <p class="text-stone-600 text-[15px] leading-relaxed">
          <strong class="font-medium text-stone-800">{{ isEn ? 'What I learned:' : 'Mình học được:' }}</strong>
          {{ isEn
            ? ' Mastered resilient third-party payment integration with cryptographic checksums (HMAC-SHA512), timezone alignment, and idempotent webhook handling; along with architecting end-to-end e-commerce state machines to prevent overselling under concurrent checkouts.'
            : ' Làm chủ trọn vẹn tích hợp cổng thanh toán trực tuyến bảo mật (HMAC-SHA512, chuẩn hóa múi giờ và Webhook IPN Idempotent); đồng thời xây dựng kiến trúc E-Commerce khép kín từ sản phẩm đa biến thể, khóa tồn kho nguyên tử chống bán vượt (overselling) đến trang quản trị vận hành.'
          }}
        </p>
      </div>

      <!-- Plain Text Stack (No pills) -->
      <div class="text-xs sm:text-sm text-stone-600 pt-1">
        <span class="font-medium text-stone-800">Stack:</span> PHP 8.3, Laravel 11 (Sanctum, Reverb, Socialite), MySQL, Vue 3, TypeScript, Pinia, Tailwind CSS v4, Vite
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../composables/useLanguage';

const { isEn } = useLanguage();

// CineReserve Screenshots & Slider
const currentCineSlide = ref(0);
const cineScreenshots = [
  {
    src: '/images/cinereserve-seats.png',
    labelEn: 'Seat Matrix & Locks',
    labelVi: 'Sơ đồ ghế & Khóa Redis',
    descEn: 'Real-time interactive seat matrix solving double-booking race conditions with 10-minute Redis locks (SET NX) and WebSocket broadcasting.',
    descVi: 'Sơ đồ chọn ghế thời gian thực giải quyết Race Condition bằng Redis Lock (SET NX 10 phút), chống chọn trùng ghế và phát sóng WebSocket qua Laravel Reverb.',
  },
  {
    src: '/images/cinereserve-home.png',
    labelEn: 'Cinema Storefront',
    labelVi: 'Trang chủ điện ảnh',
    descEn: 'Cinematic dark-mode storefront automatically synchronizing now-playing blockbusters from TMDb API.',
    descVi: 'Giao diện rạp phim Dark mode điện ảnh, đồng bộ tự động danh mục phim bom tấn chiếu rạp qua TMDb API.',
  },
  {
    src: '/images/cinereserve-detail.png',
    labelEn: 'Movie & Showtimes',
    labelVi: 'Chi tiết phim & Lịch chiếu',
    descEn: 'Comprehensive movie details, age ratings, direct trailer playback, and national theater chain showtime filters.',
    descVi: 'Thông tin phim, phân loại độ tuổi, xem trailer trực tiếp và bộ lọc lịch chiếu 7 ngày theo cụm rạp toàn quốc.',
  },
  {
    src: '/images/cinereserve-now-showing.png',
    labelEn: 'Now Showing Catalog',
    labelVi: 'Phim đang chiếu',
    descEn: 'Dynamic movie catalog with genre filtering, audience ratings, runtimes, and fast booking shortcuts.',
    descVi: 'Bộ lọc thể loại phim (Hành động, Hoạt hình, Kinh dị), điểm đánh giá TMDb và nút đặt vé nhanh.',
  },
];

let cineAutoSlideTimer: ReturnType<typeof setInterval> | null = null;

function startCineAutoSlide() {
  stopCineAutoSlide();
  cineAutoSlideTimer = setInterval(() => {
    nextCineSlide();
  }, 6000);
}

function stopCineAutoSlide() {
  if (cineAutoSlideTimer) {
    clearInterval(cineAutoSlideTimer);
    cineAutoSlideTimer = null;
  }
}

function selectCineSlide(idx: number) {
  currentCineSlide.value = idx;
  startCineAutoSlide();
}

function nextCineSlide() {
  currentCineSlide.value = (currentCineSlide.value + 1) % cineScreenshots.length;
}

function prevCineSlide() {
  currentCineSlide.value = (currentCineSlide.value - 1 + cineScreenshots.length) % cineScreenshots.length;
}

// TechShop Screenshots & Slider
const currentTechSlide = ref(0);
const techScreenshots = [
  {
    src: '/images/techshop-storefront.png',
    labelEn: 'Storefront',
    labelVi: 'Trang chủ bán lẻ',
    descEn: 'Modern e-commerce storefront with interactive banners, product categories, and real-time flash deals.',
    descVi: 'Giao diện bán lẻ công nghệ hiện đại với banner động, bộ danh mục sản phẩm và ưu đãi Flash Sale.',
  },
  {
    src: '/images/techshop-product-detail.png',
    labelEn: 'Product Details',
    labelVi: 'Chi tiết sản phẩm & Biến thể',
    descEn: 'Interactive variant selector (switch types, colors, RGB modes) with live stock counts and technical specs.',
    descVi: 'Chọn biến thể đa thuộc tính (switch bàn phím, màu nhôm, LED RGB) đồng bộ tồn kho thực và thông số.',
  },
  {
    src: '/images/techshop-admin-dashboard.png',
    labelEn: 'Admin Dashboard',
    labelVi: 'Admin Dashboard',
    descEn: 'Operational business intelligence: revenue analytics, order delivery stages, and customer activity metrics.',
    descVi: 'Bảng điều khiển quản trị: phân tích doanh thu theo kỳ, thống kê tiến trình vận đơn và chỉ số khách hàng.',
  },
  {
    src: '/images/techshop-admin-orders.png',
    labelEn: 'Order Lifecycle',
    labelVi: 'Quản lý 101 đơn hàng',
    descEn: 'Admin order management hub with live VNPay payment statuses, shipment tracking, and instant action modals.',
    descVi: 'Hệ thống quản lý 101 đơn hàng, theo dõi trạng thái thanh toán VNPay và phân luồng đóng gói vận chuyển.',
  },
  {
    src: '/images/techshop-vnpay.png',
    labelEn: 'VNPay Checkout',
    labelVi: 'Thanh toán VNPay',
    descEn: 'Cryptographic SHA-512 payment reconciliation screen with instant callback verification and retry capability.',
    descVi: 'Màn hình đối soát thanh toán trực tuyến VNPay Sandbox (HMAC-SHA512) và xử lý hoàn tất đơn hàng.',
  },
];

let autoSlideTimer: ReturnType<typeof setInterval> | null = null;

function startAutoSlide() {
  stopAutoSlide();
  autoSlideTimer = setInterval(() => {
    nextTechSlide();
  }, 5000);
}

function stopAutoSlide() {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }
}

function selectTechSlide(idx: number) {
  currentTechSlide.value = idx;
  startAutoSlide();
}

function nextTechSlide() {
  currentTechSlide.value = (currentTechSlide.value + 1) % techScreenshots.length;
}

function prevTechSlide() {
  currentTechSlide.value = (currentTechSlide.value - 1 + techScreenshots.length) % techScreenshots.length;
}

onMounted(() => {
  startCineAutoSlide();
  startAutoSlide();
});

onUnmounted(() => {
  stopCineAutoSlide();
  stopAutoSlide();
});
</script>
