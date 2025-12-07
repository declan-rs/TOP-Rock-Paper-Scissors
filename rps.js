let humanScore = 0;
let computerScore = 0;

// Create buttons etc
const game = document.querySelector("#game");

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
game.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
game.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
game.appendChild(scissors);

const div = document.createElement("div");
game.appendChild(div);

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
    if(humanChoice == "rock" && computerChoice == "scissors") {
        let result = document.createElement("p");
        result.textContent = "You win! Rock beats scissors.";
        div.appendChild(result);
        humanScore++;
    } else if(humanChoice == "rock" && computerChoice == "paper") {
        let result = document.createElement("p");
        result.textContent = "You Lose! Paper beats rock.";
        div.appendChild(result);
        computerScore++;
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        let result = document.createElement("p");
        result.textContent = "You Lose! Scissors beats paper.";
        div.appendChild(result);
        computerScore++;
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        let result = document.createElement("p");
        result.textContent = "You Win! Paper beats rock.";
        div.appendChild(result);
        humanScore++;
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        let result = document.createElement("p");
        result.textContent = "You Win! Scissors beats paper.";
        div.appendChild(result);
        humanScore++;
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        let result = document.createElement("p");
        result.textContent = "You Lose! Rock beats scissors.";
        div.appendChild(result);
        computerScore++;
    } else if(humanChoice == "rock" && computerChoice == "rock") {
        let result = document.createElement("p");
        result.textContent = "Draw! Both chose rock.";
        div.appendChild(result);
    } else if(humanChoice == "paper" && computerChoice == "paper") {
        let result = document.createElement("p");
        result.textContent = "Draw! Both chose paper.";
        div.appendChild(result);
    } else if(humanChoice == "scissors" && computerChoice == "scissors") {
        let result = document.createElement("p");
        result.textContent = "Draw! Both chose scissors.";
        div.appendChild(result);
    }

    checkDone();
}

function checkDone() {
    if(humanScore < 5 && computerScore < 5) {
        return;
    }

    if(humanScore == computerScore) {
        let result = document.createElement("p");
        result.textContent = "Final result: Draw!";
        result.style.fontWeight = "bold";
        div.appendChild(result);
    } else if(humanScore > computerScore) {
        let result = document.createElement("p");
        result.textContent = "Final result: You win!";
        result.style.fontWeight = "bold";
        div.appendChild(result);
    } else if(humanScore < computerScore) {
        let result = document.createElement("p");
        result.textContent = "Final result: You lose!";
        result.style.fontWeight = "bold";
        div.appendChild(result);
    }

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}