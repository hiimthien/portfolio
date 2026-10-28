<template>
  <section id="projects" class="py-20 md:py-28 border-b border-white/[0.08] bg-[#070b13] relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 text-left">
        <div>
          <div class="text-xs font-mono text-teal-400 mb-2">
            &lt;{{ isEn ? 'featured-work' : 'du-an-tieu-bieu' }} /&gt;
          </div>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {{ isEn ? 'Featured Project' : 'Dự Án Tiêu Biểu' }}
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md md:text-right font-mono">
          {{ isEn ? 'Laravel 11 · Vue 3 TypeScript · Redis · WebSockets · Docker' : 'Laravel 11 · Vue 3 TypeScript · Redis · WebSockets · Docker' }}
        </p>
      </div>

      <!-- Centerpiece Container: Product Showcase -->
      <div class="bg-[#0b101c] border border-white/[0.08] rounded-2xl sm:rounded-3xl overflow-hidden text-left shadow-2xl">
        <!-- Visual Presentation: Honest Architecture & Concurrency Workflow Blueprint -->
        <div class="p-6 sm:p-8 bg-[#060912] border-b border-white/[0.08] relative">
          <!-- Frame Header -->
          <div class="flex flex-wrap items-center justify-between pb-5 border-b border-white/[0.06] text-xs font-mono gap-2">
            <div class="flex items-center gap-2 text-slate-300">
              <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span class="font-semibold">// CineReserve Architecture &amp; Concurrency Workflow</span>
            </div>
            <div class="flex items-center gap-2 text-slate-400 text-[11px]">
              <span class="px-2 py-0.5 rounded bg-slate-900 border border-white/[0.08] text-teal-400 font-mono">Verified Codebase</span>
              <span class="hidden sm:inline">&middot;</span>
              <span class="text-slate-500 hidden sm:inline">Awaiting UI Screenshot</span>
            </div>
          </div>

          <!-- Architectural Workflow Diagram (Honest Visual Representation of Actual Code) -->
          <div class="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <!-- Stage 1: Client Layer -->
            <div class="p-4 rounded-xl bg-[#0a0f1d] border border-white/[0.06] space-y-2">
              <div class="text-teal-400 font-bold flex items-center justify-between">
                <span>01. CLIENT LAYER</span>
                <span class="text-[10px] text-slate-500">Vue 3</span>
              </div>
              <div class="text-slate-200 font-semibold text-[11px]">User Selects Seat</div>
              <p class="text-slate-400 text-[11px] font-sans leading-relaxed">
                Client issues HTTP POST to request seat hold; starts 10-minute countdown timer in Pinia store.
              </p>
            </div>

            <!-- Stage 2: Redis Memory Lock -->
            <div class="p-4 rounded-xl bg-[#0a0f1d] border border-teal-500/20 space-y-2">
              <div class="text-teal-300 font-bold flex items-center justify-between">
                <span>02. REDIS LOCK</span>
                <span class="text-[10px] text-teal-400">Cache::add</span>
              </div>
              <div class="text-slate-200 font-semibold text-[11px]">Atomic Hold (600s TTL)</div>
              <p class="text-slate-400 text-[11px] font-sans leading-relaxed">
                Executes <code class="text-teal-300">Cache::add</code> with key <code class="text-slate-300">seat:{id}:holder</code>. Rejects concurrent attempts with 422 without DB locks.
              </p>
            </div>

            <!-- Stage 3: Real-Time Broadcast -->
            <div class="p-4 rounded-xl bg-[#0a0f1d] border border-white/[0.06] space-y-2">
              <div class="text-teal-400 font-bold flex items-center justify-between">
                <span>03. WEBSOCKET</span>
                <span class="text-[10px] text-slate-500">Reverb</span>
              </div>
              <div class="text-slate-200 font-semibold text-[11px]">SeatStatusUpdated</div>
              <p class="text-slate-400 text-[11px] font-sans leading-relaxed">
                Dispatches broadcast event over WebSockets via Laravel Reverb to notify all other connected browser sessions.
              </p>
            </div>

            <!-- Stage 4: Transaction & Checkout -->
            <div class="p-4 rounded-xl bg-[#0a0f1d] border border-white/[0.06] space-y-2">
              <div class="text-teal-400 font-bold flex items-center justify-between">
                <span>04. PERSISTENCE</span>
                <span class="text-[10px] text-slate-500">MySQL 8</span>
              </div>
              <div class="text-slate-200 font-semibold text-[11px]">DB::transaction</div>
              <p class="text-slate-400 text-[11px] font-sans leading-relaxed">
                Validates active session hold, writes Booking/BookingSeat in transaction, frees Redis lock, queues ticket email.
              </p>
            </div>
          </div>

          <!-- Caption & Honest Verification Note -->
          <div class="pt-3 border-t border-white/[0.04] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
            <span class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>Based on <code class="text-slate-300">SeatLockingService.php</code> implementation in repository</span>
            </span>
            <span class="text-slate-500">
              {{ isEn ? 'Real browser screenshot slot ready: /images/cinereserve-preview.webp' : 'Vị trí sẵn sàng nạp ảnh chụp thực tế: /images/cinereserve-preview.webp' }}
            </span>
          </div>
        </div>

        <!-- Project Details & Engineering Decisions -->
        <div class="p-6 sm:p-9 space-y-8">
          <!-- Top Row: Name, Tagline & GitHub CTA -->
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div class="space-y-1.5">
              <div class="flex flex-wrap items-center gap-2.5">
                <h3 class="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  {{ cvData.featuredProject.name }}
                </h3>
                <span class="text-xs font-mono px-2.5 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/25 font-semibold">
                  {{ isEn ? cvData.featuredProject.category.en : cvData.featuredProject.category.vi }}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 font-mono">
                {{ isEn ? cvData.featuredProject.tagline.en : cvData.featuredProject.tagline.vi }}
              </p>
            </div>

            <!-- GitHub Action Button (Only destination that genuinely exists) -->
            <a
              :href="cvData.featuredProject.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm font-mono transition shrink-0 shadow-sm"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub Repository ↗</span>
            </a>
          </div>

          <!-- Problem Statement & Description -->
          <div class="space-y-2">
            <h4 class="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              {{ isEn ? '// Engineering Motivation & Architecture Scope' : '// Mục tiêu kỹ thuật & Phạm vi kiến trúc' }}
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-sans">
              {{ isEn ? cvData.featuredProject.description.en : cvData.featuredProject.description.vi }}
            </p>
          </div>

          <!-- Stack Tags -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tech in cvData.featuredProject.technologies"
              :key="tech"
              class="text-xs font-mono px-2.5 py-1 rounded bg-[#080d17] text-slate-300 border border-white/[0.08]"
            >
              {{ tech }}
            </span>
          </div>

          <!-- 3 Concise Engineering Highlights based strictly on verified code -->
          <div class="space-y-4 pt-2">
            <h4 class="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              {{ isEn ? '// Core Engineering Decisions' : '// Các quyết định kỹ thuật cốt lõi' }}
            </h4>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                v-for="(hl, hIdx) in cvData.featuredProject.highlights.slice(0, 3)"
                :key="hIdx"
                class="p-4 rounded-xl bg-[#080d17] border border-white/[0.06] space-y-2.5"
              >
                <div class="text-xs font-mono font-bold text-teal-300 flex items-center gap-1.5">
                  <span class="text-slate-500">0{{ hIdx + 1 }}.</span>
                  <span>{{ isEn ? hl.title.en : hl.title.vi }}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed font-sans">
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
