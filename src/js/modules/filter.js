export default function filter(btnSelector, activeClass) {
    const filterBtns = document.querySelectorAll(btnSelector);

    function removeActiveClass() {
        filterBtns.forEach(btn => {
          btn.classList.remove(activeClass);
        });
    }

    function addActiveClass(i = 0) {
        filterBtns[i].classList.add(activeClass);
    }

    filterBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            removeActiveClass();
            addActiveClass(i);
        });
    });
}