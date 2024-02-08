const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 70);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("box-x");
  menu.classList.toggle("open");
};

menu.onscroll = () => {
  menu.classList.remove("box-x");
  menu.classList.remove("open");
};
