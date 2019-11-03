var counter = 0;

var badges = {
    "1": "badge_1",
    "5": "badge_2",
    "10": "badge_3",
    "15": "badge_4",
    "20": "badge_5",
    "25": "badge_6",
}

function incrementCounter(){
    var counterHolder = document.getElementById("counter");
    counter = counterHolder.innerText;
    counter++;
    counterHolder.innerText = counter;

    checkBadges();
}


function checkBadges(){

    if(counter.toString() in badges){
        var badgeName = badges[counter.toString()];
        var badge = document.getElementById(badgeName);
        badge.classList.remove("invisible");
        badge.classList.add('animated', 'zoomInDown');
        var audio = new Audio('sounds/PowerUp18.mp3');
        audio.play();
    }
}
