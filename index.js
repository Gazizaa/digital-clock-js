function setTime(){

let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let audio = document.querySelector('audio');
audio.play();

let time = new Date();
let hour = time.getHours();
let sec = time.getSeconds();
let min = time.getMinutes();

hour = hour < 10 ? '0' + hour : hour;
sec = sec < 10 ? '0' + sec : sec;
min = min < 10 ? '0' + min : min;

hours.innerHTML = hour;
minutes.innerHTML = min;
seconds.innerHTML = sec;

setTimeout(setTime, 1000);
}

setTime();
