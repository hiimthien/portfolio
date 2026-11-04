<template>
  <section id="skills" class="py-20 md:py-28 border-b border-white/[0.08] relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left">
        <div>
          <div class="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            {{ isEn ? 'Expertise' : 'Chuyên Môn' }}
          </div>
          <h2 class="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            {{ isEn ? 'Technical Skills' : 'Kỹ Năng Chuyên Môn' }}
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md md:text-right">
          {{ isEn
            ? 'Core competencies across backend engineering, databases, frontend architecture, and testing.'
            : 'Các năng lực kỹ thuật thực tế về backend, cơ sở dữ liệu, frontend và kiểm thử tự động.'
          }}
        </p>
      </div>

      <!-- Clean 4-Category Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div
          v-for="category in cvData.skillCategories"
          :key="category.title.en"
          class="p-6 sm:p-7 rounded-2xl bg-[#0b101c] border border-white/[0.08] hover:border-white/[0.15] transition duration-300 space-y-5"
        >
          <div class="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <h3 class="font-display font-bold text-lg text-white">
              {{ isEn ? category.title.en : category.title.vi }}
            </h3>
            <span class="w-2 h-2 rounded-full bg-teal-400"></span>
          </div>

          <div class="space-y-4">
            <div
              v-for="item in category.items"
              :key="item.name"
              class="space-y-1 pb-3 border-b border-white/[0.04] last:border-b-0 last:pb-0"
            >
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-sm font-semibold text-slate-100 font-mono">
                  {{ item.name }}
                </span>
                <span
                  v-if="item.context"
                  class="text-[11px] px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 font-medium"
                >
                  {{ isEn ? item.context.en : item.context.vi }}
                </span>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                {{ isEn ? item.description.en : item.description.vi }}
              </p>
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
