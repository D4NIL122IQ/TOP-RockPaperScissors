function getComputerChoice(){
    const possibleChoice = ["rock" , "paper" ," cisor"];
    const random = Math.floor(Math.random()*possibleChoice.length);
    return possibleChoice[random];
 
}

function playRound(){ 
    let computerSelect = getComputerChoice();
    let playerSelect = prompt("choice between paper / cisor/ rock") ;
    playerSelect = playerSelect.toLowerCase();
    if (computerSelect == playerCounter ) {
        return null;
    } else if( computerSelect == 'paper' && playerSelect == 'cisor'){
        return playerCounter ++;
    }else if (computerSelect == 'cisor' && playerSelect=='rock'){
        console.log(playerCounter)
        return playerCounter++;
    }else if(computerSelect=='rock' && playerSelect=='paper'){
        return playerCounter++;
    }else if(computerSelect =='cisor' && playerSelect == 'paper'){
        return computerCounter++;
    }else if (computerSelect == 'paper' && playerSelect == 'rock'){
        return computerCounter++;
    }else if (computerSelect =='rock' && playerSelect=='cisor'){
        return computerCounter++;
    }       
}

function playGame(){
    if (playerCounter == 3) {
        return console.log("player win");
    } else {
        if (computerCounter ==3) {
            return  console.log("computer win");
        } else {
            playRound();
            playGame(playerCounter , computerCounter)
        }
    }
}

let playerCounter=0;
let computerCounter = 0;

playGame();