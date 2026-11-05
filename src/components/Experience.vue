<template>
  <section id="experience" class="text-left space-y-8">
    <div>
      <h2 class="text-xl font-bold tracking-tight text-stone-900 border-b border-stone-200 pb-2">
        {{ isEn ? 'Experience' : 'Kinh nghiệm' }}
      </h2>
    </div>

    <!-- 1. TTR Group -->
    <article class="space-y-3">
      <div>
        <h3 class="text-lg font-semibold text-stone-900">
          TTR Group: Junior PHP / Full-Stack Developer
          <span class="text-sm font-normal text-stone-500 font-mono">
            ({{ isEn ? 'Sep 2025 – Present, Ho Chi Minh City' : '09/2025 – Hiện tại, TP. Hồ Chí Minh' }})
          </span>
        </h3>
        <p class="text-stone-600 text-[15px] mt-0.5">
          <strong class="font-medium text-stone-700">{{ isEn ? 'Project:' : 'Dự án:' }}</strong> E-commerce Management Platform
        </p>
      </div>

      <ul class="list-disc pl-5 space-y-2 text-stone-800 text-[15.5px] leading-relaxed">
        <li v-if="!isEn">
          Tích hợp 11 đơn vị fulfillment (print-on-demand) áp dụng Strategy và Factory patterns, chuẩn hóa các API bên ngoài về chung một interface; thêm đối tác mới chỉ cần tạo adapter class. Tự động định tuyến đơn hàng và đồng bộ theo dõi vận chuyển.
        </li>
        <li v-else>
          Integrated 11 print-on-demand fulfillment providers using Strategy and Factory patterns, normalizing different third-party APIs behind one interface; adding a provider only requires a new adapter class. Automated order routing and shipment tracking sync.
        </li>

        <li v-if="!isEn">
          Chuyển các tác vụ nặng (ánh xạ danh mục, đồng bộ biến thể, cập nhật giá hàng loạt) sang Redis queue workers với cơ chế tự động thử lại khi lỗi, giữ giao diện phản hồi nhanh và tránh timeout request.
        </li>
        <li v-else>
          Moved heavy tasks (catalog mapping, variant sync, batch price updates) to Redis queue workers with automatic retry on failed payloads, keeping the UI responsive and avoiding request timeouts.
        </li>

        <li v-if="!isEn">
          Xây dựng pipeline tiếp nhận webhook TikTok Shop với xác thực chữ ký HMAC, định tuyến sự kiện (đơn hàng, sản phẩm, đổi/trả) và chống trùng lặp dữ liệu khi webhook gửi lại.
        </li>
        <li v-else>
          Built TikTok Shop webhook pipelines with HMAC signature validation, event routing (order, product, return/refund) and deduplication to prevent duplicate processing on redelivered events.
        </li>

        <li v-if="!isEn">
          Loại bỏ triệt để N+1 queries, thêm chỉ mục composite trên các bảng lưu lượng cao và áp dụng Redis caching để giảm tải cơ sở dữ liệu.
        </li>
        <li v-else>
          Removed N+1 queries, added composite indexes on high-traffic tables and introduced Redis caching to reduce database load.
        </li>

        <li v-if="!isEn">
          Xây dựng trọn vẹn module Khiếu nại - Đổi/Trả hàng (Return/Refund Ticket): quy trình phê duyệt đa trạng thái trên CodeIgniter 4 và giao diện theo dõi phản ứng nhanh bằng Vue 3 (Pinia).
        </li>
        <li v-else>
          Delivered the Return/Refund Ticket module end to end: multi-status approval workflow in CodeIgniter 4 and a reactive management UI in Vue 3 (Pinia).
        </li>

        <li v-if="!isEn">
          Tích hợp dịch vụ nội dung và hình ảnh AI với kho lưu trữ đối tượng MinIO: kiểm tra MIME type, sinh thumbnail tự động, chuyển đổi WebP và giải phóng bộ nhớ.
        </li>
        <li v-else>
          Integrated AI content and image services with MinIO object storage, implementing MIME validation, thumbnail generation, WEBP conversion and memory cleanup.
        </li>

        <li v-if="!isEn">
          Tích hợp Telegram Bot API cảnh báo đơn hàng và lỗi hệ thống theo thời gian thực, có cơ chế cách ly lỗi độc lập để sự cố API ngoài không ảnh hưởng đến luồng giao dịch chính.
        </li>
        <li v-else>
          Integrated Telegram Bot API for real-time order and system alerts, using isolated error handling so external API failures do not affect core transaction flows.
        </li>
      </ul>

      <div class="text-xs sm:text-sm text-stone-600 pt-1">
        <span class="font-medium text-stone-800">Stack:</span> PHP, CodeIgniter 4, Vue 3, Pinia, MySQL, Redis, MinIO, TikTok Shop API
      </div>
    </article>

    <!-- 2. Mandatory Military Service -->
    <article class="space-y-1.5 pt-6 border-t border-stone-200">
      <div class="flex flex-wrap items-baseline justify-between gap-2">
        <h3 class="text-base font-semibold text-stone-900">
          {{ isEn ? 'Mandatory Military Service' : 'Nghĩa vụ Quân sự Bắt buộc' }}
        </h3>
        <span class="text-sm font-normal text-stone-500 font-mono">
          {{ isEn ? 'Feb 2023 – Jan 2025' : '02/2023 – 01/2025' }}
        </span>
      </div>
      <p class="text-stone-600 text-[15px]">
        {{ isEn
          ? 'Completed 2-year active national military service obligation.'
          : 'Hoàn thành thời gian thực hiện nghĩa vụ quân sự 2 năm theo quy định.'
        }}
      </p>
    </article>

    <!-- 3. TMA Solutions -->
    <article class="space-y-3 pt-6 border-t border-stone-200">
      <div>
        <h3 class="text-lg font-semibold text-stone-900">
          TMA Solutions (TMA Foundation Training)
          <span class="text-sm font-normal text-stone-500 font-mono">
            ({{ isEn ? 'Nov 2022 – Dec 2022, Quy Nhon' : '11/2022 – 12/2022, Quy Nhơn' }})
          </span>
        </h3>
        <p class="text-stone-600 text-[15px] mt-0.5">
          <strong class="font-medium text-stone-700">{{ isEn ? 'Role:' : 'Vị trí:' }}</strong>
          {{ isEn
            ? 'Software Engineering Trainee | Company training and probation program'
            : 'Thực tập sinh Kỹ sư phần mềm | Chương trình đào tạo và thử việc'
          }}
        </p>
      </div>

      <ul class="list-disc pl-5 space-y-1.5 text-stone-800 text-[15.5px] leading-relaxed">
        <li v-if="!isEn">
          Thực hành xây dựng dịch vụ backend RESTful và tiếp cận các quy chuẩn thiết kế ứng dụng web cốt lõi.
        </li>
        <li v-else>
          Built RESTful backend services and learned core web application patterns.
        </li>

        <li v-if="!isEn">
          Làm việc nhóm theo quy trình Agile/Scrum, tuân thủ các quy tắc Git workflow và code review.
        </li>
        <li v-else>
          Worked in an Agile/Scrum team using Git workflows and code reviews.
        </li>
      </ul>

      <div class="text-xs sm:text-sm text-stone-600 pt-1">
        <span class="font-medium text-stone-800">Stack:</span> PHP, RESTful APIs, Git, Agile / Scrum
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { isEn } = useLanguage();
</script>
