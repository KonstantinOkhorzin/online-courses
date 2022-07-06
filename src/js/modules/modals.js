function modals(overlaySelector, modalSelector, triggerSelector, closeSelector, overlayActivSelector, modalActivSelector) {
    const overlay = document.querySelector(overlaySelector);
    const modal = document.querySelector(modalSelector);
    const trigger = document.querySelectorAll(triggerSelector);

    function openModal() {
        overlay.classList.add(overlayActivSelector);
        modal.classList.add(modalActivSelector);
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove(modalActivSelector);
        overlay.classList.remove(overlayActivSelector);
        document.body.style.overflow = '';
    }

    trigger.forEach(item => item.addEventListener('click', openModal));

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.classList.contains(closeSelector)) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && overlay.classList.contains(overlayActivSelector)) {
            closeModal();
        }
    });

}

export default modals;




// export function openModal(overlaySelector, modalSelector, modalTimerId) {
//     const modal = document.querySelector(modalSelector);
//     const overlay = document.querySelector(overlaySelector);
//     overlay.classList.add('overlay_active');
//     modal.classList.add('modal_active');
//     document.body.style.overflow = 'hidden';
//     if (modalTimerId) {
//         clearInterval(modalTimerId); //если user сам откроет тогда удаляем
//     }
    
// }

// export function closeModal(overlaySelector, modalSelector,) {
//     const modal = document.querySelector(modalSelector);
//     const overlay = document.querySelector(overlaySelector);
//     modal.classList.remove('modal_active');
//     overlay.classList.remove('overlay_active');
//     document.body.style.overflow = '';
// }

// function modals(overlaySelector, triggerSelector, modalSelector, modalTimerId) {
//     const modalTrigger = document.querySelector(triggerSelector);
//     const overlay = document.querySelector(overlaySelector);

//     modalTrigger.addEventListener('click', () => openModal(overlaySelector, modalSelector, modalTimerId));

//     overlay.addEventListener('click', (e) => {
//         if (e.target === overlay || e.target.classList.contains('modal__close')) {
//             closeModal(overlaySelector, modalSelector);
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && overlay.classList.contains('overlay_active')) {
//             closeModal(overlaySelector, modalSelector);
//         }
//     });

//     function showModalByScroll() {
//     //если user доскролил до конца страницы
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             openModal(overlaySelector, modalSelector, modalTimerId);
//             window.removeEventListener('scroll', showModalByScroll); //удаляем событие после одного показа
//         }   
//     }

//     window.addEventListener('scroll', showModalByScroll);
// }

// export default modals;