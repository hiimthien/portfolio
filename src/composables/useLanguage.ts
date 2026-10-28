import { ref, computed } from 'vue';

export type Language = 'en' | 'vi';

const currentLang = ref<Language>('en');

export function useLanguage() {
  const setLanguage = (lang: Language) => {
    currentLang.value = lang;
    localStorage.setItem('portfolio_lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(currentLang.value === 'en' ? 'vi' : 'en');
  };

  // Initialize from localStorage if exists
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved === 'en' || saved === 'vi') {
      currentLang.value = saved;
    }
  }

  const isEn = computed(() => currentLang.value === 'en');

  return {
    currentLang,
    isEn,
    setLanguage,
    toggleLanguage,
  };
}

