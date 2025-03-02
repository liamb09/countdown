function updateDateTime () {
    const now = new Date();
    date = now.toISOString().split(".")[0];
    date = date.split("T")[0] + `T${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
    if (localStorage.getItem("event-name") !== null && document.getElementById("event-name-input") !== null && document.getElementById("event-name-input").value == "") {
        document.getElementById("event-time").min = date;
        document.getElementById("event-name-input").value = localStorage.getItem("event-name");
    }
    if (localStorage.getItem("event-time") !== null && document.getElementById("event-time") !== null) {
        // document.getElementById("event-time").min = localStorage.getItem("event-time");
        document.getElementById("event-time").value = localStorage.getItem("event-time");
        return;
    }
    if (document.getElementById("event-time") === null) {
        return date;
    }
    document.getElementById("event-time").min = date;
    document.getElementById("event-time").value = date;
    return date;
}

function formatCountdown (dateTime) {
    s = Math.round((Date.parse(dateTime) - new Date())/1000);
    if (s < 0) {
        return "Your event has already occurred."
    }
    min = Math.floor(s/60);
    hr = Math.floor(s/60/60);
    days = Math.floor(s/60/60/24);
    s -= min*60;
    min -= hr*60;
    hr -= days*24;
    s = s.toString().padStart(2, "0");
    min = min.toString().padStart(2, "0");
    hr = hr.toString().padStart(2, "0");
    days = days.toString().padStart(2, "0");
    return `${days}:${hr}:${min}:${s}`;
}

function updateCountdown () {
    document.getElementById("countdown").innerHTML = formatCountdown(localStorage.getItem("event-time"));
}

function updateEvent () {
    localStorage.setItem("event-name", document.getElementById("event-name-input").value);
    localStorage.setItem("event-time", document.getElementById("event-time").value);
}