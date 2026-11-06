<template>
  <section id="education" class="text-left space-y-4">
    <div>
      <h2 class="text-xl font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2">
        {{ t('education.title') }}
      </h2>
    </div>

    <div class="text-[16px] text-stone-800 space-y-1.5 leading-relaxed">
      <div>
        <p class="font-medium text-stone-900">
          {{ t('education.degree') }}
          <span class="text-stone-500 font-normal text-sm font-mono">{{ t('education.period') }}</span>
        </p>
        <p class="text-stone-600 text-[15px]">
          {{ t('education.gpa') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
</script>
