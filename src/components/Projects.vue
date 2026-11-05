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

      <!-- Demo Image/GIF (chỉ hiện khi ảnh tồn tại và tải thành công) -->
      <div
        v-if="showCineDemo"
        class="aspect-video w-full rounded-md border border-stone-200 overflow-hidden bg-stone-100"
      >
        <img
          :src="'/images/cinereserve-demo.gif'"
          alt="CineReserve Demo"
          class="w-full h-full object-cover"
          @error="showCineDemo = false"
        />
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

        <p class="text-stone-600 text-[15px] italic">
          {{ isEn ? 'What I learned:' : 'Mình học được:' }} [1-2 câu của tôi]
        </p>
      </div>

      <!-- Plain Text Stack (No pills) -->
      <div class="text-xs sm:text-sm text-stone-600 pt-1">
        <span class="font-medium text-stone-800">Stack:</span> Laravel 11, Vue 3, TypeScript, Redis, MySQL, Docker
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

      <!-- Multi-Screenshot Showcase with Tabs & Auto-play -->
      <div class="space-y-2">
        <!-- Tab selector -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            v-for="(slide, idx) in techScreenshots"
            :key="slide.src"
            type="button"
            @click="selectTechSlide(idx)"
            :class="[
              'px-2.5 py-1 rounded-md text-xs font-medium transition-all whitespace-nowrap',
              currentTechSlide === idx
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
            ]"
          >
            {{ isEn ? slide.labelEn : slide.labelVi }}
          </button>
        </div>

        <!-- Frame -->
        <div class="aspect-video w-full rounded-md border border-stone-200 overflow-hidden bg-stone-100 shadow-sm relative group">
          <img
            :src="techScreenshots[currentTechSlide].src"
            :alt="techScreenshots[currentTechSlide].labelEn"
            class="w-full h-full object-cover transition-all duration-300"
          />
          <!-- Indicators dots -->
          <div class="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-stone-900/60 backdrop-blur-xs">
            <button
              v-for="(_, idx) in techScreenshots"
              :key="idx"
              type="button"
              @click="selectTechSlide(idx)"
              :class="[
                'h-1.5 rounded-full transition-all',
                currentTechSlide === idx ? 'bg-white w-3' : 'bg-white/50 hover:bg-white/80 w-1.5'
              ]"
              :aria-label="`Slide ${idx + 1}`"
            />
          </div>
        </div>
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

        <p class="text-stone-600 text-[15px] italic">
          {{ isEn ? 'What I learned:' : 'Mình học được:' }} [1-2 câu của tôi]
        </p>
      </div>

      <!-- Plain Text Stack (No pills) -->
      <div class="text-xs sm:text-sm text-stone-600 pt-1">
        <span class="font-medium text-stone-800">Stack:</span> Laravel 11, Vue 3, TypeScript, Pinia, MySQL
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../composables/useLanguage';

const { isEn } = useLanguage();

// Mặc định cho phép thử load, nếu ảnh chưa có thì @error sẽ gán false và ẩn hoàn toàn khung
const showCineDemo = ref(true);

const currentTechSlide = ref(0);
const techScreenshots = [
  {
    src: '/images/techshop-home.png',
    labelEn: 'Storefront Catalog',
    labelVi: 'Trang chủ & Danh mục',
  },
  {
    src: '/images/techshop-detail.png',
    labelEn: 'Product Details & Variants',
    labelVi: 'Chi tiết sản phẩm & Biến thể',
  },
  {
    src: '/images/techshop-vnpay.png',
    labelEn: 'VNPay Payment Success',
    labelVi: 'Thanh toán VNPay',
  },
];

let autoSlideTimer: ReturnType<typeof setInterval> | null = null;

function startAutoSlide() {
  stopAutoSlide();
  autoSlideTimer = setInterval(() => {
    currentTechSlide.value = (currentTechSlide.value + 1) % techScreenshots.length;
  }, 4000);
}

function stopAutoSlide() {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }
}

function selectTechSlide(idx: number) {
  currentTechSlide.value = idx;
  // Khởi động lại timer khi user bấm chọn
  startAutoSlide();
}

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>
