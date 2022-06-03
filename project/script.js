const title = document.querySelector("h1");

setInterval(function () {
    let today = new Date();
    let time = today.getHours();

    if (time >= 6 && time < 8) {
        document.body.style.backgroundImage = "url(./wallpapers/1.png)";
    } else if (time >= 8 && time < 10) {
        document.body.style.backgroundImage = "url(./wallpapers/2.png)";
    } else if (time >= 10 && time < 11) {
        document.body.style.backgroundImage = "url(./wallpapers/3.png)";
    } else if (time >= 11 && time < 14) {
        document.body.style.backgroundImage = "url(./wallpapers/4.png)";
    } else if (time >= 14 && time < 15) {
        document.body.style.backgroundImage = "url(./wallpapers/5.png)";
    } else if (time >= 17 && time < 19) {
        document.body.style.backgroundImage = "url(./wallpapers/6.png)";
    } else if (time >= 19 && time < 21) {
        document.body.style.backgroundImage = "url(./wallpapers/7.png)";
    } else if (time >= 21) {
        document.body.style.backgroundImage = "url(./wallpapers/8.png)";
    }

    title.innerText = time;

    console.log(time);
}, 1000);
