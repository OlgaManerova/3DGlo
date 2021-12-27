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

        timerHours.textContent = getTime.hours < 10 ? '0'+ getTime.hours : getTime.hours;
        timerMinutes.textContent = getTime.minutes < 10 ? '0'+ getTime.minutes : getTime.minutes;
        timerSeconds.textContent = getTime.seconds < 10 ? '0'+ getTime.seconds : getTime.seconds;
        console.log('секунда');
    }

    let interval = setInterval(function() {
        let getTime = getTimeRemaining();
        updateClock();

        if (getTime.timeRemaining <= 0) {
            clearInterval(interval);

            timerHours.innerHTML = '00';
            timerMinutes.innerHTML = '00';
            timerSeconds.innerHTML = '00';
        }
    }, 1000);

}

export default timer