const hamMenu = document.querySelectorAll(".toggle-menu");
const menuModal = document.querySelector(".menu-modal");

hamMenu.forEach((icon) => {
  icon.addEventListener("click", () => {
    menuModal.classList.toggle("hidden");
  });
});
