const hamMenu = document.querySelectorAll(".toggle-menu");
const menuModal = document.querySelector(".menu-modal");
console.log(hamMenu);

hamMenu.forEach((icon) => {
  icon.addEventListener("click", () => {
    menuModal.classList.toggle("hidden");
  });
});
