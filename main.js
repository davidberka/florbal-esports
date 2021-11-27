// MENU - START
const burgerMenu = document.querySelector(".burger");
const slideMenu = document.querySelector(".menu_container");

burgerMenu.addEventListener("click", () => {
  slideMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});
// MENU - END

// SCROLL TO - START
const scrollToTopBtn = document.querySelector('.scroll_up_btn');

scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: "smooth" }))
// SCROLL TO - END