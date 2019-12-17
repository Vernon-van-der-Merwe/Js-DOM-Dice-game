// program entry point

// Generate random number for dice 1

value1 = generateRandomDiceNum();
value2 = generateRandomDiceNum();

setDiceValue(value1, value2);

determineWinner(value1, value2);


// Functions

function determineWinner(value1, value2) {
    if (value2 < value1) {
        value1Wins();
    } else if (value1 < value2){
        value2Wins();
    }else{
        draw();
    }
}

function setDiceValue(value1, value2) {

    document.getElementsByClassName("img1")[0].setAttribute("src", "/images/dice" + value1 + ".png");
    document.getElementsByClassName("img2")[0].setAttribute("src", "/images/dice" + value2 + ".png");
}

function generateRandomDiceNum() {

    var randomNum = Math.random();
    randomNum = (randomNum * 6) + 1;
    randomNum = Math.floor(randomNum);

    return randomNum
}

// helper functions

function value1Wins() {
    document.querySelector("div h1").innerHTML = "<i class='material-icons' style='font-size: 4rem;'>check_circle_outline</i> Player 1 Wins! ";
}

function value2Wins() {
    document.querySelector("div h1").innerHTML = " Player 2 Wins! <i class='material-icons' style='font-size: 4rem;'>check_circle_outline</i>";
}

function draw() {
    document.querySelector("div h1").innerHTML = "Draw!";
}