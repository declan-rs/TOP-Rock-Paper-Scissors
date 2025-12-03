let humanScore = 0;
let computerScore = 0;
// Create buttons
const rock = document.createElement("button");
rock.textContent = "Rock";
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
document.body.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
document.body.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
document.body.appendChild(scissors);

function getComputerChoice() {
    rand = Math.random();

    if(rand < 0.33) {
        return "rock";
    } else if(rand < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    while(true) {
        ans = prompt("Rock, paper or scissors? ");
        if(ans.toLowerCase() == "rock") {
            return "rock";
        } else if(ans.toLowerCase() == "paper") {
            return "paper";
        } else if(ans.toLowerCase() == "scissors") {
            return "scissors";
        }
    }
}

function playRound(humanChoice, computerChoice) {
    // Returns 0 if draw, 1 if human won or 2 if computer won
    if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("You Lose! Paper beats rock.");
        computerScore++;
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lose! Scissors beats paper.");
        computerScore++;
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You Win! Paper beats rock.");
        humanScore++;
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You Win! Scissors beats paper.");
        humanScore++;
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lose! Rock beats scissors.");
        computerScore++;
    } else if(humanChoice == "rock" && computerChoice == "rock") {
        console.log("Draw! Both chose rock.");
    } else if(humanChoice == "paper" && computerChoice == "paper") {
        console.log("Draw! Both chose paper.");
    } else if(humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("Draw! Both chose scissors.");
    }

}