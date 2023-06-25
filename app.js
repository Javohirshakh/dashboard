let hamburger = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
});
