<template>
  <section id="projects" class="py-20 md:py-28 border-b border-white/[0.08] bg-[#070b13] relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left">
        <div>
          <div class="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            {{ isEn ? 'Featured Work' : 'Dự Án Tiêu Biểu' }}
          </div>
          <h2 class="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            {{ isEn ? 'Projects & Architecture' : 'Dự Án & Kiến Trúc' }}
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md md:text-right">
          {{ isEn
            ? 'Production-grade full-stack systems demonstrating concurrency control, high-throughput runtimes, and resilient data flows.'
            : 'Các hệ thống full-stack giải quyết bài toán kiểm soát concurrency, kiến trúc chịu tải cao và toàn vẹn dữ liệu.'
          }}
        </p>
      </div>

      <!-- Spotlight Project 1: CineReserve -->
      <div class="bg-[#0b101c] border border-white/[0.08] rounded-2xl overflow-hidden text-left shadow-2xl mb-10">
        <!-- Interactive Architecture Flow Header -->
        <div class="p-6 sm:p-8 bg-[#080d17] border-b border-white/[0.08]">
          <div class="flex flex-wrap items-center justify-between pb-5 border-b border-white/[0.06] text-xs gap-2">
            <div class="flex items-center gap-2 text-slate-200 font-semibold">
              <span class="w-2 h-2 rounded-full bg-teal-400"></span>
              <span>CineReserve &middot; Concurrency &amp; Two-Phase Locking Flow</span>
            </div>
            <span class="text-slate-400 text-xs font-mono">Real-Time Seat Hold Pipeline</span>
          </div>

          <!-- 4-Stage Architectural Pipeline -->
          <div class="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-[#0b101c] border border-white/[0.06] space-y-1.5">
              <div class="text-teal-400 font-bold flex items-center justify-between font-mono">
                <span>01. CLIENT</span>
                <span class="text-slate-500 font-normal">Vue 3</span>
              </div>
              <div class="text-white font-semibold">Seat Selection</div>
              <p class="text-slate-400 leading-relaxed">
                User selects seat; client dispatches hold request and starts 10-minute hold countdown.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-[#0b101c] border border-teal-500/30 space-y-1.5">
              <div class="text-teal-300 font-bold flex items-center justify-between font-mono">
                <span>02. RAM LOCK</span>
                <span class="text-teal-400 font-normal">Redis</span>
              </div>
              <div class="text-white font-semibold">Atomic Hold (600s TTL)</div>
              <p class="text-slate-400 leading-relaxed">
                Executes atomic <code class="text-teal-300">SET NX EX</code>. Deflects concurrent attempts in ~1ms without database overhead.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-[#0b101c] border border-white/[0.06] space-y-1.5">
              <div class="text-teal-400 font-bold flex items-center justify-between font-mono">
                <span>03. WEBSOCKET</span>
                <span class="text-slate-500 font-normal">Reverb</span>
              </div>
              <div class="text-white font-semibold">Real-Time Broadcast</div>
              <p class="text-slate-400 leading-relaxed">
                Dispatches broadcast event over WebSockets to update other clients' seat maps instantly.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-[#0b101c] border border-white/[0.06] space-y-1.5">
              <div class="text-teal-400 font-bold flex items-center justify-between font-mono">
                <span>04. PERSISTENCE</span>
                <span class="text-slate-500 font-normal">MySQL 8</span>
              </div>
              <div class="text-white font-semibold">Pessimistic Checkout</div>
              <p class="text-slate-400 leading-relaxed">
                Finalizes booking inside a database transaction with <code class="text-teal-300">SELECT FOR UPDATE</code>.
              </p>
            </div>
          </div>
        </div>

        <!-- CineReserve Details -->
        <div class="p-6 sm:p-9 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div class="space-y-1.5">
              <div class="flex items-center gap-3">
                <h3 class="font-display font-black text-2xl sm:text-3xl text-white">
                  {{ cvData.featuredProject.name }}
                </h3>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-medium">
                  {{ isEn ? cvData.featuredProject.category.en : cvData.featuredProject.category.vi }}
                </span>
              </div>
              <p class="text-sm text-slate-300">
                {{ isEn ? cvData.featuredProject.tagline.en : cvData.featuredProject.tagline.vi }}
              </p>
            </div>

            <a
              :href="cvData.featuredProject.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm font-medium transition shrink-0"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub Codebase ↗</span>
            </a>
          </div>

          <p class="text-sm text-slate-300 leading-relaxed max-w-3xl">
            {{ isEn ? cvData.featuredProject.description.en : cvData.featuredProject.description.vi }}
          </p>

          <!-- Stack Badges -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tech in cvData.featuredProject.technologies"
              :key="tech"
              class="text-xs px-2.5 py-1 rounded bg-[#080d17] text-slate-300 border border-white/[0.08] font-mono"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Key Engineering Highlights -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div
              v-for="(hl, hIdx) in cvData.featuredProject.highlights"
              :key="hIdx"
              class="p-4 rounded-xl bg-[#080d17] border border-white/[0.06] space-y-2"
            >
              <div class="text-xs font-semibold text-teal-300 flex items-center gap-1.5">
                <span class="text-slate-500">0{{ hIdx + 1 }}.</span>
                <span>{{ isEn ? hl.title.en : hl.title.vi }}</span>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                {{ isEn ? hl.detail.en : hl.detail.vi }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Flagship Projects (ConsultFlow & TechShop) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
        <div
          v-for="project in cvData.otherProjects"
          :key="project.id"
          class="p-6 sm:p-8 rounded-2xl bg-[#0b101c] border border-white/[0.08] hover:border-teal-500/30 transition duration-300 flex flex-col justify-between shadow-xl"
        >
          <div class="space-y-6">
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-white/[0.06]">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-display font-extrabold text-xl sm:text-2xl text-white">
                    {{ project.name }}
                  </h3>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-medium">
                    {{ isEn ? project.category.en : project.category.vi }}
                  </span>
                </div>
                <p class="text-xs text-slate-400 mt-1">
                  {{ isEn ? project.tagline.en : project.tagline.vi }}
                </p>
              </div>

              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-teal-400 hover:text-teal-300 text-xs font-medium transition shrink-0 border border-white/[0.08]"
              >
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>Codebase ↗</span>
              </a>
            </div>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ isEn ? project.description.en : project.description.vi }}
            </p>

            <!-- Stack Tags -->
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-xs px-2.5 py-0.5 rounded bg-[#080d17] text-slate-300 border border-white/[0.08] font-mono"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Highlights -->
            <div class="space-y-3 pt-1">
              <div
                v-for="(hl, hIdx) in project.highlights"
                :key="hIdx"
                class="p-3.5 rounded-xl bg-[#080d17] border border-white/[0.06] space-y-1"
              >
                <div class="text-xs font-semibold text-teal-300 flex items-center gap-1.5">
                  <span class="text-slate-500">0{{ hIdx + 1 }}.</span>
                  <span>{{ isEn ? hl.title.en : hl.title.vi }}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                  {{ isEn ? hl.detail.en : hl.detail.vi }}
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
