<template>
  <section id="skills" class="py-20 md:py-28 border-b border-white/[0.08] relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left">
        <div>
          <div class="text-xs font-mono text-teal-400 mb-2">
            &lt;{{ isEn ? 'technical-competencies' : 'nang-luc-chuyen-mon' }} /&gt;
          </div>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {{ isEn ? 'Technical Competencies' : 'Năng Lực Kỹ Thuật' }}
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md md:text-right font-mono">
          {{ isEn ? 'Grouped by engineering capabilities across backend, database, frontend, and tooling.' : 'Phân loại theo năng lực kỹ thuật thực tế: backend, database, frontend và công cụ tích hợp.' }}
        </p>
      </div>

      <!-- Asymmetric Architectural Layout: Left (Primary Backend Focus) vs Right (Database, Frontend, Tools) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 text-left items-start">
        <!-- Left Column: Primary Backend Focus (5 cols) -->
        <div class="lg:col-span-5 bg-[#0a0f1d] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
          <div class="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div class="flex items-center gap-2.5">
              <span class="w-2 h-2 rounded-full bg-teal-400"></span>
              <h3 class="font-display font-bold text-lg text-white">
                {{ isEn ? cvData.skillCategories[0].title.en : cvData.skillCategories[0].title.vi }}
              </h3>
            </div>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 font-semibold uppercase">
              Core Focus
            </span>
          </div>

          <div class="space-y-5">
            <div
              v-for="(item, idx) in cvData.skillCategories[0].items"
              :key="item.name"
              class="group pb-4 border-b border-white/[0.04] last:border-b-0 last:pb-0"
            >
              <div class="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                <span class="font-mono text-sm font-semibold text-slate-100 group-hover:text-teal-300 transition">
                  {{ item.name }}
                </span>
                <span
                  v-if="item.context"
                  class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080d17] text-teal-300/90 border border-teal-500/20"
                >
                  {{ isEn ? item.context.en : item.context.vi }}
                </span>
                <span v-else class="text-[10px] font-mono text-slate-500">0{{ idx + 1 }}</span>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed font-sans">
                {{ isEn ? item.description.en : item.description.vi }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Structured Triad without heavy cards (7 cols) -->
        <div class="lg:col-span-7 space-y-8">
          <!-- 1. Database & Background Processing -->
          <div class="pb-7 border-b border-white/[0.06] space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-teal-400 font-bold">// 02</span>
                <h3 class="font-display font-bold text-base text-white">
                  {{ isEn ? cvData.skillCategories[1].title.en : cvData.skillCategories[1].title.vi }}
                </h3>
              </div>
              <span class="text-[11px] font-mono text-slate-500">MySQL &middot; Redis &middot; Queues</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="item in cvData.skillCategories[1].items"
                :key="item.name"
                class="p-3.5 rounded-xl bg-[#0b101c] border border-white/[0.04] hover:border-white/[0.1] transition space-y-1"
              >
                <div class="font-mono text-xs font-bold text-slate-200">
                  {{ item.name }}
                </div>
                <p class="text-[11px] text-slate-400 leading-relaxed font-sans">
                  {{ isEn ? item.description.en : item.description.vi }}
                </p>
              </div>
            </div>
          </div>

          <!-- 2. Frontend Development -->
          <div class="pb-7 border-b border-white/[0.06] space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-teal-400 font-bold">// 03</span>
                <h3 class="font-display font-bold text-base text-white">
                  {{ isEn ? cvData.skillCategories[2].title.en : cvData.skillCategories[2].title.vi }}
                </h3>
              </div>
              <span class="text-[11px] font-mono text-slate-500">Vue 3 &middot; Pinia &middot; TypeScript</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="item in cvData.skillCategories[2].items"
                :key="item.name"
                class="p-3.5 rounded-xl bg-[#0b101c] border border-white/[0.04] hover:border-white/[0.1] transition space-y-1"
              >
                <div class="font-mono text-xs font-bold text-slate-200">
                  {{ item.name }}
                </div>
                <p class="text-[11px] text-slate-400 leading-relaxed font-sans">
                  {{ isEn ? item.description.en : item.description.vi }}
                </p>
              </div>
            </div>
          </div>

          <!-- 3. Tools & Integrations -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-teal-400 font-bold">// 04</span>
                <h3 class="font-display font-bold text-base text-white">
                  {{ isEn ? cvData.skillCategories[3].title.en : cvData.skillCategories[3].title.vi }}
                </h3>
              </div>
              <span class="text-[11px] font-mono text-slate-500">TikTok Shop &middot; MinIO &middot; Docker</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="item in cvData.skillCategories[3].items"
                :key="item.name"
                class="p-3.5 rounded-xl bg-[#0b101c] border border-white/[0.04] hover:border-white/[0.1] transition space-y-1"
              >
                <div class="font-mono text-xs font-bold text-slate-200">
                  {{ item.name }}
                </div>
                <p class="text-[11px] text-slate-400 leading-relaxed font-sans">
                  {{ isEn ? item.description.en : item.description.vi }}
                </p>
              </div>
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
