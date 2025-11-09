# Hướng dẫn cài đặt font OpenDyslexic

Nếu font OpenDyslexic không load được từ CDN, bạn có thể tải về và sử dụng local:

## Cách 1: Tải font về local (Khuyến nghị)

1. Tải font OpenDyslexic từ: https://github.com/antijingoist/opendyslexic/releases
   hoặc từ: https://opendyslexic.org/

2. Tạo thư mục `public/fonts/` trong project

3. Copy các file font vào thư mục `public/fonts/`:
   - OpenDyslexic-Regular.woff2
   - OpenDyslexic-Regular.woff
   - OpenDyslexic-Bold.woff2 (tùy chọn)

4. Cập nhật file `src/styles/globals.css`:

```css
@font-face {
  font-family: 'OpenDyslexic';
  src: url('/fonts/OpenDyslexic-Regular.woff2') format('woff2'),
       url('/fonts/OpenDyslexic-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

## Cách 2: Sử dụng CDN khác

Nếu CDN hiện tại không hoạt động, bạn có thể thử:

1. **Unpkg CDN:**
```css
@font-face {
  font-family: 'OpenDyslexic';
  src: url('https://unpkg.com/opendyslexic@latest/fonts/OpenDyslexic-Regular.woff2') format('woff2');
}
```

2. **GitHub Raw:**
```css
@font-face {
  font-family: 'OpenDyslexic';
  src: url('https://raw.githubusercontent.com/antijingoist/opendyslexic/master/compiled/OpenDyslexic-Regular.woff2') format('woff2');
}
```

## Lưu ý

- Font sẽ tự động fallback về 'Lexend' nếu OpenDyslexic không load được
- Đảm bảo đường dẫn font chính xác
- Kiểm tra console browser để xem lỗi load font (nếu có)

