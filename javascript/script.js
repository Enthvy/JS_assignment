function playerPlay() {
    const playerPly = prompt("Choose Rock, Paper or Scissors").toLowerCase().trim()
    if (playerPly == "rock") {
        return "rock";
    }
    else if (playerPly == "paper") {
        return "paper";
    }
    else if (playerPly == "scissors") {
        return "scissors";
    } else (playerPly !== "rock" && playerPly !== "paper" && playerPly !== "scissor");
    console.log('You havent choosen correc input');
    return

}

function computerPlay() {
    const computerPly = Math.floor(Math.random() * (3 - 1) + 1);
    if (computerPly == 1) {
        return "rock";
    }
    else if (computerPly == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === playerSelection) {
                return "Player tied rock";
            }
            else if (computerSelection === "paper") {
                cmpPoint++;
                return "Player lost! Paper beats rock.";
            }
            else (computerSelection === "scissors"); {
                plaPoint++;
                return "Player wins! Rock beats scissors"
            }
        case "paper":
            if (computerSelection === playerSelection) {
                return "Player tied paper";
            }
            else if (computerSelection === "scissors") {
                cmpPoint++;
                return "Player lost! Scissors beats paper.";
            }
            else (computerSelection === "rock"); {
                plaPoint++;
                return ("Player wins! Paper beats rock");
            }
        case "scissors":
            playerSelection = "scissors";
            if (computerSelection === playerSelection) {
                return ("Player tied scissors");
            }
            else if (computerSelection === "rock") {
                cmpPoint++;
                return ("Player lost! Rock beats scissors");
            }
            else (computerSelection === "paper"); {
                plaPoint++;
                return ("Player wins! Scissors beat paper");
            }
    }
}


function game(playRound) {
    for (let i = 0; i < 5; i++) {
        console.log("Round", i + 1, "starts")
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection)
        console.log(winner);
    }
    if (cmpPoint > plaPoint) {
        console.log("Computer wins ", cmpPoint, ":", plaPoint)
        alert("Computer wins ", cmpPoint, ":", plaPoint)
        return
    }
    else if (cmpPoint < plaPoint) {
        console.log("Player wins ", plaPoint, ":", cmpPoint)
        alert("Player wins ", plaPoint, ":", cmpPoint)
        return
    }
    else {
        console.log("It's a draw ", plaPoint, ":", cmpPoint)
        alert("It's a draw ", plaPoint, ":", cmpPoint)
        return
    }
}


let cmpPoint = 0;
let plaPoint = 0;


game(playRound)