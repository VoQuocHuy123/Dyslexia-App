# Hướng dẫn kết nối Supabase

## Cấu hình

### 1. Cài đặt dependencies

```bash
npm install @supabase/supabase-js
```

### 2. Tạo file `.env`

Tạo file `.env` trong thư mục gốc của project với nội dung:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

⚠️ **Lưu ý**: File `.env` đã được thêm vào `.gitignore` để bảo mật thông tin đăng nhập.

### 3. Lấy thông tin Supabase

1. Truy cập [Supabase Dashboard](https://app.supabase.com)
2. Chọn project của bạn
3. Vào **Settings** → **API**
4. Copy **Project URL** và **anon/public key**

## Sử dụng

### Trong TypeScript/JavaScript

File cấu hình Supabase client đã được tạo sẵn tại `src/lib/supabase.ts`:

```typescript
import { supabase } from '@/lib/supabase';

// Ví dụ: Lấy tất cả dữ liệu từ bảng
const { data, error } = await supabase
  .from('LibraryWord')
  .select('*');

if (error) {
  console.error('Error:', error);
} else {
  console.log('Data:', data);
}
```

### Các ví dụ truy vấn phổ biến

#### 1. Lấy tất cả dữ liệu

```typescript
const { data, error } = await supabase
  .from('LibraryWord')
  .select('*');
```

#### 2. Lấy dữ liệu với giới hạn

```typescript
const { data, error } = await supabase
  .from('LibraryWord')
  .select('*')
  .limit(10);
```

#### 3. Lọc dữ liệu theo điều kiện

```typescript
const { data, error } = await supabase
  .from('LibraryWord')
  .select('*')
  .eq('userid', 'u001');
```

#### 4. Sắp xếp dữ liệu

```typescript
const { data, error } = await supabase
  .from('LibraryWord')
  .select('*')
  .order('createdat', { ascending: false });
```

#### 5. Tìm kiếm với nhiều điều kiện

```typescript
const { data, error } = await supabase
  .from('LibraryWord')
  .select('*')
  .eq('userid', 'u001')
  .like('word', '%mèo%');
```

#### 6. Thêm dữ liệu mới

```typescript
const { data, error } = await supabase
  .from('LibraryWord')
  .insert([
    {
      wordid: 'w005',
      userid: 'u001',
      word: 'chó',
      ttsurl: 'https://example.com/tts/cho.mp3'
    }
  ]);
```

#### 7. Cập nhật dữ liệu

```typescript
const { data, error } = await supabase
  .from('LibraryWord')
  .update({ word: 'mèo con' })
  .eq('wordid', 'w001');
```

#### 8. Xóa dữ liệu

```typescript
const { data, error } = await supabase
  .from('LibraryWord')
  .delete()
  .eq('wordid', 'w001');
```

### Authentication

#### Đăng ký người dùng mới

```typescript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123'
});
```

#### Đăng nhập

```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
});
```

#### Đăng xuất

```typescript
const { error } = await supabase.auth.signOut();
```

#### Lấy thông tin user hiện tại

```typescript
const { data: { user } } = await supabase.auth.getUser();
```

#### Lắng nghe thay đổi auth state

```typescript
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth event:', event);
  console.log('Session:', session);
});
```

## Cấu trúc dữ liệu

### Bảng LibraryWord

| Cột | Kiểu | Mô tả |
|-----|------|-------|
| wordid | string | ID duy nhất của từ |
| userid | string | ID người dùng |
| word | string | Từ vựng |
| ttsurl | string | URL file audio text-to-speech |
| createdat | timestamp | Thời gian tạo |

## Xử lý lỗi

Luôn kiểm tra `error` sau mỗi truy vấn:

```typescript
const { data, error } = await supabase
  .from('LibraryWord')
  .select('*');

if (error) {
  console.error('Error fetching data:', error.message);
  // Xử lý lỗi
  return;
}

// Sử dụng data
console.log('Success:', data);
```

## Realtime Subscriptions

Lắng nghe thay đổi dữ liệu theo thời gian thực:

```typescript
const channel = supabase
  .channel('library-word-changes')
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'LibraryWord'
    },
    (payload) => {
      console.log('Change received!', payload);
    }
  )
  .subscribe();

// Hủy subscription khi không cần
channel.unsubscribe();
```

## Tài liệu tham khảo

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [PostgreSQL Functions](https://supabase.com/docs/guides/database/functions)

## Troubleshooting

### Lỗi "Table not found"

- Kiểm tra tên bảng có đúng không (phân biệt hoa thường)
- Đảm bảo bảng đã được tạo trong Supabase Dashboard
- Kiểm tra RLS (Row Level Security) policies

### Lỗi "Permission denied"

- Kiểm tra RLS policies trong Supabase Dashboard
- Đảm bảo anon key có quyền truy cập bảng
- Thêm policies cho các operations (SELECT, INSERT, UPDATE, DELETE)

### Không kết nối được

- Kiểm tra `.env` file có chứa đúng URL và key
- Kiểm tra internet connection
- Xem console log để biết chi tiết lỗi
