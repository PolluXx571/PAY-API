let elBtn = document.querySelector(".header-box__btn");
let elHeader = document.querySelector(".site-header");

elBtn.addEventListener("click", function () {
  elHeader.classList.toggle("site-header__active");
});
