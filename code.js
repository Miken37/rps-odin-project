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

function game(){
    
}

//alert("Welcome to Rock, Paper Scissors!")
let playerSelection = prompt("Type in: Rock, Paper or Scissors", "").toLowerCase();
let computerSelection = getComputerChoice();

