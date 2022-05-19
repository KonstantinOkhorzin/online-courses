"use strict";
//Меню бургер
const iconMenu = document.querySelector('.navbar__burger');
const menuBody = document.querySelector('.navbar__menu');
if (iconMenu){
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

