
const options = ["rock", "paper", "scissors"]
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    return (
        options[Number(String(Math.random()).at(-1))%3]
    )
}

function getHumanChoice() {
    let humanChoice = prompt(`choose your options
    0. Rock
    1. Paper
    2. Scissors`);
    console.log(options[humanChoice]);
}

// hC - human choice, cC - computer choice
function playGround(hC, cC) {
    if (hC === cC) {
        console.log("its a tie")
    } else if (hC === "rock" && cC === "paper") {
        console.log("user wins")
        humanScore++;
    } else if (hC === "paper" && cC == "rock") {
        console.log("computer wins");
        computerScore++;
    } else if (hC === "paper" && cC === "scissors") P{
        console.log("computer wins");
        computerScore++;
    } else if (hC === "scissors" && cC === "paper") {
        console.log("user wins")
        humanScore++;
    } else if (hC=== "rock" && cC === "scissors") {
        console.log("user wins")
        humanScore++;
    } else if (hC === "scissors" && cC === "rock") {
        console.log("computer wins");
        computerScore++;
    } else {
        console.log(hC, cC);
    }
}

