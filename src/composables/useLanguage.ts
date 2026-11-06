import { ref, computed } from 'vue';
import { vi, type LocaleSchema } from '../locales/vi';
import { en } from '../locales/en';

export type Language = 'en' | 'vi';

const currentLang = ref<Language>('en');

const messages: Record<Language, LocaleSchema> = {
  vi,
  en,
};

// Initialize from localStorage if in browser
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('portfolio_lang') as Language;
  if (saved === 'en' || saved === 'vi') {
    currentLang.value = saved;
  }
}

export function useLanguage() {
  const setLanguage = (lang: Language) => {
    currentLang.value = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(currentLang.value === 'en' ? 'vi' : 'en');
  };

  const isEn = computed(() => currentLang.value === 'en');
  const locale = computed(() => messages[currentLang.value]);

  /**
   * Get translated string by dot notation path (e.g. 'hero.name', 'experience.title')
   */
  const t = (path: string): string => {
    const keys = path.split('.');
    let val: any = messages[currentLang.value];
    for (const key of keys) {
      if (val === undefined || val === null) break;
      val = val[key];
    }
    if (typeof val === 'string') return val;
    
    // Fallback to vi
    let fallback: any = messages.vi;
    for (const key of keys) {
      if (fallback === undefined || fallback === null) break;
      fallback = fallback[key];
    }
    return typeof fallback === 'string' ? fallback : path;
  };

  /**
   * Get complex translated value like arrays or objects (e.g. bullets, slides)
   */
  const tm = <T = any>(path: string): T => {
    const keys = path.split('.');
    let val: any = messages[currentLang.value];
    for (const key of keys) {
      if (val === undefined || val === null) break;
      val = val[key];
    }
    if (val !== undefined && val !== null) return val as T;

    let fallback: any = messages.vi;
    for (const key of keys) {
      if (fallback === undefined || fallback === null) break;
      fallback = fallback[key];
    }
    return fallback as T;
  };

  return {
    currentLang,
    isEn,
    locale,
    t,
    tm,
    setLanguage,
    toggleLanguage,
  };
}
