let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
// console.log(choices);

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];   

};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!");
        msg.innerText =`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw, play again";
};

const playGame = ( userChoice) =>{
    console.log("User Choice =", userChoice);
    //Generater computer choice
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
    let userWin = true;
    if(userChoice === "rock"){
        //compChoice = scissors,  paper
        userWin = compChoice === "scissors"? true : false;
    }
    else if(userChoice === "paper"){
        //compChoice = rock, scissors
        userWin = compChoice === "scissors"? false : true;
    }
    else{
        //compChoice = rock, paper
        userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // let userChoice = choice.id;
        let userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    });
});