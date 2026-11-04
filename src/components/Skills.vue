<template>
  <section id="skills" class="text-left space-y-4">
    <div>
      <h2 class="text-xl font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2">
        {{ isEn ? 'Skills' : 'Kỹ năng' }}
      </h2>
    </div>

    <!-- Đúng 3 dòng chữ, không card, không pill -->
    <div class="text-[16px] text-stone-800 space-y-2 leading-relaxed">
      <p>
        <strong class="font-medium text-stone-900">Backend:</strong> PHP, Laravel, CodeIgniter 4, MySQL, Redis
      </p>
      <p>
        <strong class="font-medium text-stone-900">Frontend:</strong> Vue 3, TypeScript, Tailwind CSS
      </p>
      <p>
        <strong class="font-medium text-stone-900">{{ isEn ? 'Tools:' : 'Công cụ:' }}</strong> Git, Docker, PHPUnit
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { isEn } = useLanguage();
</script>
