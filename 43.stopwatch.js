let [seconds, minutes, hours] = [0, 0, 0];
let displatyTimes = document.getElementById("displayTime");
let timer = null;
document.getElementById("start").addEventListener('click', watchstart);


document.getElementById("clear").addEventListener('click', watchstop);

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displatyTimes.innerHTML = h + ":" + m + ":" + s;
}

function watchstart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function watchstop() {
    clearInterval(timer);
}