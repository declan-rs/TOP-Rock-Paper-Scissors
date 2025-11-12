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
        return 1;
    } else if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("You Lose! Paper beats rock.");
        return 2;
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lose! Scissors beats paper.");
        return 2;
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You Win! Paper beats rock.");
        return 1;
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You Win! Scissors beats paper.");
        return 1;
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lose! Rock beats scissors.");
        return 2;
    } else if(humanChoice == "rock" && computerChoice == "rock") {
        console.log("Draw! Both chose rock.");
        return 0;
    } else if(humanChoice == "paper" && computerChoice == "paper") {
        console.log("Draw! Both chose paper.");
        return 0;
    } else if(humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("Draw! Both chose scissors.");
        return 0;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    i = 0;
    while(i < 5) {
        outcome = playRound(getHumanChoice(), getComputerChoice());
        if(outcome == 1) {
            humanScore++;
        } else if(outcome == 2) {
            computerScore++;
        }
        i++;
    }
    
    if(humanScore == computerScore) {
        console.log("Final result: Draw!");
    } else if(humanScore > computerScore) {
        console.log("Final result: You win!");
    } else if(humanScore < computerScore) {
        console.log("Final result: You lose!");
    }
}

playGame();