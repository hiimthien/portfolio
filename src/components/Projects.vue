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

      <!-- Demo placeholder -->
      <div class="aspect-video w-full rounded-md bg-stone-100 border border-stone-200 overflow-hidden flex items-center justify-center text-stone-400 text-xs sm:text-sm">
        <img
          src="/images/cinereserve-demo.gif"
          alt="CineReserve Demo"
          class="w-full h-full object-cover"
          onerror="this.style.display='none'"
        />
        <span class="p-4 text-center">Demo GIF placeholder (/images/cinereserve-demo.gif)</span>
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
    <article class="space-y-4 pt-4 border-t border-stone-200">
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

      <!-- Demo placeholder -->
      <div class="aspect-video w-full rounded-md bg-stone-100 border border-stone-200 overflow-hidden flex items-center justify-center text-stone-400 text-xs sm:text-sm">
        <img
          src="/images/techshop-demo.gif"
          alt="TechShop Demo"
          class="w-full h-full object-cover"
          onerror="this.style.display='none'"
        />
        <span class="p-4 text-center">Demo GIF placeholder (/images/techshop-demo.gif)</span>
      </div>

      <!-- Key details -->
      <div class="text-[16px] text-stone-800 space-y-3 leading-relaxed">
        <ul class="list-disc pl-5 space-y-1 text-stone-700 text-[15.5px]">
          <li v-if="!isEn">Sản phẩm có nhiều biến thể (màu, dung lượng), giỏ hàng, mã giảm giá.</li>
          <li v-else>Multi-variant products (color, capacity), shopping cart, and coupon discounts.</li>

          <li v-if="!isEn">Thanh toán VNPay và COD, đăng nhập bằng Google.</li>
          <li v-else>VNPay and COD checkout, Google OAuth login.</li>

          <li v-if="!isEn">Tra cứu bảo hành theo mã phiếu hoặc số serial.</li>
          <li v-else>Warranty lookup by ticket code or device serial number.</li>

          <li v-if="!isEn">Trang admin quản lý sản phẩm, đơn hàng, bảo hành và có thống kê doanh thu.</li>
          <li v-else>Admin dashboard to manage products, orders, warranties, and review revenue metrics.</li>

          <li v-if="!isEn">Khi đặt hàng, trừ kho trong transaction để không bán vượt số lượng tồn.</li>
          <li v-else>Stock deduction executed inside database transactions to prevent overselling.</li>

          <li v-if="!isEn">Có 16 test PHPUnit cho backend và 4 test Vitest cho frontend.</li>
          <li v-else>Covered by 16 backend PHPUnit tests and 4 frontend Vitest tests.</li>
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
import { useLanguage } from '../composables/useLanguage';

const { isEn } = useLanguage();
</script>
