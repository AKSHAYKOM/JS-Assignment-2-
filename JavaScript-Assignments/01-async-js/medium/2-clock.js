// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function getClock() {
    let now = new Date();

    let hours   = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    let hh = hours   < 10 ? "0" + hours   : hours;
    let mm = minutes < 10 ? "0" + minutes : minutes;
    let ss = seconds < 10 ? "0" + seconds : seconds;

    let format1 = hh + ":" + mm + ":" + ss;

    let ampm     = hours >= 12 ? "PM" : "AM";
    let hours12  = hours % 12;
    if (hours12 === 0) hours12 = 12;
    let hh12 = hours12 < 10 ? "0" + hours12 : hours12;

    let format2 = hh12 + ":" + mm + ":" + ss + " " + ampm;

    console.log("24 hour:", format1);
    console.log("12 hour:", format2);
    console.log("-------------------");
}


function startClock() {
    getClock();
    setTimeout(startClock, 1000);
}

startClock();