<template>
  <section id="projects" class="text-left space-y-8">
    <div>
      <h2 class="text-xl font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2">
        {{ t('projects.title') }}
      </h2>
    </div>

    <!-- Project 1: CineReserve -->
    <article class="space-y-4">
      <div>
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="text-lg font-semibold text-stone-900">
            {{ t('projects.cinereserve.title') }}
          </h3>
          <a
            href="https://github.com/hiimthien/cinereserve"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 hover:text-emerald-700"
          >
            GitHub ↗
          </a>
        </div>
        <p class="text-stone-600 text-[15px] mt-0.5">
          {{ t('projects.cinereserve.summary') }}
        </p>
      </div>

      <!-- Multi-Screenshot Showcase for CineReserve -->
      <div v-if="cineSlides.length" class="space-y-2.5">
        <!-- Tab selector -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <button
            v-for="(slide, idx) in cineSlides"
            :key="slide.src"
            type="button"
            @click="selectCineSlide(idx)"
            :class="[
              'px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap cursor-pointer',
              currentCineSlide === idx
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
            ]"
          >
            {{ slide.label }}
          </button>
        </div>

        <!-- Frame -->
        <div class="aspect-video w-full rounded-lg border border-stone-200 overflow-hidden bg-stone-900 shadow-sm relative group">
          <img
            :src="cineSlides[currentCineSlide]?.src"
            :alt="cineSlides[currentCineSlide]?.label"
            class="w-full h-full object-cover transition-opacity duration-300"
          />

          <!-- Prev/Next Controls -->
          <button
            type="button"
            @click="prevCineSlide"
            class="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            @click="nextCineSlide"
            class="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Next slide"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Indicators dots -->
          <div class="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-stone-900/60 backdrop-blur-xs">
            <button
              v-for="(_, idx) in cineSlides"
              :key="idx"
              type="button"
              @click="selectCineSlide(idx)"
              :class="[
                'h-1.5 rounded-full transition-all cursor-pointer',
                currentCineSlide === idx ? 'bg-white w-3' : 'bg-white/50 hover:bg-white/80 w-1.5'
              ]"
              :aria-label="`Slide ${idx + 1}`"
            />
          </div>
        </div>

        <!-- Slide Caption -->
        <p class="text-xs text-stone-500 italic text-center">
          {{ cineSlides[currentCineSlide]?.desc }}
        </p>
      </div>

      <!-- Problem & Solution -->
      <div class="text-[16px] text-stone-800 space-y-3 leading-relaxed">
        <p>
          <strong class="font-medium text-stone-900">{{ t('projects.problemLabel') }}</strong>
          {{ t('projects.cinereserve.problem') }}
        </p>

        <div>
          <strong class="font-medium text-stone-900 block mb-1.5">
            {{ t('projects.solutionLabel') }}
          </strong>
          <ul class="list-disc pl-5 space-y-1 text-stone-700 text-[15.5px]">
            <li
              v-for="(bullet, idx) in tm<string[]>('projects.cinereserve.bullets')"
              :key="idx"
              v-html="bullet"
            />
          </ul>
        </div>

        <p class="text-stone-600 text-[15px] leading-relaxed">
          <strong class="font-medium text-stone-800">{{ t('projects.learnedLabel') }}</strong>
          {{ t('projects.cinereserve.learned') }}
        </p>
      </div>

      <!-- Stack -->
      <div class="text-xs sm:text-sm text-stone-600 pt-1">
        <span class="font-medium text-stone-800">{{ t('projects.stackLabel') }}</span> {{ t('projects.cinereserve.stack') }}
      </div>
    </article>

    <!-- Project 2: TechShop -->
    <article class="space-y-4 pt-6 border-t border-stone-200">
      <div>
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="text-lg font-semibold text-stone-900">
            {{ t('projects.techshop.title') }}
          </h3>
          <a
            href="https://github.com/hiimthien/TechShop"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 hover:text-emerald-700"
          >
            GitHub ↗
          </a>
        </div>
        <p class="text-stone-600 text-[15px] mt-0.5">
          {{ t('projects.techshop.summary') }}
        </p>
      </div>

      <!-- Multi-Screenshot Showcase with Tabs & Controls -->
      <div v-if="techSlides.length" class="space-y-2.5">
        <!-- Tab selector -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <button
            v-for="(slide, idx) in techSlides"
            :key="slide.src"
            type="button"
            @click="selectTechSlide(idx)"
            :class="[
              'px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap cursor-pointer',
              currentTechSlide === idx
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
            ]"
          >
            {{ slide.label }}
          </button>
        </div>

        <!-- Frame -->
        <div class="aspect-video w-full rounded-lg border border-stone-200 overflow-hidden bg-stone-100 shadow-sm relative group">
          <img
            :src="techSlides[currentTechSlide]?.src"
            :alt="techSlides[currentTechSlide]?.label"
            class="w-full h-full object-cover transition-opacity duration-300"
          />

          <!-- Prev/Next Controls -->
          <button
            type="button"
            @click="prevTechSlide"
            class="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            @click="nextTechSlide"
            class="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Next slide"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Indicators dots -->
          <div class="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-stone-900/60 backdrop-blur-xs">
            <button
              v-for="(_, idx) in techSlides"
              :key="idx"
              type="button"
              @click="selectTechSlide(idx)"
              :class="[
                'h-1.5 rounded-full transition-all cursor-pointer',
                currentTechSlide === idx ? 'bg-white w-3' : 'bg-white/50 hover:bg-white/80 w-1.5'
              ]"
              :aria-label="`Slide ${idx + 1}`"
            />
          </div>
        </div>

        <!-- Slide Caption -->
        <p class="text-xs text-stone-500 italic text-center">
          {{ techSlides[currentTechSlide]?.desc }}
        </p>
      </div>

      <!-- Key details -->
      <div class="text-[16px] text-stone-800 space-y-3 leading-relaxed">
        <ul class="list-disc pl-5 space-y-1 text-stone-700 text-[15.5px]">
          <li
            v-for="(bullet, idx) in tm<string[]>('projects.techshop.bullets')"
            :key="idx"
            v-html="bullet"
          />
        </ul>

        <p class="text-stone-600 text-[15px] leading-relaxed">
          <strong class="font-medium text-stone-800">{{ t('projects.learnedLabel') }}</strong>
          {{ t('projects.techshop.learned') }}
        </p>
      </div>

      <!-- Plain Text Stack (No pills) -->
      <div class="text-xs sm:text-sm text-stone-600 pt-1">
        <span class="font-medium text-stone-800">{{ t('projects.stackLabel') }}</span> {{ t('projects.techshop.stack') }}
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../composables/useLanguage';

