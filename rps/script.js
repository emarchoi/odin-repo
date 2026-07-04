
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[random];

    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("Choose: Rock - Paper - Scissors", "");

    return humanChoice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        round++;
        console.log("Draw!")
    }
    else if ((humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")) {
        humanScore++;
        round++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }
    else {
        computerScore++;
        round++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
}


function playGame() {

    while (round <= 5) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);

    }
    
    if (humanScore > computerScore) {
        console.log(`${humanScore} : Human Wins!`);
    }
    else if (computerScore > humanScore) {
        console.log(`${computerScore} : Computer Wins!`);
    } else {
        console.log("Draw");
    }

}

playGame();
