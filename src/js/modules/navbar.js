function navbar() {
    const iconMenu = document.querySelector('.navbar__burger');
    const menuBody = document.querySelector('.navbar__menu');
    if (iconMenu) {
        iconMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock');//убераеться возможность скрола при открытом меню
        iconMenu.classList.toggle('navbar__burger_active');
        menuBody.classList.toggle('navbar__menu_active');
        });
    }
}

export default navbar;