const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        // let days = Math.floor(timeRemaining / 60 / 60 / 24);
        // let hours = Math.floor(timeRemaining / 60 / 60);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {timeRemaining, hours, minutes, seconds}
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();

        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        // let timer = setTimeout(updateClock, 1000);

        let timer = setInterval(function() {
            updateClock();
            if (getTime.timeRemaining > 0) {
                timer();
            } else if (getTime.timeRemaining <= 0) {
                clearInterval(timer);
    
                timerHours.innerHTML = '00';
                timerMinutes.innerHTML = '00';
                timerSeconds.innerHTML = '00';
            }
        }, 1000)

        // вариант 1


        // вариант 2
        // if (getTime.timeRemaining > 0) {
        //     setInterval(updateClock, 1000);
        // }
        // console.log('вывод');
    }

    updateClock();
}

export default timer