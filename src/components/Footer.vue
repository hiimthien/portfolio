<template>
  <footer class="py-10 border-t border-white/[0.08] text-xs text-slate-500 font-mono">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        &copy; {{ new Date().getFullYear() }} Cao Luong Thien. All rights reserved.
      </div>
      <div class="flex items-center space-x-3">
        <a
          :href="cvData.personal.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-slate-300 transition"
        >
          GitHub
        </a>
        <span>&middot;</span>
        <a
          :href="'mailto:' + cvData.personal.email"
          class="hover:text-slate-300 transition"
        >
          Email
        </a>
        <span>&middot;</span>
        <button
          @click="scrollToTop"
          class="hover:text-teal-400 transition"
        >
          {{ isEn ? 'Back to top' : 'Về đầu trang' }} &uarr;
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';
import { cvData } from '../data/cvData';

const { isEn } = useLanguage();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
