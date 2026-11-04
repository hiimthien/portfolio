<template>
  <section id="education" class="text-left space-y-4">
    <div>
      <h2 class="text-xl font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2">
        {{ isEn ? 'Education' : 'Học vấn' }}
      </h2>
    </div>

    <div class="text-[16px] text-stone-800 space-y-3 leading-relaxed">
      <div>
        <p class="font-medium text-stone-900">
          {{ isEn
            ? 'Associate Degree in Information Technology · Nha Trang University'
            : 'Cao đẳng Công nghệ Thông tin · Đại học Nha Trang'
          }}
          <span class="text-stone-500 font-normal text-sm font-mono">(09/2019 – 09/2022)</span>
        </p>
        <p class="text-stone-600 text-[15px]">
          GPA: 3.4 / 4.0
        </p>
      </div>

      <div class="pt-1 text-[15px] text-stone-700">
        <p>
          <strong class="font-medium text-stone-900">
            {{ isEn ? 'Foundation Training:' : 'Đào tạo nền tảng:' }}
          </strong>
          {{ isEn
            ? 'Software Engineering Trainee (TMA Foundation Training), TMA Solutions (11/2023 – 12/2023)'
            : 'Thực tập sinh Kỹ sư phần mềm (TMA Foundation Training), TMA Solutions (11/2023 – 12/2023)'
          }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { isEn } = useLanguage();
</script>
