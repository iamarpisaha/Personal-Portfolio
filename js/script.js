const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-icon");

window.addEventListener("click", () => {
  header.classList.remove("menu-open-2");
});
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  header.classList.toggle("menu-open-2");
});
