// MENU - START
const burgerMenu = document.querySelector(".burger");
const slideMenu = document.querySelector(".menu_container");

burgerMenu.addEventListener("click", () => {
  slideMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});
// MENU - END