const modes = ["p2p", "p2c"];

let whoWon = () => {
    console.log(2)
}

// Listening for user input button clicks
let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

let buttons = document.querySelectorAll(".choice-btn");

buttons.forEach( button => {
    button.addEventListener("click", () => {
        console.log(button);
    })
})