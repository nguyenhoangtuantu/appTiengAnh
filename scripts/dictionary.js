// Dictionary
document.addEventListener("DOMContentLoaded", function () {
  const dictInput = document.getElementById("dictInput");
  if (dictInput) {
    dictInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") searchDictionary();
    });
  }
});

async function searchDictionary() {
  const word = document.getElementById("dictInput").value.trim();
  const resultDiv = document.getElementById("dictResult");

  if (!word) {
    resultDiv.innerHTML = '<div class="error">Vui lòng nhập từ cần tra!</div>';
    return;
  }

  resultDiv.innerHTML = '<div class="loading">Đang tìm kiếm...</div>';

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (!response.ok) {
      resultDiv.innerHTML =
        '<div class="error">Không tìm thấy từ này. Vui lòng kiểm tra lại chính tả.</div>';
      return;
    }

    const data = await response.json();
    displayDictionaryResult(data);
  } catch (error) {
    resultDiv.innerHTML =
      '<div class="error">Lỗi kết nối. Vui lòng thử lại sau.</div>';
  }
}

function displayDictionaryResult(data) {
  const resultDiv = document.getElementById("dictResult");
  let html = "";

  data.forEach((entry) => {
    const phonetic =
      entry.phonetic || (entry.phonetics[0] ? entry.phonetics[0].text : "");

    html += `<div class="card">`;
    html += `<div class="result-header">`;
    html += `<div class="result-title">${entry.word}</div>`;
    if (phonetic) html += `<div class="phonetic">${phonetic}</div>`;
    html += `</div>`;

    entry.meanings.forEach((meaning) => {
      html += `<div class="meaning">`;
      html += `<div class="part-of-speech">${meaning.partOfSpeech}</div>`;

      meaning.definitions.slice(0, 3).forEach((def, index) => {
        html += `<div class="definition">${index + 1}. ${def.definition}</div>`;
        if (def.example) {
          html += `<div class="example-label">Ví dụ minh họa:</div>`;
          html += `<div class="example">"${def.example}"</div>`;
        }
      });
      html += `</div>`;
    });

    html += `</div>`;
  });

  resultDiv.innerHTML = html;
}
