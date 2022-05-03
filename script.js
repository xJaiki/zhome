
window.onload = function () {

    // i'm too lazy to create a clock so i took it from https://www.makeuseof.com/create-a-digital-clock-html-css-javascript/ :)

    function Time() {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var period = "";
        if (hour >= 12) {
            period = "PM";
        } else {
            period = "AM";
        }
        if (hour == 0) {
            hour = 12;
        } else {
            if (hour > 12) {
                hour = hour - 12;
            }
        }
        hour = update(hour);
        minute = update(minute);
        second = update(second);
        document.getElementById("digital-clock").innerText = hour + ":" + minute + " " + period;
        setTimeout(Time, 1000);
    }
    function update(t) {
        if (t < 10) {
            return "0" + t;
        }
        else {
            return t;
        }
    }
    Time();

    // which day is today?

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]
    const d = new Date();
    let day = weekday[d.getDay()];
    let month = months[d.getMonth()];
    document.getElementById("day").innerHTML = day;
    document.getElementById("number").innerHTML = d.getDate();
    document.getElementById("month").innerHTML = month;

    //what's the weather like?

    const apiKey = "d5932447ed5cdf742b1f1f2e38cd6e61";
    const inputVal = "Napoli"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, sys, weather } = data;
            const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]
                }@2x.png`;


            const weatherMarkup = `${Math.round(main.temp)}`

            const image = `<img class="city-icon" src=${icon} alt=${weather[0]["main"]}>`;

            document.getElementById("wheaterIcon").innerHTML = image;
            document.getElementById("temp").innerHTML = weatherMarkup;
        })


}


