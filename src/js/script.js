"use strict";

document.addEventListener('DOMContentLoaded', () => {

  //Меню бургер------------------------------------------------------------------------------------------------
  const iconMenu = document.querySelector('.navbar__burger');
  const menuBody = document.querySelector('.navbar__menu');
  if (iconMenu) {
    iconMenu.addEventListener('click', (e) => {
      document.body.classList.toggle('_lock');//убераеться возможность скрола при открытом меню
      iconMenu.classList.toggle('navbar__burger_active');
      menuBody.classList.toggle('navbar__menu_active');
    });
  }

  //to top------------------------------------------------------------------------------------------------------
  const toTopBtn = document.querySelector('.footer__scroll-up');
  toTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  //remove hover------------------------------------------------------------------------------------------------
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

  //show password ----------------------------------------------------------------------------------------
  const eyes = document.querySelectorAll('.modal__eye');
  eyes.forEach(eye => {
    eye.addEventListener('click', () => {
      eye.classList.toggle('modal__eye_active');
      const input = eye.previousElementSibling;
      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
      } else {
        input.setAttribute('type', 'password');
      }
    });
  });

  //tabs---------------------------------------------------------------------------------------------------
  const tabs = document.querySelectorAll('.benefits__tab');
  const tabsContent = document.querySelectorAll('.benefits__tab-content');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.remove('benefits__tab-content_active');
    });

    tabs.forEach(item => {
      item.classList.remove('benefits__tab_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('benefits__tab-content_active');
    tabs[i].classList.add('benefits__tab_active');
  }

  hideTabContent();
  showTabContent();

  tabs.forEach((item, i) => {
    item.addEventListener('click', () => {
      hideTabContent();
      showTabContent(i);
    });
  });


  // Accordion----------------------------------------------------------------------------------------------
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


  // Modal----------------------------------------------------------------------------------------------
  const modalTrigger = document.querySelector('[data-modal-consultation]');
  const modal = document.querySelector('#consultation');
  const overlay = document.querySelector('.overlay');

  function openModal() {
    overlay.classList.add('overlay_active');
    modal.classList.add('modal_active');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId); //если user сам откроет тогда удаляем
  }
  modalTrigger.addEventListener('click', openModal);

  function closeModal() {
    modal.classList.remove('modal_active');
    overlay.classList.remove('overlay_active');
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('modal__close')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && overlay.classList.contains('overlay_active')) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 1000000000);

  function showModalByScroll() {
    //если user доскролил до конца страницы
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll); //удаляем событие после одного показа
    }
  }

  window.addEventListener('scroll', showModalByScroll);



  // class CardCourses---------------------------------------------------------------------------------------------
  class CardCourses {
    constructor(src, category, course, price, speaker, parentSelector, ...classes) {
      this.src = src;
      this.category = category;
      this.course = course;
      this.price = price;
      this.speaker = speaker;
      this.parent = document.querySelector(parentSelector);
      this.modificator = this.setCatagoryClass();
      this.classes = classes;
    }
    setCatagoryClass() {
      switch(this.category) {
        case 'Marketing':
          return 'marketing';
        case 'Management':
          return 'management';
        case 'HR & Recruting':
          return 'hr';
        case 'Design':
          return 'design';
        case 'Development':
          return 'dev';
        default:
          return 'dev';
      } 
    }
    render() {
      const element = document.createElement('li');
      this.classes.forEach(className => element.classList.add(className));
      element.innerHTML = `
        <div class="card-courses__avatar">
          <img class="card-courses__img" src=${this.src} alt="by ${this.speaker}">
        </div>
        <div class="card-courses__content">
          <a class="card-courses__category card-courses__category_${this.modificator}"
            href="courses.html">${this.category}</a>
          <a class="card-courses__course" href="course.html">${this.course}</a>
          <div class="card-courses__info">
            <div class="card-courses__price">${this.price}</div>
            <div class="card-courses__speaker">by ${this.speaker}</div>
          </div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  const getResourse = async (url) => {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();
  };

  getResourse('http://localhost:3000/courses')
    .then(data => {
      data.forEach(({speaker, avatar, course, category, price}) => {
        new CardCourses(avatar, category, course, price, speaker, '.main-page-courses__list', 'card-courses').render();
      });
    });

  // Form---------------------------------------------------------------------------------------------
    const formConsultation = document.querySelector('#form-consultation');

    const message = {
      loading: '../icons/spinner.svg',
      success: 'Thanks! We will contact you shortly',
      failure: 'Sorry! Server invalide'
    };

    const postData = async (url, data) => {
      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      });

      if (!result.ok) {
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
      }

      return await result.json();
    };

    bindPostData(formConsultation);

    function bindPostData(form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.classList.add('modal__spinner');
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        postData('http://localhost:3000/consultation', json)
        .then(data => {
            showThanksModal(message.success);
        }).catch(() => {
            showThanksModal(message.failure);
        }).finally (() => {
            form.reset();
            statusMessage.remove();
        });
      });
    }

    function showThanksModal(message) {
      modal.classList.remove('modal_active');
      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal', 'modal_active');
      thanksModal.innerHTML = `
      <button class="modal__close"></button>
      <div class="modal__title">${message}</div>
      `;
      overlay.append(thanksModal);
      setTimeout(() => {
        thanksModal.remove();
        closeModal();
      }, 2000);
    }
});


