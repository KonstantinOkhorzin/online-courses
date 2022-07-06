
import { postData } from "../services/services.js";

function forms() {
    const formConsultation = document.querySelector('#form-consultation');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('#consultation');

    const message = {
        loading: 'icons/spinner.svg',
        success: 'Thanks! We will contact you shortly',
        failure: 'Sorry! Server invalide'
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
            closeModal(overlay, modal);
        }, 2000);
    }
}

export default forms;