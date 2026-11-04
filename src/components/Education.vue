<template>
  <section id="education" class="py-16 md:py-24 border-b border-white/[0.08] relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 text-left items-baseline">
        <!-- Left: Section Title (4 cols) -->
        <div class="md:col-span-4">
          <div class="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1.5">
            {{ isEn ? 'Education' : 'Học Vấn' }}
          </div>
          <h2 class="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
            {{ isEn ? 'Academic Background' : 'Nền Tảng Đào Tạo' }}
          </h2>
        </div>

        <!-- Right: Content (8 cols) -->
        <div class="md:col-span-8 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/[0.06]">
            <div>
              <h3 class="font-display font-bold text-xl text-white">
                {{ cvData.education.institution }}
              </h3>
              <p class="text-sm font-semibold text-teal-400 mt-1">
                {{ isEn ? cvData.education.degree.en : cvData.education.degree.vi }}
              </p>
            </div>

            <div class="flex sm:flex-col items-center sm:items-end justify-between text-xs gap-1 text-slate-400 shrink-0 font-mono">
              <span class="px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 font-semibold">
                GPA: {{ cvData.education.gpa }}
              </span>
              <span class="text-slate-500 text-[11px]">{{ cvData.education.period }}</span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {{ isEn ? cvData.education.description.en : cvData.education.description.vi }}
          </p>
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
