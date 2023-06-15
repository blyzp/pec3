/* Lazy */

import "lazysizes";



/* Time */

import moment from "moment-timezone";

function showTime() {
    document.getElementById("time").innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss");
}

setInterval(showTime, 1000);