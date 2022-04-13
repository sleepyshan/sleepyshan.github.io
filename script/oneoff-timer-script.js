const goal = "20 Oct 2031"

function countdown(){
    const goalDate = new Date(goal);
    const currentDate = new Date();

    const totalSeconds = (goalDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    
    
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('minutes').innerHTML = formatTime(minutes);
    document.getElementById('seconds').innerHTML = formatTime(seconds);

}

function countup(){
    const startDate = new Date(2021, 11, 27, 22, 00, 00, 00);
    const currentDate = new Date();

    const newSeconds = (currentDate - startDate) / 1000

    const day2 = Math.floor(newSeconds / 3600 / 24);
    const hour2 = Math.floor(newSeconds / 3600) % 24;
    const minute2 = Math.floor(newSeconds / 60) % 60;
    const second2 = Math.floor(newSeconds) % 60;

    document.getElementById('days2').innerHTML = formatTime(day2);
    document.getElementById('hours2').innerHTML = formatTime(hour2);
    document.getElementById('minutes2').innerHTML = formatTime(minute2);
    document.getElementById('seconds2').innerHTML = formatTime(second2);

// console.log(startDate)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown, 1000);
setInterval(countup, 1000);
