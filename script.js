"use strict";

const menuOpen = document.querySelector(".hemburger-menu");
const menuClose = document.querySelector(".close-button");
const backdropMenus = document.querySelector(".backdrop-for-menu");
const mobileMenus = document.querySelector(".mobile-menus");

menuOpen.addEventListener("click", function () {
  if (backdropMenus.classList.contains("close-mobile-menu")) {
    backdropMenus.classList.remove("close-mobile-menu");
  }
});
menuClose.addEventListener("click", function () {
  if (!backdropMenus.classList.contains("close-mobile-menu")) {
    backdropMenus.classList.add("close-mobile-menu");
  }
});
backdropMenus.addEventListener("click", function () {
  if (!backdropMenus.classList.contains("close-mobile-menu")) {
    backdropMenus.classList.add("close-mobile-menu");
  }
});
