<template>
  <section id="about" class="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-white/[0.08] relative overflow-hidden bg-[#080c14]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <!-- Left: Oversized Editorial Typography & Identity (7 cols) -->
        <div class="lg:col-span-7 space-y-7 text-left">
          <!-- Kicker Tagline (Entrance Step 1) -->
          <div class="animate-hero-1 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/25 font-semibold">
              <span class="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>Junior PHP / Laravel Developer</span>
            </span>
            <span class="text-slate-600 font-sans">&bull;</span>
            <span class="text-slate-400">Thu Duc City, Ho Chi Minh City</span>
          </div>

          <!-- Monumental Name Headline (Entrance Step 2) -->
          <div class="animate-hero-2 space-y-2">
            <div class="text-xs font-mono tracking-widest uppercase text-slate-500">
              {{ isEn ? 'Software Engineer' : 'Kỹ sư phần mềm' }}
            </div>
            <h1 class="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-[-0.035em] text-white leading-[0.92]">
              Cao Lương<br/>
              <span class="text-slate-400 hover:text-white transition duration-300">Thiện</span>
            </h1>
            <div class="pt-2 text-sm sm:text-base font-mono text-teal-400/90 font-medium">
              Laravel 11 &middot; CodeIgniter 4 &middot; Vue 3 &middot; MySQL &middot; Redis
            </div>
          </div>

          <!-- Concise Pitch: 1+ year at TTR Group + transition to Laravel with CineReserve -->
          <p class="animate-hero-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            {{ isEn 
              ? 'Junior PHP Developer with 1+ year of professional software engineering experience developing e-commerce management backends using CodeIgniter 4, MySQL, and Vue 3 at TTR Group. Actively transitioning toward Junior Laravel Developer roles by mastering modern Laravel 11 architecture, Redis-backed atomic locks, and real-time WebSockets in CineReserve.'
              : 'Lập trình viên PHP Junior với hơn 1 năm kinh nghiệm thực tế phát triển backend hệ thống thương mại điện tử bằng CodeIgniter 4, MySQL và Vue 3 tại TTR Group. Đang chủ động chuyển tiếp sang các vị trí Junior Laravel Developer thông qua việc làm chủ kiến trúc Laravel 11, Redis atomic locks và WebSockets thời gian thực trong dự án CineReserve.'
            }}
          </p>

          <!-- Primary Actions (Entrance Step 3) -->
          <div class="animate-hero-3 flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              class="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm font-mono transition flex items-center gap-2 shadow-sm"
            >
              <span>{{ isEn ? 'Explore CineReserve (Laravel 11)' : 'Khám phá CineReserve (Laravel 11)' }}</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </a>

            <a
              :href="cvData.personal.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2.5 rounded-lg bg-[#0e1524] hover:bg-slate-800 text-slate-200 font-medium text-xs sm:text-sm border border-white/[0.08] hover:border-slate-600 transition flex items-center gap-2 font-mono"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a
              :href="cvData.personal.pdfResumeUrl"
              download="CV_Cao_Luong_Thien_PHP_Developer.pdf"
              class="px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 text-xs sm:text-sm font-medium transition flex items-center gap-1.5"
            >
              <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span>{{ isEn ? 'CV / Resume (PDF)' : 'Tải CV (PDF)' }}</span>
            </a>
          </div>
        </div>

        <!-- Right: Asymmetric Project Feature & Stack Brief (5 cols) -->
        <div class="lg:col-span-5 text-left animate-hero-3">
          <div class="bg-[#0b101c] border border-white/[0.08] rounded-2xl p-6 sm:p-7 space-y-6 relative overflow-hidden">
            <!-- Header coordinate -->
            <div class="flex items-center justify-between pb-4 border-b border-white/[0.06] text-xs font-mono text-slate-400">
              <span class="text-teal-400 font-semibold tracking-wider uppercase">// Featured Project</span>
              <span class="text-slate-500">Personal &middot; Laravel 11</span>
            </div>

            <!-- CineReserve Showcase Card in Hero -->
            <div class="space-y-4">
              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <h3 class="font-display font-extrabold text-xl text-white">
                    CineReserve
                  </h3>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 font-semibold">
                    Real-Time Booking
                  </span>
                </div>
                <p class="text-xs text-slate-400 font-sans leading-relaxed">
                  {{ isEn
                    ? 'Exploring real-time seat reservation with Redis atomic hold (Cache::add), Laravel Reverb WebSockets, and database transactions.'
                    : 'Nghiên cứu cơ chế giữ chỗ thời gian thực với khóa tạm thời Redis (Cache::add), WebSocket Laravel Reverb và database transactions.'
                  }}
                </p>
              </div>

              <!-- Tech Badges -->
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080d17] text-teal-300 border border-white/[0.06]">Laravel 11</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080d17] text-slate-300 border border-white/[0.06]">Redis 7</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080d17] text-slate-300 border border-white/[0.06]">Laravel Reverb</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080d17] text-slate-300 border border-white/[0.06]">Vue 3 TypeScript</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080d17] text-slate-300 border border-white/[0.06]">Docker Compose</span>
              </div>

              <!-- Production Foundation Contrast -->
              <div class="p-3.5 rounded-xl bg-[#080d17] border border-white/[0.04] space-y-1 text-xs">
                <div class="flex items-center justify-between font-mono text-[11px]">
                  <span class="text-slate-300 font-semibold">// Professional Background</span>
                  <span class="text-teal-400 font-bold">TTR Group</span>
                </div>
                <p class="text-slate-400 font-sans text-[11px] leading-relaxed">
                  1+ year maintaining enterprise e-commerce backends with PHP (CodeIgniter 4), MySQL indexing, TikTok Shop webhooks, and Vue 3.
                </p>
              </div>
            </div>

            <!-- Direct CTA to Projects Section -->
            <div class="pt-2 flex items-center justify-between text-xs font-mono">
              <a
                href="#projects"
                class="text-teal-400 hover:text-teal-300 font-medium flex items-center gap-1.5 transition group"
              >
                <span>{{ isEn ? 'Inspect Project Showcase' : 'Xem chi tiết dự án tiêu biểu' }}</span>
                <span class="group-hover:translate-x-1 transition">&rarr;</span>
              </a>
              <span class="text-[11px] text-slate-500">Architecture &amp; Highlights</span>
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
