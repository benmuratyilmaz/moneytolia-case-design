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

// ---- Modal ----

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const closeModalBottom = document.getElementById("closeModalBottom");
const modal = document.getElementById("modal");
const backdrop2 = document.getElementById("backdrop2");

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  backdrop2.classList.remove("hidden");
});

function closeModalFunc() {
  modal.classList.add("hidden");
  backdrop2.classList.add("hidden");
}

closeModal.addEventListener("click", closeModalFunc);
backdrop.addEventListener("click", closeModalFunc);
