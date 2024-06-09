// Listening for user input button clicks
let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

let choicesClickables = document.querySelector(".choices-clickables");

let buttons = document.querySelectorAll(".choice-btn");

let user0 = document.querySelector(`.player-user-0`)
let user1 = document.querySelector(`.player-user-1`)

let round = 6;
let currentRound = 0;
// let winnersArray = [];

let user0Wins = 0, user1Wins = 0, tie = 0;


// const modes = ["p2p", "p2c"];
const deadlyCombo = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}

let getUser0Choice = () => {
    let userOptions = Object.keys(deadlyCombo);
    return userOptions[Math.floor(Math.random() * userOptions.length)]
}

let getWhoWon = (user0Choice, user1Choice) => {
    if (user0Choice == user1Choice) {
        return "tie";
    } else if (deadlyCombo[user0Choice] === user1Choice) {
        return "user0";
    } else {
        return "user1";
    }
    // dummy response
    return {
        winner: user.user
    }
}

let gameEnds = (status) => {
    let statusMessage = document.querySelector(`.status-message .${status}`);
    choicesClickables.classList.toggle("pointer-events");
    statusMessage.classList.add("display-visible");
}


buttons.forEach( button => {
    button.addEventListener("click", () => {
        // reseting the user sprite to rock, when the round starts
        user0.querySelector("div > img").setAttribute("src", `assets/rock.png`)
        user1.querySelector("div > img").setAttribute("src", `assets/rock.png`)

        choicesClickables.classList.toggle("pointer-events");
        // getting user0, user1 choices on button clicks 
        let user0Choice = getUser0Choice();
        let user1Choice = button.id;

        // enable fist shake animations
        user0.classList.toggle("player-user-anim");
        user1.classList.toggle("player-user-anim");
        

        // shake fist for time
        setTimeout(function(){
            currentRound++;
            console.log("<RESULTS>")

            // disable fist shake animations
            user0.classList.toggle("player-user-anim");
            user1.classList.toggle("player-user-anim");  
            choicesClickables.classList.toggle("pointer-events");

            // update the default rock sprite to user choice
            user0.querySelector("div > img").setAttribute("src", `assets/${user0Choice}.png`)
            user1.querySelector("div > img").setAttribute("src", `assets/${user1Choice}.png`)

            let whoWon = getWhoWon(user0Choice, user1Choice);

            console.log(whoWon)
            // winnersArray.push(getWhoWon({ user: "user1" }).winner);

            if (whoWon == "user0") {
                user0Wins++
            } else if (whoWon == "user1") {
                user1Wins++
            } else {
                tie++
                // for draws do nothing
            }

            // check if currentRound is >= round
            if (currentRound >= round) {    
                if (user1Wins > user0Wins) {
                    console.warn("user1 won")
                    gameEnds("won")
                } else if (user1Wins < user0Wins) {
                    console.warn("user0 won")
                    gameEnds("lost")
                } else {
                    console.log(tie)
                    gameEnds("tie");
                }
            }

            // console.log(winnersArray)
            // currentRound++;
            // if (currentRound >= round) {    
            //     winnersArray.map( (e, i) => {
                    
            //     })
            // }
            
            console.table(user0Choice, user1Choice);
        }, 200);
        
        // console.log(getUser0Choice());

        // mitigating the additional user complexity for now, because i may have to use 
        // gameloop for that
        // - on click event fires up, determines who is the clicker <user>, 
        //   waits for the other user to click, then same

        // ------

        // - call the user-0 and ask for its choice
        // - user-0 when choosen the choice, sends a event update, that is listened 
        //   by a function getWhoWon() that determines the winner
        // - getWhoWon sends back the data as object, { winner: <user>, choices: [rock, paper]}
        // - this data is used to increment the counter for <user> wins
        // - after the required round numbers, the winner is declared and status message is popped, You win!
    })
})