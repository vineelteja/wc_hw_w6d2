
/*  add time to index  */
function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    var utchr = d.getUTCHours();
    var timeDiff;
    var adjTimeDiff;
    var timeZone;

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr == 12) {
      ampm = "PM";
    } else if (hr > 12) {
      hr -= 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    var time = `${hr}:${min}:${sec} ${ampm}`;
    try{
        document.getElementById("clock").innerText = time;
    }
    catch {

    }
    setInterval(currentTime, 1000);   // Consuming CPU like crazy 

    return utchr;
  }
  x = currentTime();
 /*  add time to index  */




