<template>
  <section id="contact" class="text-left space-y-4">
    <div>
      <h2 class="text-xl font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2">
        {{ t('contact.title') }}
      </h2>
    </div>

    <p class="text-[16px] text-stone-800 leading-relaxed">
      {{ t('contact.desc') }}
    </p>

    <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15.5px]">
      <a
        href="mailto:thiencao.work@gmail.com"
        class="underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 hover:text-emerald-700 font-medium"
      >
        thiencao.work@gmail.com
      </a>
      <a
        href="https://github.com/hiimthien"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 hover:text-emerald-700 font-medium"
      >
        github.com/hiimthien ↗
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
</script>
