
const options = ["rock", "paper", "scissors"]
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let cmputerChoice = Number(String(Math.random()).at(5))%3
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

// playGame();

const keyPressOptions = {
    r: "rock",
    p: "paper",
    s: "scissors"
};

document.addEventListener('DOMContentLoaded', (event) => {
    // const loader = document.getElementById('loader');
    // const dots = ['.', '..', '...'];
    // let currentIndex = 0;

    // setInterval(() => {
    //     loader.textContent = dots[currentIndex];
    //     currentIndex = (currentIndex + 1) % dots.length;
    // }, 500);

    document.addEventListener('keydown', event => {
        if (keyPressOptions.hasOwnProperty(event.key)) {
            let computerSelection = getComputerChoice();
            // alert(`
            // ${computerSelection} - computer
            // ${keyPressOptions[event.key]} - human
            // `)
            document.querySelector(".computerchoice").textContent = computerSelection;
            document.querySelector(".userchoice").textContent = keyPressOptions[event.key];
            
            playRound([keyPressOptions[event.key], computerSelection]);

            // update score at the left-bottom
            document.querySelector(".humanscore").textContent = humanScore;
            document.querySelector(".computerscore").textContent = computerScore;

            // update scorepage
            let scorePage = document.querySelector(".scorepage");
            
            let eachScorePage = document.createElement("div");
            let playerChoices = document.createElement("div");
            let result = document.createElement("div");

            eachScorePage.classList.add("eachscore");
            playerChoices.classList.add("playerchoices");
            result.classList.add("results");

            playerChoices.innerHTML = `Human: ${keyPressOptions[event.key]} 
            <br>Computer: ${computerSelection}`;
            // result.textContent = `player won`;

            scorePage.appendChild(eachScorePage);
            eachScorePage.appendChild(playerChoices);
            eachScorePage.appendChild(result);
            // alert(`${humanScore}, ${computerScore}`)
        }
    });

    let restartButton = document.querySelector(".restart");

    restartButton.addEventListener("click", () => {
        humanScore = 0; computerScore = 0;
    
        document.querySelector(".humanscore").textContent = humanScore;
        document.querySelector(".computerscore").textContent = computerScore;
        let scorePage = document.querySelector(".scorepage");
        let eachScorePage = document.querySelectorAll(".eachscore");

        eachScorePage.forEach((i, e) => {
            scorePage.removeChild(i)
        })
        

    })

});
