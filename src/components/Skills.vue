<template>
  <section id="skills" class="text-left space-y-4">
    <div>
      <h2 class="text-xl font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2">
        {{ isEn ? 'Skills & Additional' : 'Kỹ năng chuyên môn' }}
      </h2>
    </div>

    <div class="text-[15.5px] text-stone-800 space-y-2 leading-relaxed">
      <p>
        <strong class="font-medium text-stone-900">{{ isEn ? 'Languages:' : 'Ngôn ngữ lập trình:' }}</strong>
        PHP, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3
      </p>
      <p>
        <strong class="font-medium text-stone-900">Backend:</strong>
        CodeIgniter 4 (production), Laravel 11 (personal projects), RESTful APIs, Webhook Processing, Redis Queues
      </p>
      <p>
        <strong class="font-medium text-stone-900">Frontend:</strong>
        Vue.js 3 (Composition API), Pinia, Vue Router, Tailwind CSS, Bootstrap
      </p>
      <p>
        <strong class="font-medium text-stone-900">{{ isEn ? 'Databases & Caching:' : 'Cơ sở dữ liệu & Caching:' }}</strong>
        MySQL (Query Optimization, Composite Indexing, Transactions), Redis (Caching, Queue, Distributed Locks)
      </p>
      <p>
        <strong class="font-medium text-stone-900">{{ isEn ? 'Integrations & Tools:' : 'Tích hợp & Công cụ:' }}</strong>
        TikTok Shop API, VNPay, Google OAuth, Telegram Bot API, MinIO, PHPUnit, Vitest, Git, Docker, Postman, Vite
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { isEn } = useLanguage();
</script>
