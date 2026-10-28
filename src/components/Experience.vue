<template>
  <section id="experience" class="py-20 md:py-28 border-b border-white/[0.08] relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left">
        <div>
          <div class="text-xs font-mono text-teal-400 mb-2">
            &lt;{{ isEn ? 'career-experience' : 'kinh-nghiem-lam-viec' }} /&gt;
          </div>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {{ isEn ? 'Work Experience' : 'Kinh Nghiệm Làm Việc' }}
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md md:text-right font-mono">
          {{ isEn ? 'Production software engineering at TTR Group and software engineering foundation training.' : 'Kinh nghiệm lập trình production tại TTR Group và đào tạo kỹ sư phần mềm nền tảng.' }}
        </p>
      </div>

      <!-- Editorial Timeline List -->
      <div class="space-y-14 text-left">
        <!-- 1. TTR Group (Primary Full-Time Production Role) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 pb-14 border-b border-white/[0.08]">
          <!-- Left Column: Dates & Period Badge (4 cols) -->
          <div class="md:col-span-4 space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
              <span class="text-base font-mono font-bold text-white tracking-tight">
                {{ cvData.experiences[0].period }}
              </span>
            </div>
            <div class="text-xs font-mono text-slate-400 pl-4.5">
              {{ cvData.experiences[0].location }}
            </div>
            <div class="pl-4.5 pt-1">
              <span class="text-[11px] font-mono px-2.5 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/25 font-semibold uppercase">
                {{ isEn ? cvData.experiences[0].type.en : cvData.experiences[0].type.vi }}
              </span>
            </div>
          </div>

          <!-- Right Column: Details & Engineering Outcomes (8 cols) -->
          <div class="md:col-span-8 space-y-5">
            <div>
              <div class="flex flex-wrap items-baseline gap-2.5">
                <h3 class="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {{ cvData.experiences[0].company }}
                </h3>
                <span class="text-xs font-mono text-slate-500">// Enterprise E-Commerce</span>
              </div>
              <p class="text-sm font-mono text-teal-400 font-semibold mt-1">
                {{ isEn ? cvData.experiences[0].role.en : cvData.experiences[0].role.vi }}
              </p>
            </div>

            <!-- Summary paragraph -->
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {{ isEn ? cvData.experiences[0].summary.en : cvData.experiences[0].summary.vi }}
            </p>

            <!-- Detailed Bullet Points with high legibility -->
            <ul class="space-y-3 pt-1 text-xs sm:text-sm text-slate-300">
              <li
                v-for="(point, pIdx) in (isEn ? cvData.experiences[0].points.en : cvData.experiences[0].points.vi)"
                :key="pIdx"
                class="flex items-start gap-3 leading-relaxed"
              >
                <span class="text-teal-400 font-mono text-xs select-none mt-1 shrink-0">&ndash;</span>
                <span>{{ point }}</span>
              </li>
            </ul>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span
                v-for="tech in cvData.experiences[0].technologies"
                :key="tech"
                class="text-[11px] font-mono px-2.5 py-1 rounded bg-[#0b101c] text-slate-300 border border-white/[0.06]"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- 2. TMA Solutions (Foundation Training) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          <!-- Left Column: Dates & Meta (4 cols) -->
          <div class="md:col-span-4 space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-slate-600"></span>
              <span class="text-sm font-mono font-bold text-slate-300">
                {{ cvData.experiences[1].period }}
              </span>
            </div>
            <div class="text-xs font-mono text-slate-500 pl-4">
              {{ cvData.experiences[1].location }}
            </div>
            <div class="pl-4 pt-1">
              <span class="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/[0.06]">
                {{ isEn ? cvData.experiences[1].type.en : cvData.experiences[1].type.vi }}
              </span>
            </div>
          </div>

          <!-- Right Column: Details (8 cols) -->
          <div class="md:col-span-8 space-y-4">
            <div>
              <div class="flex flex-wrap items-baseline gap-2.5">
                <h3 class="font-display font-bold text-xl sm:text-2xl text-slate-200 tracking-tight">
                  {{ cvData.experiences[1].company }}
                </h3>
                <span class="text-xs font-mono text-slate-500">// Quy Nhon Lab</span>
              </div>
              <p class="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                {{ isEn ? cvData.experiences[1].role.en : cvData.experiences[1].role.vi }}
              </p>
            </div>

            <!-- Summary -->
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              {{ isEn ? cvData.experiences[1].summary.en : cvData.experiences[1].summary.vi }}
            </p>

            <!-- Foundation Points -->
            <ul class="space-y-2 text-xs sm:text-sm text-slate-400">
              <li
                v-for="(point, pIdx) in (isEn ? cvData.experiences[1].points.en : cvData.experiences[1].points.vi)"
                :key="pIdx"
                class="flex items-start gap-2.5 leading-relaxed"
              >
                <span class="text-slate-600 font-mono text-xs select-none mt-0.5">&ndash;</span>
                <span>{{ point }}</span>
              </li>
            </ul>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span
                v-for="tech in cvData.experiences[1].technologies"
                :key="tech"
                class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0b101c] text-slate-400 border border-white/[0.04]"
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
