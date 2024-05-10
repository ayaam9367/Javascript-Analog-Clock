// console.log("Analog Clock");

// var currentTime = new Date();
// var hours = currentTime.getUTCHours();
// var mins = currentTime.getUTCMinutes();
// var seconds = currentTime.getUTCSeconds();
// var linuxTime = currentTime.getTime();
// console.log("Linux time is: " + linuxTime);

// console.log("Time rn is: " + hours + "H " + mins + "M " + seconds + "S ");


setInterval(() => {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    var hrotation =  30*hours + minutes/2;
    var mrotation = 6*minutes;
    var srotation = 6*seconds;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000)