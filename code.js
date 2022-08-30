function getComputerChoice(){
    const gestures = ['rock', 'paper', 'scissors'];
    let choiceNum = Math.floor(Math.random() *3);
    return cpuChoice = gestures[choiceNum];
}

function playRound(playerSelection, computerSelection, scoreCountPlayer, scoreCountCPU){
    switch (playerSelection){
        case 'rock': 
        if (computerSelection === 'paper'){
            document.querySelector(".cpu-card").setAttribute("src","images/Card-paper.png");
            document.querySelector("h2").textContent = "You lose...";
            document.querySelector(".container-images").style.backgroundColor = "red";
            return cpuScore += 1;
        } else if (computerSelection === 'scissors'){
            document.querySelector(".cpu-card").setAttribute("src","images/Card-scissors.png");
            document.querySelector("h2").textContent = "You win!";
            document.querySelector(".container-images").style.backgroundColor = "green";
            return playerScore += 1;
        }
        else{
            document.querySelector(".cpu-card").setAttribute("src","images/Card-rock.png");
            document.querySelector("h2").textContent = "You tie!";
            document.querySelector(".container-images").style.backgroundColor = "orange";
        }
        break;

        case 'paper': 
        if (computerSelection === 'scissors'){
            document.querySelector(".cpu-card").setAttribute("src","images/Card-scissors.png");
            document.querySelector("h2").textContent = "You lose...";
            document.querySelector(".container-images").style.backgroundColor = "red";
            return cpuScore += 1;
        } else if (computerSelection === 'rock'){
            document.querySelector(".cpu-card").setAttribute("src","images/Card-rock.png");
            document.querySelector("h2").textContent = "You win!";
            document.querySelector(".container-images").style.backgroundColor = "green";
            return playerScore += 1;
        }
        else{
            document.querySelector(".cpu-card").setAttribute("src","images/Card-paper.png");
            document.querySelector("h2").textContent = "You tie!";
            document.querySelector(".container-images").style.backgroundColor = "orange";
        }
        break;    

        case 'scissors': 
        if (computerSelection === 'rock'){
            document.querySelector(".cpu-card").setAttribute("src","images/Card-rock.png");
            document.querySelector("h2").textContent = "You lose...";
            document.querySelector(".container-images").style.backgroundColor = "red";
            return cpuScore += 1;
        } else if (computerSelection === 'paper'){
            document.querySelector(".cpu-card").setAttribute("src","images/Card-paper.png");
            document.querySelector("h2").textContent = "You win!";
            document.querySelector(".container-images").style.backgroundColor = "green";
            return playerScore += 1;
            
        }
        else{
            document.querySelector(".cpu-card").setAttribute("src","images/Card-scissors.png");
            document.querySelector("h2").textContent = "You tie!";
            document.querySelector(".container-images").style.backgroundColor = "orange";
        }
        break;
        //Should never hit default state anymore
        default:
            document.querySelector("p").textContent ="You did not pick one of the three options. :(";
    }

}
let playerScore = 0;
let cpuScore = 0;

const rock = document.querySelector(".rock")
const scissors = document.querySelector(".scissors")
const paper = document.querySelector(".paper")

rock.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";
    document.querySelector(".player-card").setAttribute("src","images/Card-rock.png");
    playRound(playerSelection, computerSelection)
    document.querySelector(".player-score").textContent = playerScore;
    document.querySelector(".cpu-score").textContent = cpuScore;
    if (playerScore == 5){
        alert("You win the game! Refresh to play again.");
    } else if (cpuScore == 5){
        alert("You lost... refresh to play again.");
    }
});

paper.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    document.querySelector(".player-card").setAttribute("src","images/Card-paper.png");
    playRound(playerSelection, computerSelection)
    console.log(`Player:  ${playerScore}`)
    document.querySelector(".player-score").textContent = playerScore;
    document.querySelector(".cpu-score").textContent = cpuScore;
    if (playerScore == 5){
        alert("You win the game! Refresh to play again.");
    } else if (cpuScore == 5){
        alert("You lost... refresh to play again.");
    }
});

scissors.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "scissors";
    document.querySelector(".player-card").setAttribute("src","images/Card-scissors.png");
    playRound(playerSelection, computerSelection)
    console.log(`Player:  ${playerScore}`)
    document.querySelector(".player-score").textContent = playerScore;
    document.querySelector(".cpu-score").textContent = cpuScore;
    if (playerScore == 5){
        alert("You win the game! Refresh to play again.");
    } else if (cpuScore == 5){
        alert("You lost... refresh to play again.");
    }
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