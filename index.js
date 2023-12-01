function rollDie() {
    var randomNumber = Math.floor(Math.random()*6) + 1;
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    return  [randomNumber, randomNumber2 ]
}

function assignPicture(diceValue) {
    var dice1Link = "./images/dice" + diceValue[0] + ".png"
    var dice2Link = "./images/dice" + diceValue[1] + ".png"
    document.querySelector(".img1").setAttribute("src", "dice1Link")
    document.querySelector(".img2").setAttribute("src", "dice2Link")
}

var diceValue = rollDie();
assignPicture(diceValue);

