
const options = ["rock", "paper", "scissors"]

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

getHumanChoice();