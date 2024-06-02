
const options = ["rock", "paper", "scissors"]
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let cmputerChoice = Number(String(Math.random()).at(-1))%3
    console.log(`%c computer : ${options[cmputerChoice]}`, "background-color:black");
    return options[cmputerChoice];
}

function getHumanChoice() {
    let humanChoice = prompt(`choose your options
    0. Rock [0]
    1. Paper [1]
    2. Scissors [2]
    
    3. restart game [r]
    4. end game [q]`);

    return humanChoice;
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
    
    while (true) {
        let humanSelection = getHumanChoice();
        if (humanSelection == "q") {
            if (humanScore === computerScore) {
                console.log("%c its a tie!!", "background-color:yellow, color:black")
            } else if (humanScore > computerScore) {
                console.log("%c human won!!", "background-color:green")
            } else {
                console.log("%c computer won!!", "background-color:red")
            }        
            console.log(`human score: ${humanScore}, compuer score: ${computerScore}`)
            break;
        } else if (humanSelection == "r") {
            humanScore = 0; computerScore = 0;
            playGame();
            break;
        } else {
            let computerSelection = getComputerChoice();
            console.log(`%c human : ${options[humanSelection]}`, "background-color:black");
            playRound([options[humanSelection], computerSelection]);    
        }
    }
}   

playGame();