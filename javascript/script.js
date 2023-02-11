function computerPlay() {
    const computerPly = Math.floor(Math.random() * (3 - 1) + 1);
    if (computerPly == 1) {
        computerSelection = "rock";
        return "rock";
    }
    else if (computerPly == 2) {
        computerSelection = "paper";
        return "paper";
    }
    else {
        computerSelection = "scissors";
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection, result) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === playerSelection) {
                
                return result = "Player tied rock";
            }
            else if (computerSelection === "paper") {
                cmpPoint++;
                
                return result = "Player lost! Paper beats rock.";
            }
            else (computerSelection === "scissors"); {
                plaPoint++;
                
                return result = "Player wins! Rock beats scissors";
            }
        case "paper":
            if (computerSelection === playerSelection) {
                
                return result = "Player tied paper";
            }
            else if (computerSelection === "scissors") {
                cmpPoint++;
                
                return  result = "Player lost! Scissors beats paper.";
            }
            else (computerSelection === "rock"); {
                plaPoint++;
                
                return result = "Player wins! Paper beats rock";
            }
        case "scissors":
            playerSelection = "scissors";
            if (computerSelection === playerSelection) {
                
                return result = "Player tied scissors";
            }
            else if (computerSelection === "rock") {
                cmpPoint++;
                
                return result = "Player lost! Rock beats scissors";
            }
            else (computerSelection === "paper"); {
                plaPoint++;
                
                return result = "Player wins! Scissors beat paper";
            }
        default:
            (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissor");
            result = 'You havent choosen correc input';
    }


}
function game(playRound) {
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerTextElement("".toLocaleLowerCase)
        const computerSelection = computerTextElement;
        let result
        let winner = playRound(playerSelection, computerSelection, result)
        return ;
    }
    if (cmpPoint > plaPoint) {
        console.log("Computer wins ", cmpPoint, ":", plaPoint)
        return winner = "Computer wins ", cmpPoint, ":", plaPoint
    }
    else {
        console.log("Player wins ", plaPoint, ":", cmpPoint)
        return winner ="Player wins ", plaPoint, ":", cmpPoint
        
    }
}





let cmpPoint = 0;
let plaPoint = 0;

const playerTextElement = document.querySelector("#playerText");
const computerTextElement = document.querySelector("#computerText");
const resultTextElement = document.querySelector("#resultText");
const choiceButtons = document.querySelectorAll(".choiceBtn");

choiceButtons.forEach(button => button.addEventListener("click", () => {

    playerSelection = button.textContent.toLocaleLowerCase();
    playerTextElement.textContent = `Player: ${playerSelection}`;
    computerPlay()
    computerTextElement.textContent = `Computer: ${computerSelection}`;
    playRound()
    resultTextElement.textContent = `Result: ${result}`;
}));