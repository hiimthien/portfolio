<template>
  <footer class="pt-12 mt-16 border-t border-stone-200 text-xs text-stone-500 flex flex-col sm:flex-row items-baseline justify-between gap-3">
    <div>
      &copy; {{ new Date().getFullYear() }} Cao Lương Thiện
    </div>
    <div class="flex items-center space-x-3 text-stone-600">
      <a
        :href="cvData.personal.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-stone-900"
      >
        GitHub
      </a>
      <span>&middot;</span>
      <a
        :href="'mailto:' + cvData.personal.email"
        class="hover:text-stone-900"
      >
        Email
      </a>
      <span>&middot;</span>
      <button
        @click="scrollToTop"
        class="hover:text-stone-900 cursor-pointer"
      >
        {{ isEn ? 'Back to top ↑' : 'Về đầu trang ↑' }}
      </button>
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
