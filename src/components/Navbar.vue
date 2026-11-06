<template>
  <header class="flex items-center justify-between pb-6 sm:pb-8 text-sm text-stone-500">
    <a href="#about" class="text-stone-900 font-medium hover:text-emerald-700">
      {{ t('nav.name') }}
    </a>

    <!-- Minimal Language Switcher -->
    <div class="flex items-center space-x-1.5 text-xs font-mono">
      <button
        @click="setLanguage('vi')"
        class="transition px-1 py-0.5"
        :class="!isEn ? 'text-stone-900 font-bold underline underline-offset-4' : 'text-stone-400 hover:text-stone-700'"
      >
        VI
      </button>
      <span class="text-stone-300">/</span>
      <button
        @click="setLanguage('en')"
        class="transition px-1 py-0.5"
        :class="isEn ? 'text-stone-900 font-bold underline underline-offset-4' : 'text-stone-400 hover:text-stone-700'"
      >
        EN
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { isEn, setLanguage, t } = useLanguage();
</script>
