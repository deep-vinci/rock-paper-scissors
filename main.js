
const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    console.log(
        options[Number(String(Math.random()).at(-1))%3]
    )
}
getComputerChoice();