const { t, tm } = useLanguage();

// CineReserve Screenshots & Slider
const currentCineSlide = ref(0);
const cineImages = [
  '/images/cinereserve-seats.png',
  '/images/cinereserve-home.png',
  '/images/cinereserve-detail.png',
  '/images/cinereserve-now-showing.png',
];

const cineSlides = computed(() => {
  const slides = tm<Array<{ label: string; desc: string }>>('projects.cinereserve.slides') || [];
  return cineImages.map((src, idx) => ({
    src,
    label: slides[idx]?.label ?? '',
    desc: slides[idx]?.desc ?? '',
  }));
});

let cineAutoSlideTimer: ReturnType<typeof setInterval> | null = null;

function startCineAutoSlide() {
  stopCineAutoSlide();
  cineAutoSlideTimer = setInterval(() => {
    nextCineSlide();
  }, 6000);
}

function stopCineAutoSlide() {
  if (cineAutoSlideTimer) {
    clearInterval(cineAutoSlideTimer);
    cineAutoSlideTimer = null;
  }
}

function selectCineSlide(idx: number) {
  currentCineSlide.value = idx;
  startCineAutoSlide();
}

function nextCineSlide() {
  if (!cineSlides.value.length) return;
  currentCineSlide.value = (currentCineSlide.value + 1) % cineSlides.value.length;
}

function prevCineSlide() {
  if (!cineSlides.value.length) return;
  currentCineSlide.value = (currentCineSlide.value - 1 + cineSlides.value.length) % cineSlides.value.length;
}

// TechShop Screenshots & Slider
const currentTechSlide = ref(0);
const techImages = [
  '/images/techshop-storefront.png',
  '/images/techshop-product-detail.png',
  '/images/techshop-admin-dashboard.png',
  '/images/techshop-admin-orders.png',
  '/images/techshop-vnpay.png',
];

const techSlides = computed(() => {
  const slides = tm<Array<{ label: string; desc: string }>>('projects.techshop.slides') || [];
  return techImages.map((src, idx) => ({
    src,
    label: slides[idx]?.label ?? '',
    desc: slides[idx]?.desc ?? '',
  }));
});

let autoSlideTimer: ReturnType<typeof setInterval> | null = null;

function startAutoSlide() {
  stopAutoSlide();
  autoSlideTimer = setInterval(() => {
    nextTechSlide();
  }, 5000);
}

function stopAutoSlide() {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }
}

function selectTechSlide(idx: number) {
  currentTechSlide.value = idx;
  startAutoSlide();
}

function nextTechSlide() {
  if (!techSlides.value.length) return;
  currentTechSlide.value = (currentTechSlide.value + 1) % techSlides.value.length;
}

function prevTechSlide() {
  if (!techSlides.value.length) return;
  currentTechSlide.value = (currentTechSlide.value - 1 + techSlides.value.length) % techSlides.value.length;
}

onMounted(() => {
  startCineAutoSlide();
  startAutoSlide();
});

onUnmounted(() => {
  stopCineAutoSlide();
  stopAutoSlide();
});
</script>
