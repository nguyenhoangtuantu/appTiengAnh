// Grammar
function toggleGrammar(element) {
  const content = element.querySelector(".grammar-content");
  const allContents = document.querySelectorAll(".grammar-content");

  allContents.forEach((c) => {
    if (c !== content) c.classList.remove("active");
  });

  content.classList.toggle("active");
}
