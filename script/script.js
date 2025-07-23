document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modo-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
