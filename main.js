let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let replayButton = document.querySelector(".replay");
let gameBoard = document.querySelector(".game-board");
let roundCount = document.querySelector(".round-count");
let credit = document.querySelector(".credits");
let rollCredits = document.querySelector(".roll-credits");
let creditsBody = document.querySelector(".credits-body");

let roundOptions = document.querySelectorAll(".start-page > .round-options button");
let startPage = document.querySelector(".start-page");
let two = document.querySelector(".two");
let five = document.querySelector(".five");
let ten = document.querySelector(".ten");

var win = new Audio('assets/win.wav');
var lose = new Audio('assets/lose.wav');
var step = new Audio('assets/step.wav');

// Set the volume for each audio element
win.volume = 0.2;
lose.volume = 0.2;
step.volume = 0.2;

let choicesClickables = document.querySelector(".choices-clickables");

let buttons = document.querySelectorAll(".choice-btn");

let user0 = document.querySelector(`.player-user-0`)
let user1 = document.querySelector(`.player-user-1`)

let round; 
let currentRound = 0;

let user0Wins = 0, user1Wins = 0, tie = 0;


roundOptions.forEach(function(button) {
    button.addEventListener('click', function() {
        round = button.id;
        roundCount.textContent = button.id
        startPage.style.display = "none";
    });
});

credit.addEventListener("click", () => {
    // rollCredits.classList.toggle("display-visible");
    rollCredits.classList.toggle("credit-body-animate");
    // rollCredits.style.display = "block";
    rollCredits.classList.toggle("roll-credits-toggle-flex");
    creditsBody.classList.add("credits-body-animate")
})


let scoreNumberEffect = (i) => {
    let div = document.createElement("div");
    div.classList.add("score-num", `score-${i}-side`)
    div.textContent = "+ 1"
    gameBoard.appendChild(div)
}
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
        scoreNumberEffect(0);
        return "user0";
    } else {
        scoreNumberEffect(1);
        return "user1";
    }
}

let gameEnds = (status) => {
    let statusMessage = document.querySelector(`.status-message .${status}`);
    choicesClickables.classList.toggle("pointer-events");
    statusMessage.classList.add("display-visible");
    replayButton.classList.add("display-visible")
    replayButton.addEventListener("click", () => {
        currentRound = 0;
        user0Wins = 0, user1Wins = 0, tie = 0;
        choicesClickables.classList.remove("pointer-events");
        statusMessage.classList.remove("display-visible");
        replayButton.classList.remove("display-visible")
        user0.querySelector("div > img").setAttribute("src", `assets/rock.png`)
        user1.querySelector("div > img").setAttribute("src", `assets/rock.png`)
        roundCount.textContent = round;

    })
}


buttons.forEach( button => {
    button.addEventListener("click", () => {
        step.play();
        // reseting the user sprite to rock, when the round starts
        user0.querySelector("div > img").setAttribute("src", `assets/rock.png`);
        user1.querySelector("div > img").setAttribute("src", `assets/rock.png`);
        roundCount.textContent = parseInt(roundCount.textContent) - 1;

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
                    win.play();
                } else if (user1Wins < user0Wins) {
                    console.warn("user0 won")
                    gameEnds("lost")
                    lose.play();
                } else {
                    console.log(tie)
                    gameEnds("tie");
                    lose.play()
                }
            }
            
            console.table(user0Choice, user1Choice);
        }, 800);        
    })
})

if (typeof screen.orientation == 'undefined') { 
    document.querySelector("body").textContent = "This site looks best on pc"
 }
