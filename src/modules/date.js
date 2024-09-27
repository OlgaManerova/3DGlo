export default () => {
    const hello = document.getElementById('hello');
    const day = document.getElementById('day');
    const time = document.getElementById('time');
    const ng = document.getElementById('ng');
    const today = new Date();

    let getDay = () => {
        let day = today.getDay();

        if (day == 0) {
            return 'Воскресенье';
        } else if (day == 1) {
            return 'Понедельник';
        } else if (day == 2) {
            return 'Вторник';
        } else if (day == 3) {
            return 'Среда';
        } else if (day == 4) {
            return 'Четверг';
        } else if (day == 5) {
            return 'Пятница';
        } else if (day == 6) {
            return 'Суббота';
        }
    };


    time.textContent = today.getHours() + ':' + today.getMinutes() + ':' +  today.getSeconds();
    day.textContent = getDay();

}