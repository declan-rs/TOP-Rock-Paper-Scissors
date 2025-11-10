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
        ans = prompt("Rock paper or scissors? ");
        if(ans == "rock") {
            return "rock";
        } else if(ans == "paper") {
            return "paper";
        } else if(ans == "scissors") {
            return "scissors";
        }
    }
}
