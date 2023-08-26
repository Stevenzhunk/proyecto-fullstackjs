const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");
const navOn = document.getElementById("nav-active");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("menu-open"); // Agrega o quita la clase menu-open
  navOn.classList.toggle("navfull");
});
