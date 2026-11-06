<template>
  <footer class="pt-8 mt-10 border-t border-stone-200 text-xs text-stone-500 flex flex-col sm:flex-row items-baseline justify-between gap-3">
    <div>
      &copy; {{ new Date().getFullYear() }} {{ t('footer.copyright') }}
    </div>
    <div class="flex items-center space-x-3 text-stone-600">
      <a
        href="https://github.com/hiimthien"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-stone-900"
      >
        GitHub
      </a>
      <span>&middot;</span>
      <a
        href="mailto:thiencao.work@gmail.com"
        class="hover:text-stone-900"
      >
        Email
      </a>
      <span>&middot;</span>
      <button
        @click="scrollToTop"
        class="hover:text-stone-900 cursor-pointer"
      >
        {{ t('footer.backToTop') }}
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
