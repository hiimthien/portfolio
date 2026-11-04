<template>
  <section id="experience" class="py-20 md:py-28 border-b border-white/[0.08] relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left">
        <div>
          <div class="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            {{ isEn ? 'Career' : 'Sự Nghiệp' }}
          </div>
          <h2 class="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            {{ isEn ? 'Work Experience' : 'Kinh Nghiệm Làm Việc' }}
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md md:text-right">
          {{ isEn
            ? 'Production software engineering at TTR Group and software engineering foundation training.'
            : 'Kinh nghiệm phát triển phần mềm thực chiến tại TTR Group và đào tạo kỹ sư phần mềm.'
          }}
        </p>
      </div>

      <!-- Clean Timeline List -->
      <div class="space-y-12 text-left">
        <!-- 1. TTR Group -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 pb-12 border-b border-white/[0.08]">
          <div class="md:col-span-4 space-y-2">
            <div class="text-base font-bold text-white font-mono">
              {{ cvData.experiences[0].period }}
            </div>
            <div class="text-xs text-slate-400">
              {{ cvData.experiences[0].location }}
            </div>
            <span class="inline-block text-[11px] px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-medium">
              {{ isEn ? cvData.experiences[0].type.en : cvData.experiences[0].type.vi }}
            </span>
          </div>

          <div class="md:col-span-8 space-y-4">
            <div>
              <h3 class="font-display font-extrabold text-2xl text-white">
                {{ cvData.experiences[0].company }}
              </h3>
              <p class="text-sm font-semibold text-teal-400 mt-1">
                {{ isEn ? cvData.experiences[0].role.en : cvData.experiences[0].role.vi }}
              </p>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ isEn ? cvData.experiences[0].summary.en : cvData.experiences[0].summary.vi }}
            </p>

            <ul class="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-300">
              <li
                v-for="(point, pIdx) in (isEn ? cvData.experiences[0].points.en : cvData.experiences[0].points.vi)"
                :key="pIdx"
                class="flex items-start gap-2.5 leading-relaxed"
              >
                <span class="text-teal-400 font-bold select-none mt-0.5">&bull;</span>
                <span>{{ point }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-1.5 pt-2">
              <span
                v-for="tech in cvData.experiences[0].technologies"
                :key="tech"
                class="text-xs px-2.5 py-1 rounded bg-[#0b101c] text-slate-300 border border-white/[0.06] font-mono"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- 2. TMA Solutions -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          <div class="md:col-span-4 space-y-2">
            <div class="text-sm font-bold text-slate-300 font-mono">
              {{ cvData.experiences[1].period }}
            </div>
            <div class="text-xs text-slate-500">
              {{ cvData.experiences[1].location }}
            </div>
            <span class="inline-block text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-400 border border-white/[0.06] font-medium">
              {{ isEn ? cvData.experiences[1].type.en : cvData.experiences[1].type.vi }}
            </span>
          </div>

          <div class="md:col-span-8 space-y-4">
            <div>
              <h3 class="font-display font-bold text-xl text-slate-200">
                {{ cvData.experiences[1].company }}
              </h3>
              <p class="text-sm text-slate-400 mt-0.5">
                {{ isEn ? cvData.experiences[1].role.en : cvData.experiences[1].role.vi }}
              </p>
            </div>

            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {{ isEn ? cvData.experiences[1].summary.en : cvData.experiences[1].summary.vi }}
            </p>

            <ul class="space-y-2 text-xs sm:text-sm text-slate-400">
              <li
                v-for="(point, pIdx) in (isEn ? cvData.experiences[1].points.en : cvData.experiences[1].points.vi)"
                :key="pIdx"
                class="flex items-start gap-2.5 leading-relaxed"
              >
                <span class="text-slate-500 font-bold select-none mt-0.5">&bull;</span>
                <span>{{ point }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-1.5 pt-2">
              <span
                v-for="tech in cvData.experiences[1].technologies"
                :key="tech"
                class="text-xs px-2.5 py-1 rounded bg-[#0b101c] text-slate-400 border border-white/[0.06] font-mono"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';
import { cvData } from '../data/cvData';

const { isEn } = useLanguage();
</script>
