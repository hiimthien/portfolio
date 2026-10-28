<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#080c14]/90 backdrop-blur-md border-b border-white/[0.08]"
    :class="{ 'py-2.5 shadow-lg shadow-black/40': isScrolled, 'py-4': !isScrolled }"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo / Identity -->
        <a href="#about" @click="scrollToSection($event, '#about')" class="group flex items-center space-x-2.5">
          <div class="w-8 h-8 rounded bg-slate-900 border border-slate-700/80 flex items-center justify-center font-mono font-bold text-teal-400 text-xs group-hover:border-teal-500/60 transition">
            &lt;T/&gt;
          </div>
          <div>
            <div class="font-display font-bold text-xs sm:text-sm text-slate-100 group-hover:text-teal-300 transition leading-tight tracking-tight">
              Cao Luong Thien
            </div>
            <div class="text-[10px] text-slate-400 font-mono tracking-tight">Junior Laravel Developer</div>
          </div>
        </a>

        <!-- Desktop Navigation with Active State Indicator -->
        <nav class="hidden md:flex items-center space-x-1">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="scrollToSection($event, item.href)"
            class="px-3 py-1.5 text-xs font-medium rounded-md transition"
            :class="activeSection === item.id ? 'text-teal-400 bg-slate-800/80 font-semibold' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'"
          >
            {{ isEn ? item.labelEn : item.labelVi }}
          </a>
        </nav>

        <!-- Right action buttons -->
        <div class="hidden md:flex items-center space-x-2.5">
          <!-- Segmented Language Switcher -->
          <div class="inline-flex items-center p-0.5 rounded-md bg-slate-900 border border-white/[0.08] text-xs font-mono">
            <button
              @click="setLanguage('en')"
              :class="isEn ? 'bg-slate-800 text-teal-400 font-semibold' : 'text-slate-400 hover:text-slate-200'"
              class="px-2 py-0.5 rounded transition"
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              @click="setLanguage('vi')"
              :class="!isEn ? 'bg-slate-800 text-teal-400 font-semibold' : 'text-slate-400 hover:text-slate-200'"
              class="px-2 py-0.5 rounded transition"
              aria-label="Chuyển sang Tiếng Việt"
            >
              VI
            </button>
          </div>

          <!-- GitHub Link -->
          <a
            :href="cvData.personal.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-slate-400 hover:text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-md border border-white/[0.08] transition"
            aria-label="GitHub Profile"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          <!-- Download CV Link -->
          <a
            :href="cvData.personal.pdfResumeUrl"
            download="CV_Cao_Luong_Thien_PHP_Developer.pdf"
            class="px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-md border border-white/[0.08] transition flex items-center gap-1.5"
          >
            <svg class="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            <span>{{ isEn ? 'Resume (PDF)' : 'CV (PDF)' }}</span>
          </a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex items-center space-x-2 md:hidden">
          <div class="inline-flex items-center p-0.5 rounded-md bg-slate-900 border border-white/[0.08] text-xs font-mono">
            <button
              @click="setLanguage('en')"
              :class="isEn ? 'bg-slate-800 text-teal-400 font-semibold' : 'text-slate-400'"
              class="px-2 py-0.5 rounded transition"
            >
              EN
            </button>
            <button
              @click="setLanguage('vi')"
              :class="!isEn ? 'bg-slate-800 text-teal-400 font-semibold' : 'text-slate-400'"
              class="px-2 py-0.5 rounded transition"
            >
              VI
            </button>
          </div>
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-show="mobileMenuOpen" class="md:hidden pt-3 pb-2 border-t border-white/[0.08] mt-2.5 space-y-1">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click="scrollToSection($event, item.href); mobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-sm transition"
          :class="activeSection === item.id ? 'text-teal-400 bg-slate-800/80 font-medium' : 'text-slate-300 hover:text-white hover:bg-slate-800'"
        >
          {{ isEn ? item.labelEn : item.labelVi }}
        </a>
        <div class="pt-2 flex items-center space-x-2">
          <a
            :href="cvData.personal.pdfResumeUrl"
            download="CV_Cao_Luong_Thien_PHP_Developer.pdf"
            class="flex-1 text-center py-2 px-3 rounded-md bg-slate-900 text-slate-200 text-xs font-medium border border-white/[0.08] hover:bg-slate-800 transition"
          >
            {{ isEn ? 'Download CV (PDF)' : 'Tải CV (PDF)' }}
          </a>
          <a
            :href="cvData.personal.githubUrl"
            target="_blank"
            class="p-2 rounded-md bg-slate-900 text-slate-300 border border-white/[0.08] hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import { cvData } from '../data/cvData';

const { isEn, setLanguage } = useLanguage();
const mobileMenuOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('about');

// Ordered with Projects placed right after About!
const navItems = [
  { id: 'about', href: '#about', labelEn: 'About', labelVi: 'Giới thiệu' },
  { id: 'projects', href: '#projects', labelEn: 'Project', labelVi: 'Dự án' },
  { id: 'skills', href: '#skills', labelEn: 'Skills', labelVi: 'Kỹ năng' },
  { id: 'experience', href: '#experience', labelEn: 'Experience', labelVi: 'Kinh nghiệm' },
  { id: 'education', href: '#education', labelEn: 'Education', labelVi: 'Học vấn' },
  { id: 'contact', href: '#contact', labelEn: 'Contact', labelVi: 'Liên hệ' },
];

const scrollToSection = (e: Event, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', href);
  } else if (href === '#about') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', ' ');
  }
};

let observer: IntersectionObserver | null = null;

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  const sectionElements = navItems
    .map((item) => document.getElementById(item.id))
    .filter((el): el is HTMLElement => el !== null);

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }
  );

  sectionElements.forEach((el) => observer?.observe(el));
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  observer?.disconnect();
});
</script>
