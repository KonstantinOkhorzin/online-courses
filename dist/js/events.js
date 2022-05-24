const allMonth = document.querySelectorAll('.events__grid .events__month');
for (const month of allMonth) {
    month.innerHTML =  month.innerHTML.slice(0, 3);
}



