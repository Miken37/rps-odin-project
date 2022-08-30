function getComputerChoice(){
    const gestures = ['rock', 'paper', 'scissors'];
    let choiceNum = Math.floor(Math.random() *3);
    return cpuChoice = gestures[choiceNum];
}

function playRound(playerSelection, computerSelection){
    switch (playerSelection){
        case 'rock': 
        if (computerSelection === 'paper'){
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        } else if (computerSelection === 'scissors'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            
        }
        else{
            console.log(`You tied with ${playerSelection} and ${computerSelection}`)
        }
        break;

        case 'paper': 
        if (computerSelection === 'scissors'){
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        } else if (computerSelection === 'rock'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            
        }
        else{
            console.log(`You tied with ${playerSelection} and ${computerSelection}`)
        }
        break;    

        case 'scissors': 
        if (computerSelection === 'rock'){
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        } else if (computerSelection === 'paper'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            
        }
        else{
            console.log(`You tied with ${playerSelection} and ${computerSelection}`)
        }
        break;

        default:
            console.log("You did not pick one of the three options. :(")
    }

}


const rock = document.querySelector(".rock")
rock.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";
    playRound(playerSelection, computerSelection)
});

const paper = document.querySelector(".paper")
paper.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    playRound(playerSelection, computerSelection)
});

const scissors = document.querySelector(".scissors")
scissors.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "scissors";
    playRound(playerSelection, computerSelection)
});






//Old code from when game was on console only - left for reference
/*function game(){
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Type in: Rock, Paper or Scissors", "").toLowerCase();
        playRound(playerSelection, computerSelection);
    }
}*/

/*let scoreCount = 0;
game();
console.log(`Total score: ${scoreCount}/5!`);*/