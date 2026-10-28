<template>
  <div class="min-h-screen bg-[#080c14] text-slate-200 selection:bg-teal-500/25 selection:text-teal-300 antialiased">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content Flow: Hero -> Projects (CineReserve) -> Skills -> Experience -> Education -> Contact -->
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Education from './components/Education.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>
