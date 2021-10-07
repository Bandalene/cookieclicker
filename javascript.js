var cookies = 0;
var cookiesGain = 0;
var button2Bought = false;
var button2UnlockAmount = 3000;

function initialStart() {
    var buttonDiv = document.getElementById("button2");
    buttonDiv.style.color = "black";
    newClock(buttonDiv);
}

function gainIncrease(increaseAmount) {
    var buttonDiv = document.getElementById("button2");
    if (increaseAmount == 2 && button2Bought == false) {
        console.log('button2 was bought')
        button2Bought = true;
        cookies = cookies - button2UnlockAmount;
    }
    cookiesGain = cookiesGain + increaseAmount;
    document.getElementById('cps').innerHTML = `You are gaining ${cookiesGain} cookies per second`;
}

function newClock(buttonDiv) {

    //user has button2UnlockAmount cookies or more
    if (cookies >= button2UnlockAmount | button2Bought == true) {
        buttonDiv.style.display = "block";
    } else {
        buttonDiv.style.display = "none";
    }

    //user has bought button2
    if (button2Bought == true) {
        buttonDiv.style.color = "white";
    }

    setTimeout(function() {
        newClock(buttonDiv);
        cookies = cookies + cookiesGain;
        document.getElementById('a').innerHTML = cookies;

        //if cookies >= 3000 buttonDiv.style.display = "block";
    }, 1000)
}