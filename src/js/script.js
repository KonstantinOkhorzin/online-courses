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

  //tabs
  const tabs = document.querySelectorAll('.benefits__tab');
  const tabsContent = document.querySelectorAll('.benefits__tab-content');

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabsContent.forEach(item => {
        item.classList.remove('benefits__tab-content_active');
      });
      tabs.forEach(item => {
        item.classList.remove('benefits__tab_active');
      });
      tabsContent[i].classList.add('benefits__tab-content_active');
      tabs[i].classList.add('benefits__tab_active');
    });
  });

  // Accordion
  const accordionsArray = document.querySelectorAll('[data-accordions]');
  if (accordionsArray.length) {
    const accordionsRegular = Array.from(accordionsArray).filter(item => {
      return !item.dataset.accordions.split(",")[0];
    });
    if (accordionsRegular.length) {
      initAccordions(accordionsRegular);
    }

    const accordionsMedia = Array.from(accordionsArray).filter(item => {
      return item.dataset.accordions.split(",")[0];
    });
    if (accordionsMedia.length) {
      const breakpointsArray = [];
      accordionsMedia.forEach(item => {
        const params = item.dataset.accordions;
        const breakpoint = {};
        const paramsArray = params.split(",");
        breakpoint.value = paramsArray[0];
        breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
        breakpoint.item = item;
        breakpointsArray.push(breakpoint);
      });

      let mediaQueries = breakpointsArray.map(item => {
        return `(${item.type}-width: ${item.value}px),${item.value},${item.type}`;
      });
      mediaQueries = mediaQueries.filter((item, i, arr) => {
        return arr.indexOf(item) === i;
      });

      mediaQueries.forEach(breakpoint => {
        const paramsArray = breakpoint.split(",");
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);

        const accordionsArray = breakpointsArray.filter(item => {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });

        matchMedia.addEventListener('change', () => {
          initAccordions(accordionsArray, matchMedia);
        });
        initAccordions(accordionsArray, matchMedia);
      });
    }
  }

  function initAccordions(accordionsArray, matchMedia = false) {
    accordionsArray.forEach(accordionsBlock => {
      accordionsBlock = matchMedia ? accordionsBlock.item : accordionsBlock;
      if (matchMedia.matches || !matchMedia) {
        accordionsBlock.classList.add('_init');
        initAccordionBody(accordionsBlock);
        accordionsBlock.addEventListener("click", setAccordionAction);
      } else {
        accordionsBlock.classList.remove('_init');
        initAccordionBody(accordionsBlock, false);
        accordionsBlock.removeEventListener("click", setAccordionAction);
      }
    });
  }

  function initAccordionBody(accordionsBlock, hideAccordionBody = true) {
    const accordionTitle = accordionsBlock.querySelectorAll('[data-accordion]');
    if (accordionTitle.length) {
      accordionTitle.forEach(accordionTitle => {
        if (hideAccordionBody) {
          accordionTitle.removeAttribute('tabindex');
          if (!accordionTitle.classList.contains('_active')) {
            accordionTitle.nextElementSibling.hidden = true;
          }
        } else {
          accordionTitle.setAttribute('tabindex', '-1');
          accordionTitle.nextElementSibling.hidden = false;
        }
      });
    }
  }

  function setAccordionAction(e) {
    const el = e.target;
    if (el.hasAttribute('data-accordion') || el.closest('[data-accordion]')) {
      const accordionTitle = el.hasAttribute('data-accordion') ? el : el.closest('[data-accordion]');
      const accordionsBlock = accordionTitle.closest('[data-accordions]');
      const oneaccordion = accordionsBlock.hasAttribute('data-one-accordion') ? true : false;
      if (!accordionsBlock.querySelectorAll('._slide').length) {
        if (oneaccordion && !accordionTitle.classList.contains('_active')) {
          hideAccordionBody(accordionsBlock);
        }
        accordionTitle.classList.toggle('_active');
        _slideToggle(accordionTitle.nextElementSibling, 500);
      }
      e.preventDefault();
    }
  }

  function hideAccordionBody(accordionsBlock) {
    const accordionActiveTitle = accordionsBlock.querySelector('[data-accordion]._active');
    if (accordionActiveTitle) {
      accordionActiveTitle.classList.remove('_active');
      _slideUp(accordionActiveTitle.nextElementSibling, 500);
    }
  }

  let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
        target.hidden = true;
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
      }, duration);
    }
  };

  let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (target.hidden) {
        target.hidden = false;
      }
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
      }, duration);
    }
  };

  let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  };


});


