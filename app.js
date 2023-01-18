var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function () {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var image = "assets/afternoon.jpeg";

    var timeEventJS = document.getElementById("timeEvent");
    var zeeliveImage = document.getElementById('zeeliveImage');

    if (time == partytime) {
        image = "assets/party.jpeg";
        messageText = "Let's party!";
    }
    else if (time == wakeuptime) {
        image = "assets/wakeup.jpeg";
        messageText = "Wake up!";
    }
    else if (time == lunchtime) {
        image = "assets/lunch.jpeg";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime) {
        image = "assets/sleeptight.jpeg";
        messageText = "Sleep tight!";
    }
    else if (time < noon) {
        image = "assets/goodmorning.jpeg";
        messageText = "Good morning!";
    }
    else if (time >= evening) {
        image = "assets/goodevening.jpeg";
        messageText = "Good evening!";
    }
    else {
        image = "assets/afternoon.jpeg";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    zeeliveImage.src = image;

    showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function () {
    if (partytime < 0) {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();


// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function () {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function () {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    var icon = document.querySelector(".fas");
    if (icon.classList.contains("fa-moon")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}
