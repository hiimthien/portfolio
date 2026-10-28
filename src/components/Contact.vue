<template>
  <section id="contact" class="py-24 md:py-32 relative overflow-hidden text-left">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl space-y-8">
        <!-- Section Kicker -->
        <div class="text-xs font-mono text-teal-400">
          // {{ isEn ? 'OPEN FOR NEW OPPORTUNITIES' : 'SAN SANG CHO CO HOI MOI' }}
        </div>

        <!-- Memorable Headline -->
        <h2 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-0.03em] leading-tight">
          {{ isEn ? "Let's build something solid together." : 'Sẵn sàng cho các thử thách kỹ thuật mới.' }}
        </h2>

        <!-- Context Bio -->
        <p class="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
          {{ isEn
            ? 'Currently seeking Junior Laravel / PHP Developer positions in Ho Chi Minh City or remote setups. Open to discussing technical opportunities, backend architecture challenges, and team collaboration.'
            : 'Đang tìm kiếm cơ hội việc làm Lập trình viên Junior Laravel / PHP tại TP. Hồ Chí Minh hoặc môi trường làm việc linh hoạt. Sẵn sàng trao đổi về các bài toán backend, quy trình phát triển và phỏng vấn kỹ thuật.'
          }}
        </p>

        <!-- High-Impact Direct Channels Bar -->
        <div class="pt-4 space-y-4">
          <!-- Primary Action Row -->
          <div class="flex flex-wrap items-center gap-3">
            <!-- Email Direct + Copy -->
            <div class="inline-flex items-center rounded-xl bg-teal-500 text-slate-950 p-1 font-mono text-xs sm:text-sm font-bold shadow-lg shadow-teal-500/10">
              <a
                :href="'mailto:' + cvData.personal.email"
                class="px-4 py-2 hover:underline"
              >
                {{ cvData.personal.email }}
              </a>
              <button
                @click="copyEmail"
                class="px-3 py-2 rounded-lg bg-slate-950/15 hover:bg-slate-950/30 transition text-xs font-mono"
                :title="isEn ? 'Copy email' : 'Sao chép email'"
              >
                {{ copiedEmail ? (isEn ? 'Copied!' : 'Đã chép!') : (isEn ? 'Copy' : 'Chép') }}
              </button>
            </div>

            <!-- Phone / Zalo -->
            <a
              :href="'tel:' + cvData.personal.phone.replace(/[^0-9+]/g, '')"
              class="px-4 py-3 rounded-xl bg-[#0b101c] hover:bg-[#101728] text-slate-200 border border-white/[0.08] hover:border-slate-600 transition font-mono text-xs sm:text-sm font-medium flex items-center gap-2"
            >
              <svg class="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>{{ cvData.personal.phone }}</span>
            </a>

            <!-- GitHub Link -->
            <a
              :href="cvData.personal.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-3 rounded-xl bg-[#0b101c] hover:bg-[#101728] text-slate-200 border border-white/[0.08] hover:border-slate-600 transition font-mono text-xs sm:text-sm font-medium flex items-center gap-2"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>github.com/hiimthien ↗</span>
            </a>
          </div>

          <!-- Secondary Location & PDF Action -->
          <div class="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
            <span class="flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>{{ isEn ? cvData.personal.location : 'TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam' }}</span>
            </span>

            <span>&bull;</span>

            <a
              :href="cvData.personal.pdfResumeUrl"
              download="CV_Cao_Luong_Thien_PHP_Developer.pdf"
              class="text-teal-400 hover:text-teal-300 font-semibold underline underline-offset-4 flex items-center gap-1"
            >
              <span>{{ isEn ? 'Download Resume (PDF)' : 'Tải CV bản PDF' }}</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import { cvData } from '../data/cvData';

const { isEn } = useLanguage();
const copiedEmail = ref(false);

const copyEmail = () => {
  navigator.clipboard.writeText(cvData.personal.email).then(() => {
    copiedEmail.value = true;
    setTimeout(() => {
      copiedEmail.value = false;
    }, 2000);
  });
};
</script>
