function rollDie() {
    var randomNumber = Math.floor(Math.random()*6) + 1;
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    return  [randomNumber, randomNumber2 ]
}

function assignPicture(diceValue) {
    var dice1Link = "./images/dice" + diceValue[0] + ".png"
    var dice2Link = "./images/dice" + diceValue[1] + ".png"
    document.querySelector(".img1").setAttribute("src", dice1Link)
    document.querySelector(".img2").setAttribute("src", dice2Link)
}

function whoWins(diceValue) {
    if (diceValue[0] > diceValue[1]) {
        document.querySelector("h1").textContent = "Player 1 wins!"
    } else if (diceValue[1] > diceValue[0]) {
        document.querySelector("h1").textContent = "Player 2 wins!"
    } else {
        document.querySelector("h1").textContent = "It's a tie."
    }
}


if (window.performance.navigation.type !== 0) {
    var diceValue = rollDie();
    assignPicture(diceValue);
    whoWins(diceValue);
} 

