// MENU - START
const burgerMenu = document.querySelector(".burger");
const slideMenu = document.querySelector(".menu_container");
const navLinks = document.querySelectorAll('.nav ul li');

burgerMenu.addEventListener("click", () => {
  slideMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

if (window.innerWidth < 1280) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      slideMenu.classList.remove("active");
      burgerMenu.classList.remove("active");
    })
  })
}
// MENU - END

// SCROLL TO - START
const scrollToTopBtn = document.querySelector('.scroll_up_btn');

scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: "smooth" }))
// SCROLL TO - END