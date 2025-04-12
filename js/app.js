

const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const sideMenu = document.getElementById("sideMenu");
const backdrop = document.getElementById("backdrop");

function openMenu() {
  sideMenu.classList.remove("translate-x-full");
  sideMenu.classList.add("translate-x-0");
  backdrop.classList.remove("hidden");
}

function closeMenu() {
  sideMenu.classList.add("translate-x-full");
  sideMenu.classList.remove("translate-x-0");
  backdrop.classList.add("hidden");
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu); 
