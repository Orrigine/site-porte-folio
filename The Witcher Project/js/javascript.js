window.addEventListener("scroll", function() {appearFunction()});
function appearFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("appear-scroll").style.display = "block";
    } else {  
        document.getElementById("appear-scroll").style.display = "none";
    }
}

const daysEl  = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl  = document.getElementById("mins");
const secondesEl  = document.getElementById("secondes");
const newSeason = "17 dec 2021";

function countdown() { 
        const newSeasonDate = new Date(newSeason);
        const currentDate = new Date();
        const totalSecondes = (newSeasonDate - currentDate) / 1000;
        const days = Math.floor(totalSecondes / 3600 / 24);
        const hours = Math.floor(totalSecondes / 3600) % 24;
        const mins = Math.floor(totalSecondes / 60) % 60;
        const secondes= Math.floor(totalSecondes) % 60;

      daysEl.innerHTML = days;
      hoursEl.innerHTML = formatTime(hours);
      minsEl.innerHTML = formatTime(mins);
      secondesEl.innerHTML = formatTime(secondes); 
}

function formatTime(time) {  
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);