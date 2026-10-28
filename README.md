# Portfolio - Cao Lương Thiện (Junior PHP / Full-Stack Developer)

Website Portfolio cá nhân được phát triển bằng **Vue 3**, **Vite**, **TypeScript** và **Tailwind CSS**, thiết kế riêng cho lập trình viên Backend / Full-Stack với phong cách **Dark Modern Developer** và hỗ trợ **Song ngữ (English & Tiếng Việt)**.

---

## 🚀 Tính năng nổi bật

1. **Giao diện Dark Modern Developer**: Tông đen xám hiện đại, hiệu ứng neon glow emerald/cyan, glassmorphism cao cấp và responsive hoàn hảo trên mọi thiết bị.
2. **Hỗ trợ Song ngữ linh hoạt (EN / VI)**: Chuyển đổi ngôn ngữ chỉ với 1 click, lưu lựa chọn vào `localStorage`.
3. **Phân tích Kiến trúc chuyên sâu (Architecture Deep Dive)**:
   - Module phân tích hệ thống dự án **CineReserve** (Laravel 11, Vue 3, Redis, Laravel Reverb).
   - Cơ chế khóa phân tán Redis (`SET NX EX`) kết hợp Khóa bi quan MySQL (`SELECT FOR UPDATE`) chống Race Condition trong đặt vé thời gian thực.
   - Sơ đồ phát sóng WebSocket real-time qua Laravel Reverb mà không cần polling.
4. **Kinh nghiệm thực chiến chi tiết (TTR Group & TMA Solutions)**:
   - Tích hợp Webhook TikTok Shop API (xác thực HMAC, chống trùng lặp, Design Pattern Factory & Strategy).
   - Xử lý hàng đợi Redis Background Workers cho dữ liệu lớn.
   - Module Đổi/Trả hàng (Return/Refund Ticket) với CodeIgniter 4 & Pinia.
   - Xử lý ảnh MinIO S3, cảnh báo Telegram Bot độc lập lỗi, tối ưu MySQL triệt tiêu N+1 query.
5. **Kỹ năng & Bộ lọc (Skills Matrix)**: Phân loại theo Backend, Frontend, Database & Caching, Integrations & DevOps.
6. **Tải CV nhanh & Hiệu ứng Confetti**: Một click để tải trực tiếp file PDF CV đã được tích hợp sẵn.
7. **Liên hệ nhanh**: Sao chép Email / Số điện thoại 1-click kèm thông báo toast, mở form mailto trực tiếp.

---

## 🛠 Tech Stack

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide Icons & Custom SVG
- **Interactions**: Canvas Confetti

---

## 💻 Hướng dẫn chạy dự án

### 1. Khởi động môi trường phát triển (Dev Mode)
```bash
cd d:\PJ\portfolio
npm run dev
```
Truy cập trình duyệt tại: `http://localhost:5173`

### 2. Build sản phẩm (Production Build)
```bash
npm run build
```
Kết quả đóng gói nằm tại thư mục `dist/`, sẵn sàng đưa lên hosting.

### 3. Xem trước bản build
```bash
npm run preview
```

---

## 🌐 Hướng dẫn Deploy miễn phí

### Cách 1: Deploy lên Vercel (Khuyên dùng - Cực nhanh)
1. Cài đặt Vercel CLI (nếu chưa có): `npm i -g vercel`
2. Tại thư mục `d:\PJ\portfolio`, chạy lệnh:
   ```bash
   vercel
   ```
3. Hoặc liên kết trực tiếp repository GitHub `hiimthien/portfolio` trên [vercel.com](https://vercel.com). Vercel sẽ tự động build và cấp domain miễn phí dạng `https://hiimthien.vercel.app`.

### Cách 2: Deploy lên GitHub Pages (`hiimthien.github.io`)
1. Tạo repository trên GitHub với tên: `hiimthien.github.io`
2. Push thư mục build `dist/` hoặc dùng GitHub Actions tự động build và deploy lên GitHub Pages.

