// Grammar Data
const grammarData = [
  {
    title: "Thì hiện tại đơn (Present Simple)",
    content: `
            <p><strong>Công thức:</strong></p>
            <p>Khẳng định: S + V(s/es)</p>
            <p>Phủ định: S + do/does + not + V</p>
            <p>Nghi vấn: Do/Does + S + V?</p>
            <p style="margin-top: 15px;"><strong>Ví dụ minh họa:</strong></p>
            <p>• I work in an office. (Tôi làm việc trong văn phòng)</p>
            <p>• She doesn't like coffee. (Cô ấy không thích cà phê)</p>
            <p>• Do you speak English? (Bạn có nói tiếng Anh không?)</p>
        `,
  },
  {
    title: "Thì hiện tại tiếp diễn (Present Continuous)",
    content: `
            <p><strong>Công thức:</strong></p>
            <p>S + am/is/are + V-ing</p>
            <p style="margin-top: 15px;"><strong>Ví dụ minh họa:</strong></p>
            <p>• I am studying English now. (Tôi đang học tiếng Anh bây giờ)</p>
            <p>• She is reading a book. (Cô ấy đang đọc sách)</p>
            <p>• They are playing football. (Họ đang chơi bóng đá)</p>
        `,
  },
  {
    title: "Thì quá khứ đơn (Past Simple)",
    content: `
            <p><strong>Công thức:</strong></p>
            <p>Khẳng định: S + V2/ed</p>
            <p>Phủ định: S + did not + V</p>
            <p>Nghi vấn: Did + S + V?</p>
            <p style="margin-top: 15px;"><strong>Ví dụ minh họa:</strong></p>
            <p>• I visited Ha Noi last year. (Tôi đã đến Hà Nội năm ngoái)</p>
            <p>• She didn't go to school yesterday. (Cô ấy không đi học hôm qua)</p>
            <p>• Did you see that movie? (Bạn có xem bộ phim đó không?)</p>
        `,
  },
  {
    title: "Modal Verbs (Động từ khuyết thiếu)",
    content: `
            <p><strong>Các động từ khuyết thiếu:</strong> can, could, may, might, must, should, will, would</p>
            <p><strong>Công thức:</strong> S + modal verb + V (nguyên thể)</p>
            <p style="margin-top: 15px;"><strong>Ví dụ minh họa:</strong></p>
            <p>• I can swim. (Tôi có thể bơi)</p>
            <p>• You should study hard. (Bạn nên học chăm chỉ)</p>
            <p>• She must go now. (Cô ấy phải đi ngay bây giờ)</p>
        `,
  },
  {
    title: "Cách dùng A / An / The",
    content: `
            <p><strong>A/An (mạo từ không xác định):</strong> Dùng cho danh từ số ít, không xác định</p>
            <p>• A: Trước phụ âm (a book, a car)</p>
            <p>• An: Trước nguyên âm (an apple, an hour)</p>
            <p style="margin-top: 15px;"><strong>The (mạo từ xác định):</strong> Dùng cho danh từ xác định, đã được nhắc đến</p>
            <p>• The book on the table is mine. (Quyển sách trên bàn là của tôi)</p>
        `,
  },
  {
    title: "Câu điều kiện (Conditional Sentences)",
    content: `
            <p><strong>Loại 1 (có thể xảy ra):</strong> If + S + V(s/es), S + will + V</p>
            <p>• If it rains, I will stay home. (Nếu trời mưa, tôi sẽ ở nhà)</p>
            <p style="margin-top: 15px;"><strong>Loại 2 (không có thật ở hiện tại):</strong> If + S + V2/ed, S + would + V</p>
            <p>• If I had money, I would buy a car. (Nếu tôi có tiền, tôi sẽ mua xe)</p>
            <p style="margin-top: 15px;"><strong>Loại 3 (không có thật trong quá khứ):</strong> If + S + had + V3, S + would have + V3</p>
            <p>• If I had studied, I would have passed the exam. (Nếu tôi đã học, tôi đã qua kỳ thi)</p>
        `,
  },
];

// Grammar Functions
document.addEventListener("DOMContentLoaded", function () {
  loadGrammarItems();
});

function loadGrammarItems() {
  const grammarList = document.getElementById("grammarList");
  if (!grammarList) return;

  let html = "";
  grammarData.forEach((item, index) => {
    html += `
            <div class="grammar-item" onclick="toggleGrammar(this)">
                <div class="grammar-title">${item.title}</div>
                <div class="grammar-content">${item.content}</div>
            </div>
        `;
  });

  grammarList.innerHTML = html;
}

function toggleGrammar(element) {
  const content = element.querySelector(".grammar-content");
  const allContents = document.querySelectorAll(".grammar-content");

  allContents.forEach((c) => {
    if (c !== content) c.classList.remove("active");
  });

  content.classList.toggle("active");
}
