import * as functions from "./modules/functions.js";
import navbar from "./modules/navbar.js";
import accordion from "./modules/accordion.js";
import "./modules/sliders.js";
import tabs from "./modules/tabs.js";
import modals from "./modules/modals.js";



document.addEventListener('DOMContentLoaded', () => {

    

    functions.isWebp();
    functions.removeHover();
    functions.showPass();
    functions.toTop();
    navbar();
    accordion();
    try {
        tabs('.benefits__tab', '.benefits__tab-content', 'benefits__tab_active', 'benefits__tab-content_active');
    } catch(e) {}

    modals('.modal__overlay', '#consultation', '.navbar__btn', 'modal__close', 'modal__overlay_active', 'modal_active');
    modals('.modal__overlay', '#sing-up', '.navbar__register', 'modal__close', 'modal__overlay_active', 'modal_active');
    modals('.modal__overlay', '#sing-in', '.navbar__log-in', 'modal__close', 'modal__overlay_active', 'modal_active');
    modals('.modal-video__overlay', '.modal-video', '.play-video', 'modal-video__close', 'modal-video__overlay_active', 'modal-video_active');


});