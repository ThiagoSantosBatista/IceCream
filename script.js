const mobileMenu = document.querySelector("#menu__mobile");
const navItems = document.querySelectorAll(".nav__item");
const nav = document.querySelector(".nav");
const mobileMenuAbrir = document.querySelector("#menu__mobile-abrir");
const mobileMenuFechar = document.querySelector("#menu__mobile-fechar");
const form = document.querySelector("#form");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  nav.classList.toggle("ativo");
  mobileMenuAbrir.classList.toggle("on");
  mobileMenuFechar.classList.toggle("on");
  const ativo = nav.classList.contains("ativo");
  mobileMenu.setAttribute("aria-expanded", ativo);
  if (ativo) {
    mobileMenu.setAttribute("aria-label", "Fechar menu");
  } else {
    mobileMenu.setAttribute("aria-label", "Abrir menu");
  }
}

function abrirModal(modalid) {
  const modal = document.getElementById(modalid);
  modal.classList.add("mostrar");
  modal.addEventListener("click", (e) => {
    if (e.target.id == modalid || e.target.id == "fechar") {
      modal.classList.remove("mostrar");
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

abrirModal("modal");

navItems.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

mobileMenu.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("touchstart", toggleMenu);
