<template>
  <section id="skills" class="text-left space-y-4">
    <div>
      <h2 class="text-xl font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2">
        {{ t('skills.title') }}
      </h2>
    </div>

    <div class="text-[15.5px] text-stone-800 space-y-2 leading-relaxed">
      <p>
        <strong class="font-medium text-stone-900">{{ t('skills.languagesLabel') }}</strong>
        {{ t('skills.languages') }}
      </p>
      <p>
        <strong class="font-medium text-stone-900">{{ t('skills.backendLabel') }}</strong>
        {{ t('skills.backend') }}
      </p>
      <p>
        <strong class="font-medium text-stone-900">{{ t('skills.frontendLabel') }}</strong>
        {{ t('skills.frontend') }}
      </p>
      <p>
        <strong class="font-medium text-stone-900">{{ t('skills.dbLabel') }}</strong>
        {{ t('skills.db') }}
      </p>
      <p>
        <strong class="font-medium text-stone-900">{{ t('skills.toolsLabel') }}</strong>
        {{ t('skills.tools') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
</script>
