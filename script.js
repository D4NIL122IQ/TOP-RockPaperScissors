const computerChoiceImage = document.querySelectorAll("img");
const btn = document.querySelectorAll("button");
const annonce = document.querySelector(".result")

let playerCounter=0;
let computerCounter = 0;

// fonction pour recuperer un choix aleatoire
function getComputerChoice(){
    const possibleChoice = ["rock" , "paper" ,"cisor"];
    const random = Math.floor(Math.random() * possibleChoice.length);
    computerChoiceImage.forEach((image) => {
        if(image.className ==  possibleChoice[random]){
            image.classList.add("temp");
            setTimeout(function() {  image.classList.remove("temp");}, 500)
        }
    })
    return possibleChoice[random];
}

function playRound(playerSelect) {
    let computerSelect = getComputerChoice();

    if (computerSelect == playerSelect) {
        annonce.innerHTML = "<h2> EGALITÉ </h2>";
        annonce.innerHTML += "<h3>" + "Votre Score : " + playerCounter + " .VS.  Score De l'adversaire : " + computerCounter  + "</h3>";
    } else if ( (computerSelect == 'paper' && playerSelect == 'cisor') 
                    || (computerSelect == 'cisor' && playerSelect=='rock') 
                    || (computerSelect=='rock' && playerSelect=='paper')){
            playerCounter++ ;
            annonce.innerHTML = "<h2> VOUS AVEZ REMPORTÉ CETTE MANCHE </h2>";
            annonce.innerHTML += "<h3>" + "Votre Score : " + playerCounter + " .VS.  Score De l'adversaire : " + computerCounter  + "</h3>";

    }else{
            computerCounter++;
            annonce.innerHTML = "<h2> VOUS AVEZ PERDU CETTE MANCHE </h2>";
            annonce.innerHTML += "<h3>" + "Votre Score : " + playerCounter + " .VS.  Score De l'adversaire : " + computerCounter  + "</h3>";

    }
}

function endGame() {
    if(playerCounter == 3 || computerCounter == 3){
       resultat();
    }
}

function creatButton() {
    playerCounter = computerCounter = 0
    annonce.innerHTML += "<h2> Pour rejouer faite votre choix </h2>"
}
function resultat() {
    if (playerCounter == 3 ){
        annonce.innerHTML = "<h2> VOUS AVEZ REMPORTÉ LA PARTIE !!!</h2>";
        creatButton();
    }else{
        annonce.innerHTML = "<h2> vous avez perdu :(</h2>";
        creatButton();
    }
}

function playGame(playerSelect) {
    playRound(playerSelect);
    endGame();
}


btn.forEach((button)=>{
    button.addEventListener("click" , function() { 
       playGame(button.className);
    })
})