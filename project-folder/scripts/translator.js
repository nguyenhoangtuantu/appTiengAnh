// Translator
async function translateText() {
  const sourceText = document.getElementById("sourceText").value.trim();
  const targetTextarea = document.getElementById("targetText");

  if (!sourceText) {
    alert("Vui lòng nhập văn bản cần dịch!");
    return;
  }

  targetTextarea.value = "Đang dịch...";

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        sourceText
      )}&langpair=en|vi`
    );
    const data = await response.json();

    if (data.responseData && data.responseData.translatedText) {
      targetTextarea.value = data.responseData.translatedText;
    } else {
      targetTextarea.value = "Lỗi dịch. Vui lòng thử lại.";
    }
  } catch (error) {
    targetTextarea.value = "Lỗi kết nối. Vui lòng thử lại sau.";
  }
}

function copyTranslation() {
  const text = document.getElementById("targetText").value;
  if (!text || text === "Kết quả dịch sẽ hiện ở đây...") {
    alert("Chưa có nội dung để sao chép!");
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    alert("Đã sao chép!");
  });
}
