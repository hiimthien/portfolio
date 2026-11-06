<template>
  <section id="experience" class="text-left space-y-6">
    <div>
      <h2 class="text-xl font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2">
        {{ t('experience.title') }}
      </h2>
    </div>

    <!-- 1. TTR Group -->
    <article class="space-y-3">
      <div>
        <h3 class="text-lg font-semibold text-stone-900">
          {{ t('experience.ttr.company') }}: {{ t('experience.ttr.role') }}
          <span class="text-sm font-normal text-stone-500 font-mono">
            ({{ t('experience.ttr.period') }})
          </span>
        </h3>
        <p class="text-stone-600 text-[15px] mt-0.5">
          <strong class="font-medium text-stone-700">{{ t('experience.projectLabel') }}</strong> {{ t('experience.ttr.project') }}
        </p>
      </div>

      <ul class="list-disc pl-5 space-y-2 text-stone-800 text-[15.5px] leading-relaxed">
        <li v-for="(bullet, idx) in tm<string[]>('experience.ttr.bullets')" :key="idx">
          {{ bullet }}
        </li>
      </ul>

      <div class="text-xs sm:text-sm text-stone-600 pt-1">
        <span class="font-medium text-stone-800">{{ t('experience.stackLabel') }}</span> {{ t('experience.ttr.stack') }}
      </div>
    </article>

    <!-- 2. Mandatory Military Service -->
    <article class="space-y-1.5 pt-5 border-t border-stone-200">
      <div class="flex flex-wrap items-baseline justify-between gap-2">
        <h3 class="text-base font-semibold text-stone-900">
          {{ t('experience.military.title') }}
        </h3>
        <span class="text-sm font-normal text-stone-500 font-mono">
          {{ t('experience.military.period') }}
        </span>
      </div>
      <p class="text-stone-600 text-[15px]">
        {{ t('experience.military.desc') }}
      </p>
    </article>

    <!-- 3. TMA Solutions -->
    <article class="space-y-3 pt-5 border-t border-stone-200">
      <div>
        <h3 class="text-lg font-semibold text-stone-900">
          {{ t('experience.tma.title') }}
          <span class="text-sm font-normal text-stone-500 font-mono">
            ({{ t('experience.tma.period') }})
          </span>
        </h3>
        <p class="text-stone-600 text-[15px] mt-0.5">
          <strong class="font-medium text-stone-700">{{ t('experience.roleLabel') }}</strong>
          {{ t('experience.tma.role') }}
        </p>
      </div>

      <ul class="list-disc pl-5 space-y-1.5 text-stone-800 text-[15.5px] leading-relaxed">
        <li v-for="(bullet, idx) in tm<string[]>('experience.tma.bullets')" :key="idx">
          {{ bullet }}
        </li>
      </ul>

      <div class="text-xs sm:text-sm text-stone-600 pt-1">
        <span class="font-medium text-stone-800">{{ t('experience.stackLabel') }}</span> {{ t('experience.tma.stack') }}
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { t, tm } = useLanguage();
</script>
