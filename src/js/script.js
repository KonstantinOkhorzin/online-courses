"use strict";

document.addEventListener('DOMContentLoaded', () => {

  //Меню бургер
  const iconMenu = document.querySelector('.navbar__burger');
  const menuBody = document.querySelector('.navbar__menu');
  if (iconMenu) {
    iconMenu.addEventListener('click', (e) => {
      document.body.classList.toggle('_lock');//убераеться возможность скрола при открытом меню
      iconMenu.classList.toggle('navbar__burger_active');
      menuBody.classList.toggle('navbar__menu_active');
    });
  }

  //to top
  const toTopBtn = document.querySelector('.footer__scroll-up');
  toTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  //remove hover
  function hasTouch() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
  if (hasTouch()) {
    try {
      for (var si in document.styleSheets) {
        var styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;

        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
          if (!styleSheet.rules[ri].selectorText) continue;

          if (styleSheet.rules[ri].selectorText.match(':hover')) {
            styleSheet.deleteRule(ri);
          }
        }
      }
    } catch (ex) { }
  }

  //show password 
  const eyes = document.querySelectorAll('.modal__eye');
  eyes.forEach(eye => {
    eye.addEventListener('click', () => {
      eye.classList.toggle('modal__eye_active');
      if (eye.previousElementSibling.getAttribute('type') === 'password') {
        eye.previousElementSibling.setAttribute('type', 'text');
      } else {
        eye.previousElementSibling.setAttribute('type', 'password');
      }
    });
  });



});


