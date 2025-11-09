# Dyslexia App Backend API

Backend API server cho ứng dụng Dyslexia Reading App.

## Yêu cầu

- Node.js >= 20.19.0
- npm >= 10.0.0

## Cài đặt

```bash
npm install
```

## Chạy Development Server

```bash
npm run dev
```

Server sẽ chạy tại `http://localhost:4000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Đăng ký tài khoản
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/logout` - Đăng xuất

### Settings
- `GET /api/settings` - Lấy cài đặt người dùng
- `PUT /api/settings` - Cập nhật cài đặt
- `GET /api/settings/audio` - Lấy cài đặt âm thanh
- `PUT /api/settings/audio` - Cập nhật cài đặt âm thanh
- `GET /api/settings/display` - Lấy cài đặt hiển thị
- `PUT /api/settings/display` - Cập nhật cài đặt hiển thị

### Library (Words)
- `GET /api/library/words` - Lấy danh sách từ vựng
- `POST /api/library/words` - Thêm từ mới
- `DELETE /api/library/words/:id` - Xóa từ
- `POST /api/library/words/pronounce` - Phát âm từ

### Readings
- `GET /api/readings` - Lấy danh sách bài đọc (có filter: level, topic, search)
- `GET /api/readings/:id` - Lấy nội dung bài đọc
- `POST /api/readings` - Tạo bài đọc mới
- `PUT /api/readings/:id` - Cập nhật bài đọc
- `DELETE /api/readings/:id` - Xóa bài đọc

### Speakings
- `GET /api/speakings` - Lấy danh sách bài luyện nói
- `GET /api/speakings/:id` - Lấy nội dung bài luyện nói
- `POST /api/speakings/:id/record` - Gửi recording và nhận feedback

### OCR
- `POST /api/ocr/upload` - Upload file và xử lý OCR
- `GET /api/ocr/files` - Lấy danh sách file OCR
- `GET /api/ocr/files/:id` - Lấy chi tiết file OCR
- `PUT /api/ocr/files/:id` - Cập nhật file OCR (đổi tên)
- `DELETE /api/ocr/files/:id` - Xóa file OCR

### Sessions
- `POST /api/sessions` - Bắt đầu session mới
- `GET /api/sessions` - Lấy danh sách sessions
- `GET /api/sessions/:id` - Lấy chi tiết session
- `PUT /api/sessions/:id` - Cập nhật session
- `PUT /api/sessions/:id/end` - Kết thúc session

### Dashboard
- `GET /api/dashboard/metrics` - Lấy metrics dashboard
- `GET /api/dashboard/recent-reading` - Lấy bài đọc gần đây
- `GET /api/dashboard/new-words` - Lấy từ mới

## Lưu ý

- Hiện tại backend sử dụng in-memory storage (không có database)
- Dữ liệu sẽ bị mất khi restart server
- Để sử dụng database, cần tích hợp Prisma hoặc database khác

## Build Production

```bash
npm run build
npm start
```

