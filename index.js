const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");
const navOn = document.getElementById("nav-active");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("menu-open"); // Agrega o quita la clase menu-open
  navOn.classList.toggle("navfull");
});

//script botones item y carrito:

const cantidad = document.getElementById("cantidad");

const aumentar_cantidad = document.getElementById("boton_aumentar");

const disminuir_cantidad = document.getElementById("boton_disminuir");

let q = parseInt(cantidad.textContent);

aumentar_cantidad.addEventListener("click", () => {
  q++;
  cantidad.textContent = String(q);
});

disminuir_cantidad.addEventListener("click", () => {
  if (q == 0) {
    cantidad.textContent = String(q);
  } else {
    q--;
    cantidad.textContent = String(q);
  }
});
