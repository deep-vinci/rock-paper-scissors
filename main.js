
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

let combinations = {
    rock_wins : ['rock', 'scissors'],
    scissors_wins : ['scissors', 'paper'],
    paper_wins : ['paper', 'rock']
}

function compareArrays(choices, combinations) {
    return JSON.stringify(choices) === JSON.stringify(combinations)
}

// how it works is the choices array is [humanChoice, computerChoice]
// and combinations is an object of all the possible one sided combo which can be later reversed 
// fullfiling the 6 out of 9 possible combinations and rest 3 are just ties [rock, rock] [paper, paper] [scissors, scissors]
// the compareArrays function compares the two array `choices` and combination.`respective_combo` 

function playRound([...choices]) {
    console.log(choices);
    
    if (choices[0] === choices[1]) {
        console.log("It's a tie")
    }
    else if (compareArrays(choices, combinations.rock_wins)) {
        console.log("user wins")
        humanScore++;
    } 
    else if (compareArrays(choices, combinations.rock_wins.reverse())) {
        console.log("computer wins")
        computerScore++;
    }
    else if (compareArrays(choices, combinations.scissors_wins)) {
        console.log("user wins")
        humanScore++;
    } 
    else if (compareArrays(choices, combinations.scissors_wins.reverse())) {
        console.log("computer wins")
        computerScore++;
    }
    else if (compareArrays(choices, combinations.paper_wins)) {
        console.log("user wins")
        humanScore++;
    }
    else if (compareArrays(choices, combinations.paper_wins.reverse())) {
        console.log("computer wins")
        computerScore++;
    } else {
        console.log('...')
    }
}


function playGame() {
    
    for (let i = 0; i < 6; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
    
        playRound([humanSelection, computerSelection]);
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