<template>
  <section id="about" class="text-left space-y-4">
    <div>
      <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
        {{ t('hero.name') }}
      </h1>
      <p class="text-stone-600 text-base mt-1">
        {{ t('hero.role') }}
      </p>
    </div>

    <p class="text-stone-800 text-[16.5px] leading-relaxed">
      {{ t('hero.bio') }}
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
        {{ t('hero.downloadCv') }}
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

const { t } = useLanguage();
</script>
