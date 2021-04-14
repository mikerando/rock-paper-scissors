//Randomly Generate a Computer Selection
function computerselection() {
    //random generated number 1, 2 or 3
    let randompick = Math.floor(Math.random() * 3);

    //assign 1, 2, and 3 as Rock, Paper, Scissor respectively
    let x = "";
    if (randompick == 0) {
        x = "Rock";
    } else if (randompick == 1 ) {
        x = "Paper";
    } else if (randompick == 2) {
        x = "Scissors";
    } else {
        console.log(x + " ... Error");
    }

    console.log("AI Chooses: " + x);
    return (x);
}

//Regular Expression Human Choice to Xxxx
function playerselection (String) {
    let x = String.charAt(0).toUpperCase() + 
            String.slice(1).toLowerCase();
    console.log("Player Chooses: " + x);
    return (x);
}

//Evaluate Results. There's got to be a better way but this works.
function whowins (String1, String2) {
    if (String1 == String2) {
        winner = "A Real Meeting of the Minds - TIE";
    } else if (String1 == "Rock" && String2 == "Paper") {
        winner = "You Got Covered - LOST";
    } else if (String1 == "Rock" && String2 == "Scissors") {
        winner = "You Smashed It - WON";
    } else if (String1 == "Scissors" &&  String2 == "Rock") {
        winner = "Couldn't Cut It - LOST"
    } else if (String1 == "Scissors" && String2 == "Paper") {
        winner = "Like Butter - WON";
    } else if (String1 == "Paper" && String2 == "Rock") {
        winner = "Where'd the Rock Go? - WON";
    } else if (String1 == "Paper" && String2 == "Scissors") {
        winner = "Maybe it'll Grow Back - LOST";
    } else if ((String1 != "Rock" || String1 != "Scissors" || String1 != "Paper") &&
                (String2 == "Rock" || String2 == "Scissors" || String2 == "Paper")) {
        winner = "Trying to be Clever? - LOST";
    } else if ((String2 != "Rock" || String2 != "Scissors" || String2 != "Paper") &&
                (String1 == "Rock" || String1 == "Scissors" || String1 == "Paper")) {
        winner = "Cheat to WIN - WON";
    } else {
        winner = "Something's Busted - TIE";
    }

    console.log(winner);
    return (winner);
}

//Play the game 5 times
function fiverounds() {
    let x = 0;
    let y = 0;

    for (i=1; i<=5; i++) {
        console.log("Game # " + i);
        playerpick = playerselection(prompt("Rock Paper Scissors SHOOT!!", ""));
        whowins(playerpick, computerselection());
        //Keep Score
        if (winner.endsWith("TIE")){
            console.log("DO-OVER");
            i--;
        } else if (winner.endsWith("WON")){
            x++;
        } else if (winner.endsWith("LOST")){
            y++;
        } else {
            console.log("Something's Busted. DO-OVER");
            i--
        }
        console.log("After " + i + " games, You: " + x + " vs. AI: " + y);
    }
    
    //Declare Winner
    if (x > y) {
        console.log("Congratulations! You are the champion!!");
    } else if (x < y) {
        console.log("You must defeat Sheng Long to stand a chance. GAME OVER")
    } else {
        console.log("Something's Busted");
    }
}

let winner = "";

fiverounds();



