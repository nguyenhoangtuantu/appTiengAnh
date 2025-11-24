# English Toolkit

Ứng dụng web giúp học tiếng Anh với các tính năng:

- Tra từ điển với phiên âm và ví dụ
- Dịch văn bản Anh-Việt
- Học ngữ pháp với các chủ đề cơ bản
- Tìm từ đồng nghĩa/trái nghĩa
- 100 từ tiếng Anh thông dụng với ví dụ
- Các đoạn hội thoại mẫu

## Tính năng mới - Phần mở rộng

- **100 từ tiếng Anh thông dụng** được phân loại theo:
  - Danh từ (20 từ)
  - Động từ (20 từ)
  - Tính từ (20 từ)
  - Trạng từ (20 từ)
  - Giới từ (20 từ)
- **5 đoạn hội thoại mẫu** trong các tình huống thực tế
- Bảng từ vựng với 5 cột: Từ vựng, Phát âm, Nghĩa, Ví dụ, Dịch nghĩa

## Cấu trúc file

- `index.html` - File HTML chính
- `styles/main.css` - CSS chính (layout, navigation, base styles)
- `styles/components.css` - CSS cho các component (cards, buttons, forms)
- `styles/responsive.css` - CSS responsive
- `scripts/main.js` - JavaScript chính (navigation)
- `scripts/dictionary.js` - Xử lý tra từ điển
- `scripts/translator.js` - Xử lý dịch văn bản
- `scripts/grammar.js` - Xử lý phần ngữ pháp
- `scripts/synonyms.js` - Xử lý tìm từ đồng nghĩa
- `scripts/extension.js` - Xử lý phần mở rộng (từ vựng + hội thoại)

## Cách sử dụng

1. Mở file `index.html` trong trình duyệt web
2. Chọn chức năng cần sử dụng từ thanh navigation
3. Để học từ vựng, chọn "Phần mở rộng" và chọn loại từ muốn học
4. Xem các đoạn hội thoại mẫu để học cách sử dụng từ trong ngữ cảnh

## API sử dụng

- Từ điển: dictionaryapi.dev
- Dịch thuật: MyMemory Translation API
