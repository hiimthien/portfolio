<template>
  <section id="about" class="text-left space-y-4">
    <div>
      <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
        Cao Lương Thiện
      </h1>
      <p class="text-stone-600 text-base mt-1">
        Junior PHP Developer &middot; {{ isEn ? 'Thu Duc City, Ho Chi Minh City' : 'TP. Thủ Đức, TP. Hồ Chí Minh' }}
      </p>
    </div>

    <p class="text-stone-800 text-[16px] leading-relaxed">
      {{ isEn
        ? "Junior PHP Developer with 1 year of experience building e-commerce systems with third-party integrations (11 fulfillment providers, TikTok Shop) using CodeIgniter 4, Redis and MySQL. Strong in asynchronous processing, secure webhook handling and query optimization. Self-taught Laravel through two personal projects covering concurrency control, payments and real-time features. Seeking a Backend PHP / Laravel role."
        : "Lập trình viên PHP với 1 năm kinh nghiệm xây dựng hệ thống thương mại điện tử tích hợp đối tác thứ ba (11 đơn vị fulfillment, TikTok Shop) bằng CodeIgniter 4, Redis và MySQL. Thế mạnh về xử lý bất đồng bộ, webhook bảo mật và tối ưu hóa truy vấn cơ sở dữ liệu. Tự học và làm chủ Laravel qua 2 dự án cá nhân chuyên sâu về kiểm soát đồng thời (concurrency), thanh toán trực tuyến và tính năng thời gian thực. Định hướng tìm kiếm vị trí Backend PHP / Laravel."
      }}
    </p>

    <!-- Simple, clean inline links -->
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-sm text-stone-700">
      <a
        href="https://github.com/hiimthien"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 hover:text-emerald-700"
      >
        github.com/hiimthien ↗
      </a>
      <a
        href="/CV_Cao_Luong_Thien_PHP_Developer.pdf"
        download="CV_Cao_Luong_Thien_PHP_Developer.pdf"
        class="underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 hover:text-emerald-700 font-medium text-emerald-800"
      >
        {{ isEn ? 'Download CV (PDF)' : 'Tải CV (PDF)' }}
      </a>
      <a
        href="mailto:thiencao.work@gmail.com"
        class="underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 hover:text-emerald-700"
      >
        thiencao.work@gmail.com
      </a>
      <span class="text-stone-500 font-mono">
        (+84) 388 145 796
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { isEn } = useLanguage();
</script>
