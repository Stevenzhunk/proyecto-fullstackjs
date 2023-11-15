const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");
const navOn = document.getElementById("nav-active");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("menu-open"); // Agrega o quita la clase menu-open
  navOn.classList.toggle("navfull");
});

//script botones item:

if (document.getElementById("cantidad_item")) {
  const cantidad_item = document.getElementById("cantidad_item");

  const aumentar_cantidad_item = document.getElementById("boton_aumentar_item");

  const disminuir_cantidad_item = document.getElementById(
    "boton_disminuir_item"
  );

  aumentar_cantidad_item.addEventListener("click", () => {
    let q = parseInt(cantidad_item.textContent);
    q++;
    cantidad_item.textContent = String(q);
  });

  disminuir_cantidad_item.addEventListener("click", () => {
    let q = parseInt(cantidad_item.textContent);
    if (q == 0) {
      cantidad_item.textContent = String(q);
    } else {
      q--;
      cantidad_item.textContent = String(q);
    }
  });
} else {
  console.log("elemento no existe en pagina");
}

//script botones babyyoda y pidgeotto cart:

if (document.getElementById("cantidad_babyyoda_cart")) {
  const cantidad_babyyoda_cart = document.getElementById(
    "cantidad_babyyoda_cart"
  );

  const aumentar_cantidad_babyyoda_cart = document.getElementById(
    "boton_aumentar_babyyoda_cart"
  );

  const disminuir_cantidad_babyyoda_cart = document.getElementById(
    "boton_disminuir_babyyoda_cart"
  );

  aumentar_cantidad_babyyoda_cart.addEventListener("click", () => {
    let q = parseInt(cantidad_babyyoda_cart.textContent);
    q++;
    cantidad_babyyoda_cart.textContent = String(q);
  });

  disminuir_cantidad_babyyoda_cart.addEventListener("click", () => {
    let q = parseInt(cantidad_babyyoda_cart.textContent);
    if (q == 0) {
      cantidad_babyyoda_cart.textContent = String(q);
    } else {
      q--;
      cantidad_babyyoda_cart.textContent = String(q);
    }
  });

  const cantidad_pidgeotto_cart = document.getElementById(
    "cantidad_pidgeotto_cart"
  );

  const aumentar_cantidad_pidgeotto_cart = document.getElementById(
    "boton_aumentar_pidgeotto_cart"
  );

  const disminuir_cantidad_pidgeotto_cart = document.getElementById(
    "boton_disminuir_pidgeotto_cart"
  );

  aumentar_cantidad_pidgeotto_cart.addEventListener("click", () => {
    let q = parseInt(cantidad_pidgeotto_cart.textContent);
    q++;
    cantidad_pidgeotto_cart.textContent = String(q);
  });

  disminuir_cantidad_pidgeotto_cart.addEventListener("click", () => {
    let q = parseInt(cantidad_pidgeotto_cart.textContent);
    if (q == 0) {
      cantidad_pidgeotto_cart.textContent = String(q);
    } else {
      q--;
      cantidad_pidgeotto_cart.textContent = String(q);
    }
  });
} else {
  console.log("elemento no existe en pagina");
}
