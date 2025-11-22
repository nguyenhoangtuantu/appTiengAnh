// Synonyms
document.addEventListener("DOMContentLoaded", function () {
  const synonymInput = document.getElementById("synonymInput");
  if (synonymInput) {
    synonymInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") searchSynonyms();
    });
  }
});

async function searchSynonyms() {
  const word = document.getElementById("synonymInput").value.trim();
  const resultDiv = document.getElementById("synonymResult");

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
      resultDiv.innerHTML = '<div class="error">Không tìm thấy từ này.</div>';
      return;
    }

    const data = await response.json();
    displaySynonymsResult(data);
  } catch (error) {
    resultDiv.innerHTML =
      '<div class="error">Lỗi kết nối. Vui lòng thử lại sau.</div>';
  }
}

function displaySynonymsResult(data) {
  const resultDiv = document.getElementById("synonymResult");
  let synonyms = [];
  let antonyms = [];
  let partOfSpeech = "";

  data.forEach((entry) => {
    entry.meanings.forEach((meaning) => {
      if (!partOfSpeech) partOfSpeech = meaning.partOfSpeech;

      meaning.definitions.forEach((def) => {
        if (def.synonyms) synonyms = [...synonyms, ...def.synonyms];
        if (def.antonyms) antonyms = [...antonyms, ...def.antonyms];
      });

      if (meaning.synonyms) synonyms = [...synonyms, ...meaning.synonyms];
      if (meaning.antonyms) antonyms = [...antonyms, ...meaning.antonyms];
    });
  });

  synonyms = [...new Set(synonyms)];
  antonyms = [...new Set(antonyms)];

  let html = `<div class="card">`;
  html += `<div class="result-title">${data[0].word}</div>`;
  if (partOfSpeech) html += `<div class="phonetic">${partOfSpeech}</div>`;

  if (synonyms.length > 0) {
    html += `<div class="synonym-list">`;
    html += `<h3>Từ đồng nghĩa:</h3>`;
    html += `<div class="word-list">`;
    synonyms.forEach((syn) => {
      html += `<span class="word-tag">${syn}</span>`;
    });
    html += `</div></div>`;
  } else {
    html += `<p style="margin-top: 15px;">Không tìm thấy từ đồng nghĩa.</p>`;
  }

  if (antonyms.length > 0) {
    html += `<div class="antonym-list">`;
    html += `<h3>Từ trái nghĩa:</h3>`;
    html += `<div class="word-list">`;
    antonyms.forEach((ant) => {
      html += `<span class="word-tag">${ant}</span>`;
    });
    html += `</div></div>`;
  }

  html += `</div>`;
  resultDiv.innerHTML = html;
}
