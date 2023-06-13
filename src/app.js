/* Lazy */

import "lazysizes";



/* Time */

import moment from "moment-timezone";

function showTime() {
    document.getElementById("time").innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss");
}

setInterval(showTime, 1000);



/* Navigation */

const btnNav = document.querySelector("#btn-nav");
const boxNav = document.querySelector("#box-nav");

btnNav.addEventListener("click", () => {
    showNav();
});

function showNav() {
    if (boxNav.style.display === "block") {
        boxNav.style.display = "none";
    } else {
        boxNav.style.display = "block";
  }
}



/* Theme */

const btnTheme = document.querySelector("#btn-theme");
const styleA1 = document.querySelector("body");
const styleA2 = document.querySelectorAll("a");
const styleH1 = document.querySelector("header");
const styleH2 = document.querySelectorAll("button");
const styleH3 = document.querySelector("#box-nav");
const styleH4 = document.querySelectorAll("#box-nav li");
const styleF1 = document.querySelector("footer");
const styleF2 = document.querySelector("footer .sitename");
const styleM1 = document.querySelector("#box-text");
const imgDark = new URL("img/felix-fuchs-NanNLo5kt_Y-unsplash.jpg", import.meta.url);
const imgLight = new URL("img/victor-martin-6lI6YnLC9-k-unsplash.jpg", import.meta.url);
const imgDarkMob = new URL("img/felix-fuchs-NanNLo5kt_Y-unsplash-m.jpg", import.meta.url);
const imgLightMob = new URL("img/victor-martin-6lI6YnLC9-k-unsplash-m.jpg", import.meta.url);
const mediaQuery = window.matchMedia("(max-width: 640px)");
let toggle = 1;

btnTheme.addEventListener("click", () => {
    toggleTheme();
});

function hoverLink(color) {
    styleA2.forEach((e) => {
        e.style = `color: ${color}`;

        e.addEventListener("mouseenter", () => {
            e.style = "color: tomato;";
        });
        
        e.addEventListener("mouseleave", () => {
            e.style = `color: ${color}`;
        });
    });

    styleF2.addEventListener("mouseenter", () => {
        styleF2.style = "border-color: tomato;";
    });
    
    styleF2.addEventListener("mouseleave", () => {
        styleF2.style = `border-color: ${color}`;
    });
}

function toggleTheme() {
    if (toggle === 1) {
        if (document.querySelector("body.index") === null) {
            styleA1.style = "background-color: black; color: white;";
        } else {            
            if (mediaQuery.matches) {
                styleA1.style = `background-color: black; background-image: url(${imgDarkMob}); color: white;`;
            } else {
                styleA1.style = `background-color: black; background-image: url(${imgDark}); color: white;`;
            }
        }
        toggleDark();
        hoverLink("white");
    } else {
        if (document.querySelector("body.index") === null) {
            styleA1.style = "background-color: white; color: darkslategray;"; 
        } else {            
            if (mediaQuery.matches) {
                styleA1.style = `background-color: white; background-image: url(${imgLightMob}); color: darkslategray;`;
            } else {
                styleA1.style = `background-color: white; background-image: url(${imgLight}); color: darkslategray;`;
            }
        }  
        toggleLight();
        hoverLink("darkslategray");
    }
}

function toggleDark() {
    styleH1.style = "background-color: black;";

    styleH2.forEach((e) => {
        e.style = "color: white;";
    });

    styleH3.style = "border-top-color: white;";

    styleH4.forEach((e) => {
        e.style = "background-color: black; border-bottom-color: white; color: white;";
    });

    styleF1.style = "background-color: black;";
    styleF2.style = "color: white; border-bottom-color: white;";
    styleM1.style = "border-top-color: white; color: white;";

    toggle = 0;
}

function toggleLight() {
    styleH1.style = "background-color: white;";

    styleH2.forEach((e) => {
        e.style = "color: darkslategray;";
    });

    styleH3.style = "border-top-color: darkslategray;";

    styleH4.forEach((e) => {
        e.style = "background-color: white; border-bottom-color: darkslategray;";
    });

    styleF1.style = "background-color: white;";
    styleF2.style = "color: darkslategray; border-bottom-color: lightslategray;";
    styleM1.style = "border-top-color: darkslategray; color: darkslategray;";
    
    toggle = 1;
}