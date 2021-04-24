//Randomly Generate a Computer RPS Choice
function computerSelection() {
    let x = Math.floor(Math.random() * 3);
    let randomPick = "";
    if (x == 0) randomPick = "rock";
    else if (x == 1) randomPick = "paper";
    else if (x == 2) randomPick = "scissors";
    else console.log(randomPick + " ... randomPick Error");
    return (randomPick);
}

//Player Clicks Their RPS Choice
let playerPick = "";
let playerSelection = document.querySelectorAll('button');
playerSelection.forEach((button) => {
    button.addEventListener ('click', () => {
        playerPick = button.className;
    });
});

//Evaluate the Human vs Computer RPS game
let computerPick = "";
let result = "";
function whoWins(){
    if (playerPick == "rock"){
        switch(computerPick){
            case "rock": return ("tie");
            case "paper": return ("lose");
            case "scissors": return ("win");
        }
    } else if (playerPick == "paper") {
        switch(computerPick) {
            case "rock": return ("win");
            case "paper": return ("tie");
            case "scissors": return ("lose");
        }
    } else if (playerPick == "scissors") {
        switch(computerPick){
            case "rock": return ("lose");
            case "paper": return ("win");
            case "scissors": return ("tie");
        }
    }
}

//DOM methods to display results
function displayChoice (){
    let choice = document.querySelector('.VS');
    let showChoice = document.createElement('li');
    showChoice.textContent = "PICKS: (" + playerPick + " vs. " + 
                            computerPick + ") RESULT: " + result;
    choice.appendChild(showChoice);
}

//Display running score
let playerScore = 0;
let cpuScore = 0;
document.querySelector('.human').innerHTML = playerScore;
document.querySelector('.ai').innerHTML = cpuScore;
function scoreSoFar(x) {
    if (x == "win") {
        ++playerScore;
        document.querySelector('.human').innerHTML = playerScore;
    } else if (x == "lose") {
        ++cpuScore;
        document.querySelector('.ai').innerHTML = cpuScore;
    }
}


//Winner Announce at 5 points
function gameOver (a, b) {
    if (a == 5) document.querySelector('.human').innerHTML = "YOU WIN! " + a;
    if (b == 5) document.querySelector('.ai').innerHTML = b + " YOU LOST!";
    if (a == 5 || b == 5) { //This Removes the Buttons
        let x = document.getElementById('pickers');
        while (x.firstChild) {
            x.removeChild(x.firstChild);
        }
    }
}

//Combines all Variables/Methods to Run the Game on Button Click
playerSelection.forEach((button) => {
    button.addEventListener ('click', () => {
        computerPick = computerSelection();
        result = whoWins();
        scoreSoFar(result);
        displayChoice();
        gameOver(playerScore, cpuScore);
    });
});