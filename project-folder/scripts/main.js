// Navigation
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", function () {
      document
        .querySelectorAll(".nav-item")
        .forEach((i) => i.classList.remove("active"));
      document
        .querySelectorAll(".section")
        .forEach((s) => s.classList.remove("active"));

      this.classList.add("active");
      const section = this.getAttribute("data-section");
      document.getElementById(section).classList.add("active");
    });
  });
});
