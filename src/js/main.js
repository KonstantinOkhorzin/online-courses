import * as functions from "./modules/functions.js";
import navbar from "./modules/navbar.js";
import accordion from "./modules/accordion.js";
import "./modules/sliders.js";
import tabs from "./modules/tabs.js";
import modals from "./modules/modals.js";
import phonemask from "./modules/phonemask.js";
import search from "./modules/search.js";
import filter from "./modules/filter.js";
import events from "./modules/events.js";
import event from "./modules/event.js";
import timer from "./modules/timer.js";


document.addEventListener('DOMContentLoaded', () => {
    
    functions.isWebp();
    functions.removeHover();
    functions.showPass();
    functions.toTop();
    navbar();
    accordion();

    try {
        timer();
    }catch(e) {}

    try {
        tabs('.benefits__tab', '.benefits__tab-content', 'benefits__tab_active', 'benefits__tab-content_active');
    } catch(e) {}

    try {
        events();
    }catch(e) {}

    try {
        event();
    }catch(e) {}

    try {
        search();
    }catch(e) {}

    try {
        filter('.blog__tab', 'blog__tab_active');
    }catch(e) {}

    try {
        filter('.courses__tab', 'courses__tab_active');
    }catch(e) {}

    try {
        phonemask();
    }catch(e) {}

    try {
        modals('.modal-video__overlay', '.modal-video', '.play-video', 'modal-video__close', 'modal-video__overlay_active', 'modal-video_active');
    }catch(e) {}

    

    modals('.overlay-consultation', '#consultation', '.navbar__btn', 'modal__close', 'modal__overlay_active', 'modal_active');
    modals('.overlay-up', '#sing-up', '.navbar__register', 'modal__close', 'modal__overlay_active', 'modal_active');
    modals('.overlay-in', '#sing-in', '.navbar__log-in', 'modal__close', 'modal__overlay_active', 'modal_active');

});