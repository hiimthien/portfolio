<template>
  <div class="min-h-screen bg-[#fafaf9] text-stone-900 antialiased">
    <div class="max-w-[720px] mx-auto px-5 sm:px-6 py-8 sm:py-12">
      <Navbar />
      <main class="space-y-10 sm:space-y-12">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import Skills from './components/Skills.vue';
import Education from './components/Education.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>
