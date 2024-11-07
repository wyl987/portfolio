const menuIcon = document.querySelector("#hambuger-icon");
const dropDownMenu = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  dropDownMenu.classList.toggle('active');
}