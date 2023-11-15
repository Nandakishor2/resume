let display = false


function beg() {
    alert("Starting in 2 sec")
    document.getElementById("bouncer").style.display = "none"
    var currentDate = new Date();

    var currentHour = currentDate.getHours();
    if (currentHour < 12) {
        var audio = new Audio('goodmorning.mp3');


    } else if (currentHour >= 12 && currentHour < 16) {
        var audio = new Audio('goodafternoon.mp3');

    } else {
        var audio = new Audio('goodevening.mp3');

    }
    audio.play();
    audio.addEventListener('play', function () {
        document.getElementById("dis").style.display = ""
        
    });
    audio.addEventListener('ended', function () {
        document.getElementById("dis").style.display = "none"
        
        document.getElementById("background").style.display = ""
        display = false;
    });

}

