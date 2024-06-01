
const options = ["rock", "paper", "scissors"]
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let cmputerChoice = Number(String(Math.random()).at(-1))%3
    console.log(`%c computer : ${options[cmputerChoice]}`, "background-color:black");
    return options[cmputerChoice];
}

function getHumanChoice() {
    let humanChoice = prompt(`choose your options
    0. Rock
    1. Paper
    2. Scissors`);
    console.log(`%c human : ${options[humanChoice]}`, "background-color:black");
    return options[humanChoice];
}

// hC - human choice, cC - computer choice
function playRound(hC, cC) {
    if (hC === cC) {
        console.log("its a tie")
    } else if (hC === "rock" && cC === "paper") {
        console.log("user wins")
        humanScore++;
    } else if (hC === "paper" && cC == "rock") {
        console.log("computer wins");
        computerScore++;
    } else if (hC === "paper" && cC === "scissors") {
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
        // console.warn(hC, cC);
    }
}



function playGame() {

    for (let i = 0; i < 6; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }
    
    if (humanScore === computerScore) {
        console.log("%c its a tie!!", "background-color:yellow, color:black")
    } else if (humanScore > computerScore) {
        console.log("%c human won!!", "background-color:green")
    } else {
        console.log("%c computer won!!", "background-color:red")
    }
}   

playGame();