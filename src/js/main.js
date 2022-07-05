import * as functions from "./modules/functions.js";
import navbar from "./modules/navbar.js";
import accordion from "./modules/accordion.js";
import { sliderReviews, sliderTeam, sliderCourses, sliderEvents, sliderBlogs} from "./modules/sliders.js";
import tabs from "./modules/tabs.js";


import modals from "./modules/modals.js";
import { openModal } from "./modules/modals.js";
import forms from "./modules/forms.js";
import timer from "./modules/timer.js";
// import { CardCourses } from "./modules/cards.js";

document.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.overlay', '#consultation', modalTimerId), 500000);

    functions.isWebp();
    functions.removeHover();
    functions.showPass();
    functions.toTop();
    navbar();
    accordion();
    try {
        tabs('.benefits__tab', '.benefits__tab-content', 'benefits__tab_active', 'benefits__tab-content_active');
    } catch(e) {}


    // modals('.overlay', '[data-modal-consultation]', '#consultation', modalTimerId);
    // forms();
    // timer();

});