export default function() {
    const btnList = document.querySelector('.events__toolbar-list');
    const btnGrid = document.querySelector('.events__toolbar-grid');
    const list = document.querySelector('.events__list');
    const listItems = document.querySelectorAll('.card-events');

    btnGrid.addEventListener('click', () => {
        btnList.classList.remove('events__toolbar-list_active');
        btnGrid.classList.add('events__toolbar-grid_active');
        list.classList.add('events__list_grid');
        listItems.forEach(item => item.classList.add('card-events_grid'));
    });

    btnList.addEventListener('click', () => {
        btnList.classList.add('events__toolbar-list_active');
        btnGrid.classList.remove('events__toolbar-grid_active');
        list.classList.remove('events__list_grid');
        listItems.forEach(item => item.classList.remove('card-events_grid'));
    });
}