const time = document.querySelector('.time');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset =document.querySelector('#reset');

let seconds = 0;
let interval;

const stopwatch = function () {
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60 );
    let secs = seconds % 60;
    
    
    secs < 10 ? (secs = `0${secs}`) : secs;
    minutes < 10 ? (minutes = `0${minutes}`) : minutes;
    hours < 10 ? (hours = `0${hours}`) : hours;

    time.innerHTML = `${hours}:${minutes}:${secs}`;
}


const startW = function () {
    if (interval) {
        return;
    }

    interval = setInterval(stopwatch, 1000);
};

const stopW = function () {
    clearInterval(interval);
    interval = null;
};


const resetW = function () {
    stopW();
    seconds = 0;
    time.innerHTML = '00:00:00';
};

start.addEventListener('click', startW);
stop.addEventListener('click', stopW);
reset.addEventListener('click', resetW);