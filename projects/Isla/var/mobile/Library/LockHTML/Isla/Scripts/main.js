window.addEventListener("load", function() {
    document.body.style.width = '100%';
    document.body.style.height = '100%';
}, false);

switch (lang) {
    case "fr":
        var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        var months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
        break;
    case "de":
        var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
        var months = ["Januar", "Februar", "Marz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
        break;
    case "ca":
        var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        break;
    default:
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        break;
}

function setTheme() {
    switch (theme) {
        case "white":
            document.getElementById("card").style.background = "white";
            document.getElementById("card").style.color = "black";
            document.getElementById("card").style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.8)";
            break;
        case "light":
            document.getElementById("card").style.background = 'rgb(' + 221 + ',' + 206 + ',' + 206 + ')';
            document.getElementById("card").style.color = "black";
            document.getElementById("card").style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.8)";
            break;

        case "dark":
            document.getElementById("card").style.background = 'rgb(' + 83 + ',' + 70 + ',' + 70 + ')';
            document.getElementById("card").style.color = "white";
            document.getElementById("divider").style.borderColor = "white";
            document.getElementById("card").style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.8)";
            break;

        case "black":
            document.getElementById("card").style.background = "black";
            document.getElementById("card").style.color = "white";
            document.getElementById("divider").style.borderColor = "white";
            document.getElementById("card").style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.8)";
            break;

        case "transparent-black":
            document.getElementById("card").style.color = "black";
            document.getElementById("card").style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.8)";
            break;

        case "transparent-white":
            document.getElementById("card").style.color = "white";
            document.getElementById("card").style.boxShadow = "0px 0px 10px 1px rgba(255, 255, 255, 1.0)";
            document.getElementById("divider").style.borderColor = "white";
            break;

        default:
            document.getElementById("card").style.color = "black";
            document.getElementById("card").style.background = "white";
            document.getElementById("card").style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.8)";

            break;
    }
}

function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
    var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    var currentYear = currentTime.getFullYear();
    var final = currentYear.toString();
    timeOfDay = (currentHours < 12) ? "AM" : "PM";

    if (Clock == "24h") {
        currentHours = (currentHours < 10 ? "0" : "") + currentHours;
        currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
        document.getElementById("currentTime").innerHTML = currentTimeString
    }
    if (Clock == "12h") {
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
        currentHours = (currentHours == 0) ? 12 : currentHours;
        currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
        document.getElementById("currentTime").innerHTML = currentTimeString;
    }

    // document.getElementById("day").innerHTML = days[currentTime.getDay()];
    // document.getElementById("date").innerHTML = currentDate;
    // document.getElementById("month").innerHTML = months[currentTime.getMonth()];
    // document.getElementById("year").innerHTML = final;
    document.getElementById("currentDate").innerHTML = months[currentTime.getMonth()] + " " + currentDate + ", " + final;

}

function init() {
    updateClock();
    setInterval("updateClock();", 1000);

    setTheme();
}
