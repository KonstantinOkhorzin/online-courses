const allMonth = document.querySelectorAll('.card-events_grid .card-events__month');
for (const month of allMonth) {
    month.innerHTML =  month.innerHTML.slice(0, 3);
}



