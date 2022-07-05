
export function openModal(overlaySelector, modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    const overlay = document.querySelector(overlaySelector);
    overlay.classList.add('overlay_active');
    modal.classList.add('modal_active');
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
        clearInterval(modalTimerId); //если user сам откроет тогда удаляем
    }
    
}

export function closeModal(overlaySelector, modalSelector,) {
    const modal = document.querySelector(modalSelector);
    const overlay = document.querySelector(overlaySelector);
    modal.classList.remove('modal_active');
    overlay.classList.remove('overlay_active');
    document.body.style.overflow = '';
}

function modals(overlaySelector, triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelector(triggerSelector);
    const overlay = document.querySelector(overlaySelector);

    modalTrigger.addEventListener('click', () => openModal(overlaySelector, modalSelector, modalTimerId));

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.classList.contains('modal__close')) {
            closeModal(overlaySelector, modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && overlay.classList.contains('overlay_active')) {
            closeModal(overlaySelector, modalSelector);
        }
    });

    function showModalByScroll() {
    //если user доскролил до конца страницы
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(overlaySelector, modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll); //удаляем событие после одного показа
        }   
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modals;