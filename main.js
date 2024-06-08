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

        // - on click event fires up, determines who is the clicker <user>, 
        //   waits for the other user to click, then same

        // ------

        // - call the user-0 and ask for its choice
        // - user-0 when choosen the choice, sends a event update, that is listened 
        //   by a function whoWon() that determines the winner
        // - whoWon sends back the data as object, { winner: <user>, choices: [rock, paper]}
        // - this data is used to increment the counter for <user> wins
        // - after the required round numbers, the winner is declared and status message is popped, You win!
    })
})