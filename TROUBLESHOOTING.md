# Hướng dẫn xử lý sự cố

## Vấn đề: Microphone không hoạt động

### Nguyên nhân có thể:
1. **Trình duyệt chưa cho phép truy cập microphone**
   - Chrome/Edge: Click vào icon khóa ở thanh địa chỉ → Cho phép Microphone
   - Firefox: Click vào icon shield → Cho phép Microphone
   - Safari: Vào Preferences → Websites → Microphone → Cho phép

2. **Trình duyệt không hỗ trợ MediaRecorder API**
   - Chrome/Edge: ✅ Hỗ trợ
   - Firefox: ✅ Hỗ trợ  
   - Safari: ⚠️ Hỗ trợ một phần (cần HTTPS)
   - Opera: ✅ Hỗ trợ

3. **Trang web chưa được cấp quyền**
   - Cần HTTPS hoặc localhost để sử dụng microphone
   - Một số trình duyệt yêu cầu user interaction trước khi cho phép

### Cách kiểm tra:
1. Mở Console (F12) và kiểm tra lỗi
2. Kiểm tra xem trình duyệt có hỗ trợ:
   ```javascript
   navigator.mediaDevices && navigator.mediaDevices.getUserMedia
   ```

## Vấn đề: Text-to-Speech không phát âm

### Nguyên nhân có thể:
1. **Trình duyệt không hỗ trợ Web Speech API**
   - Chrome/Edge: ✅ Hỗ trợ tốt
   - Firefox: ⚠️ Hỗ trợ một phần
   - Safari: ✅ Hỗ trợ
   - Opera: ✅ Hỗ trợ

2. **Chưa có giọng tiếng Việt**
   - Trình duyệt sẽ sử dụng giọng mặc định
   - Chrome: Vào Settings → Languages → Add Vietnamese
   - Windows: Cài Vietnamese Text-to-Speech voices

3. **Browser policy chặn auto-play**
   - Cần user interaction (click) để phát âm
   - Đây là chính sách bảo mật của browser

### Cách kiểm tra:
1. Mở Console (F12) và kiểm tra lỗi
2. Kiểm tra xem trình duyệt có hỗ trợ:
   ```javascript
   'speechSynthesis' in window
   ```
3. Kiểm tra giọng nói có sẵn:
   ```javascript
   speechSynthesis.getVoices()
   ```

## Vấn đề: Settings không lưu

### Nguyên nhân có thể:
1. **Backend chưa chạy**
   - Đảm bảo backend đang chạy tại `http://localhost:4000`
   - Kiểm tra: `curl http://localhost:4000/api/health`

2. **CORS error**
   - Kiểm tra backend có bật CORS cho frontend
   - Backend đã được cấu hình với `cors({ origin: '*' })`

3. **User chưa đăng nhập**
   - Settings sẽ được lưu với userId từ localStorage
   - Nếu chưa đăng nhập, sẽ dùng userId='demo'

### Cách kiểm tra:
1. Mở Console (F12) → Network tab
2. Kiểm tra request có được gửi đi không
3. Kiểm tra response từ backend

## Giải pháp nhanh

### 1. Đảm bảo backend đang chạy:
```bash
cd server
npm install
npm run dev
```

### 2. Đảm bảo frontend đang chạy:
```bash
npm install
npm run dev
```

### 3. Kiểm tra kết nối:
- Backend: http://localhost:4000/api/health
- Frontend: http://localhost:3000

### 4. Cho phép microphone và audio:
- Click vào icon khóa/shield trên thanh địa chỉ
- Cho phép Microphone và Sound

### 5. Test text-to-speech:
- Vào Audio Settings → Click nút "Nghe thử"
- Nếu không có âm thanh, kiểm tra volume và browser settings

## Lưu ý quan trọng

1. **HTTPS required**: Một số trình duyệt yêu cầu HTTPS để sử dụng microphone
2. **User interaction**: Text-to-speech cần user click để hoạt động (browser policy)
3. **Browser compatibility**: Kiểm tra trình duyệt có hỗ trợ các API cần thiết
4. **Vietnamese voices**: Có thể cần cài thêm Vietnamese TTS voices cho trình duyệt

