<template>
  <section id="experience" class="text-left space-y-6">
    <div>
      <h2 class="text-xl font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2">
        {{ isEn ? 'Experience' : 'Kinh nghiệm' }}
      </h2>
    </div>

    <article class="space-y-3">
      <div>
        <h3 class="text-lg font-semibold text-stone-900">
          TTR Group: Junior PHP / Full-stack Developer
          <span class="text-sm font-normal text-stone-500 font-mono">
            ({{ isEn ? 'Sep 2025 – Present' : '09/2025 – nay' }})
          </span>
        </h3>
        <p class="text-stone-600 text-[15.5px] mt-1">
          {{ isEn
            ? 'Context: internal e-commerce management platform, in charge of [my responsibilities].'
            : 'Bối cảnh: hệ thống quản lý bán hàng thương mại điện tử nội bộ, mình phụ trách [phần việc của tôi].'
          }}
        </p>
      </div>

      <ul class="list-disc pl-5 space-y-1.5 text-stone-800 text-[15.5px] leading-relaxed">
        <li v-if="!isEn">
          Viết và bảo trì API và các trang quản trị nội bộ bằng CodeIgniter 4 và Vue 3.
        </li>
        <li v-else>
          Develop and maintain RESTful APIs and internal admin dashboards using CodeIgniter 4 and Vue 3.
        </li>

        <li v-if="!isEn">
          Làm phần nhận webhook từ TikTok Shop: kiểm tra chữ ký và tránh xử lý trùng một đơn.
        </li>
        <li v-else>
          Handle TikTok Shop webhooks: signature verification and event deduplication to avoid double-processing.
        </li>

        <li v-if="!isEn">
          Dùng Redis queue để chạy các tác vụ nặng như đồng bộ sản phẩm hàng loạt, có thử lại khi lỗi.
        </li>
        <li v-else>
          Implement Redis queue workers for heavy background tasks like bulk product syncing with retry logic.
        </li>

        <li v-if="!isEn">
          Làm chức năng đổi/trả hàng gồm nhiều bước duyệt (CodeIgniter 4 và Vue 3 + Pinia).
        </li>
        <li v-else>
          Build return/refund workflow with multi-step approval in CodeIgniter 4 and reactive UI with Vue 3 and Pinia.
        </li>

        <li v-if="!isEn">
          Sửa các query chậm và lỗi N+1 trên MySQL. <span class="italic text-stone-500">[thêm số liệu nếu có]</span>
        </li>
        <li v-else>
          Optimize MySQL queries and resolve N+1 bottlenecks. <span class="italic text-stone-500">[add metrics if available]</span>
        </li>

        <li v-if="!isEn">
          Dùng MinIO lưu ảnh và gửi cảnh báo lỗi qua Telegram bot.
        </li>
        <li v-else>
          Store media assets with MinIO object storage and dispatch error alerts via Telegram bot.
        </li>
      </ul>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { isEn } = useLanguage();
</script>
