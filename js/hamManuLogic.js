const hamMenu = document.querySelector(".hamburger-menu");
const menuModal = document.querySelector(".menu-modal");

hamMenu.addEventListener("click", () => {
  console.log("hello");
  hamMenu.classList.add("hidden");
  menuModal.classList.remove("hidden");
});
