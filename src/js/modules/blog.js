export default function() {
    const filterBtns = document.querySelectorAll('.blog__tab');

    function removeActiveClass() {
        filterBtns.forEach(btn => {
          btn.classList.remove('blog__tab_active');
        });
    }

    function addActiveClass(i = 0) {
        filterBtns[i].classList.add('blog__tab_active');
    }

    filterBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            removeActiveClass();
            addActiveClass(i);
        });
    });
}