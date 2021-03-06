function timer() {

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    let day = now.getDate() + 5;

    const deadline = new Date(`${year}, ${month}, ${day}`);
    //Функция для получения разницы между датами
    function getTimeRemaining(endtime) {
        let days, hours, min, sec;
        const t = Date.parse(endtime) - Date.parse(new Date()); //разница между датами в милисекундах
        // Если текущая дата уже прошла проставляем нули
        if (t <= 0) {
            days = 0;
            hours = 0;
            min = 0;
            sec = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60) % 24));
            min = Math.floor((t / 1000 / 60) % 60);
            sec = Math.floor((t / 1000) % 60);
        }
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'min': min,
            'sec': sec
        };
    }

    // Функция для добавления 0 
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    //Функция которая устанавливает таймер на страницу
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        //запустим чтобы на странице сразу же было нужное значение
        updateClock();

        // Функция для обновления таймера каждую секунду
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.min);
            seconds.innerHTML = getZero(t.sec);
            if (t.total <= 0) { // чтобы остановить таймер когда подойдет дата
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.promotion__timer', deadline);
}

export default timer;