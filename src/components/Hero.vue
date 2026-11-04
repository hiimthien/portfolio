<template>
  <section id="about" class="text-left space-y-4">
    <div>
      <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
        Cao Lương Thiện
      </h1>
      <p class="text-stone-600 text-base mt-1">
        Junior Backend Developer (PHP) &middot; {{ isEn ? 'Ho Chi Minh City' : 'TP. Hồ Chí Minh' }}
      </p>
    </div>

    <p class="text-stone-800 text-[16.5px] leading-relaxed">
      {{ isEn
        ? "I'm Thien, a PHP developer with over 1 year of experience. I currently work on backend (CodeIgniter 4) and Vue 3 interfaces at TTR Group. Outside work, I build personal projects with Laravel to learn more. I'm looking for a team environment to collaborate and grow faster."
        : "Mình là Thiện, lập trình viên PHP với hơn 1 năm kinh nghiệm. Hiện mình làm backend (CodeIgniter 4) và giao diện Vue 3 tại TTR Group. Ngoài giờ làm, mình làm các dự án riêng bằng Laravel để học thêm. Mình đang tìm một môi trường để làm việc cùng team và học nhanh hơn."
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
        GitHub ↗
      </a>
      <a
        href="/CV_Cao_Luong_Thien_PHP_Developer.pdf"
        download="CV_Cao_Luong_Thien_PHP_Developer.pdf"
        class="underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 hover:text-emerald-700"
      >
        {{ isEn ? 'Download CV (PDF)' : 'Tải CV (PDF)' }}
      </a>
      <a
        href="mailto:thiencao.work@gmail.com"
        class="underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 hover:text-emerald-700"
      >
        thiencao.work@gmail.com
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { isEn } = useLanguage();
</script>
