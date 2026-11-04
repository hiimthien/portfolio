<template>
  <section id="about" class="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/[0.08] relative overflow-hidden bg-[#080c14]">
    <!-- Subtle ambient lighting -->
    <div class="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/[0.04] blur-[120px] pointer-events-none rounded-full"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="max-w-3xl text-left space-y-6">
        <!-- Status Pill -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{{ isEn ? 'Available for Full-time Roles' : 'Sẵn sàng cho cơ hội việc làm mới' }}</span>
          <span class="text-slate-600">&bull;</span>
          <span class="text-slate-400">Ho Chi Minh City</span>
        </div>

        <!-- Headline -->
        <div class="space-y-3">
          <h1 class="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.1]">
            Cao Lương Thiện
          </h1>
          <p class="text-lg sm:text-xl text-teal-400 font-medium">
            {{ isEn ? 'Software Engineer · Backend & Full-Stack Developer' : 'Kỹ sư phần mềm · Lập trình viên Backend & Full-Stack' }}
          </p>
        </div>

        <!-- Human, Grounded Bio -->
        <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
          {{ isEn
            ? "I specialize in backend architecture with PHP (Laravel 11, FrankenPHP Octane, CodeIgniter 4) and modern frontends with Vue 3 and Nuxt 3. With 1+ year of production e-commerce experience at TTR Group, I focus on solving high-concurrency race conditions, building resilient APIs, and crafting clean, maintainable systems with automated testing."
            : "Tôi chuyên về kiến trúc backend với PHP (Laravel 11, FrankenPHP Octane, CodeIgniter 4) kết hợp frontend hiện đại Vue 3 và Nuxt 3. Với hơn 1 năm kinh nghiệm thực chiến e-commerce tại TTR Group, tôi tập trung vào giải quyết bài toán chống trùng concurrency, xây dựng API hiệu năng cao và duy trì codebase sạch với kiểm thử tự động."
          }}
        </p>

        <!-- Tech Pill Strip -->
        <div class="flex flex-wrap items-center gap-2 pt-1">
          <span
            v-for="tech in ['PHP 8.3', 'Laravel 11', 'FrankenPHP Octane', 'Vue 3', 'Nuxt 3', 'PostgreSQL', 'Redis', 'Docker']"
            :key="tech"
            class="px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08] text-xs font-mono"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Primary CTA Buttons -->
        <div class="flex flex-wrap items-center gap-3 pt-3">
          <a
            href="#projects"
            class="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm font-medium transition flex items-center gap-2 shadow-sm"
          >
            <span>{{ isEn ? 'View Projects' : 'Xem các dự án' }}</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </a>

          <a
            :href="cvData.personal.pdfResumeUrl"
            download="CV_Cao_Luong_Thien_PHP_Developer.pdf"
            class="px-4 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 font-medium text-xs sm:text-sm border border-white/[0.08] hover:border-slate-500 transition flex items-center gap-2"
          >
            <svg class="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span>{{ isEn ? 'Download CV (PDF)' : 'Tải CV (PDF)' }}</span>
          </a>

          <a
            :href="cvData.personal.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-white text-xs sm:text-sm font-medium border border-white/[0.08] transition flex items-center gap-2"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <!-- Quick Highlights Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-14 text-left">
        <div class="p-5 rounded-xl bg-[#0c121e] border border-white/[0.06] hover:border-white/[0.12] transition space-y-1.5">
          <div class="text-xs font-mono text-teal-400 font-semibold">01 / Concurrency &amp; Locks</div>
          <div class="text-sm font-semibold text-white">Two-Phase Locking (RAM + DB)</div>
          <p class="text-xs text-slate-400 leading-relaxed">
            {{ isEn ? 'Redis atomic locks (SET NX EX) and MySQL pessimistic locking to prevent race condition seat double-booking in CineReserve.' : 'Áp dụng Redis atomic lock và khóa bi quan MySQL ngăn chặn hoàn toàn race condition trùng ghế trong CineReserve.' }}
          </p>
        </div>

        <div class="p-5 rounded-xl bg-[#0c121e] border border-white/[0.06] hover:border-white/[0.12] transition space-y-1.5">
          <div class="text-xs font-mono text-teal-400 font-semibold">02 / High-Throughput SaaS</div>
          <div class="text-sm font-semibold text-white">FrankenPHP Octane &amp; PostgreSQL</div>
          <p class="text-xs text-slate-400 leading-relaxed">
            {{ isEn ? 'Asynchronous worker runtime keeping framework bootstrap in memory, power-charging ConsultFlow consultation booking.' : 'Vận hành Octane worker mode giữ app trong RAM, đem lại tốc độ phản hồi cực nhanh cho nền tảng SaaS ConsultFlow.' }}
          </p>
        </div>

        <div class="p-5 rounded-xl bg-[#0c121e] border border-white/[0.06] hover:border-white/[0.12] transition space-y-1.5">
          <div class="text-xs font-mono text-teal-400 font-semibold">03 / Production Experience</div>
          <div class="text-sm font-semibold text-white">TTR Group (1+ Year)</div>
          <p class="text-xs text-slate-400 leading-relaxed">
            {{ isEn ? 'Developing enterprise e-commerce backends: TikTok Shop webhook deduplication, Redis queue workers, and MySQL query optimization.' : 'Phát triển backend e-commerce: xử lý webhook TikTok Shop, hàng đợi nền Redis và tối ưu truy vấn MySQL.' }}
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
