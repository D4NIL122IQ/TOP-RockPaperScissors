function getComputerChoice(){
    const possibleChoice = ["rock" , "paper" ," cisor"];
    const random = Math.floor(Math.random() * possibleChoice.length);
    console.log(possibleChoice[random])
    return possibleChoice[random];
}

function playRound() {
    let computerSelect = getComputerChoice();
    let playerSelect = prompt("choice between paper / cisor/ rock") ;
    playerSelect = playerSelect.toLowerCase();

    if (computerSelect == playerSelect) {
        return null;
    } else if ( (computerSelect == 'paper' && playerSelect == 'cisor') || (computerSelect == 'cisor' && playerSelect=='rock') || (computerSelect=='rock' && playerSelect=='paper')){
        return playerCounter++;
    }else{
        return computerCounter++;
    }
}

function endGame() {
    (playerCounter == 3)?console.log("player win"):console.log("computer win");
    playerCounter = computerCounter = 0;
}

function playGame() {
    while (playerCounter < 3 && computerCounter <3) {
        playRound();
    }
    endGame();
}

let playerCounter=0;
let computerCounter = 0;

playGame();
