//Randomly return rock/paper/scissors
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanChoice;
let computerChoice;

//score variables

let humanScore = 0;
let computerScore = 0;

let round = 0;

const body = document.querySelector("body");

function playRound(humanChoice) {

    computerChoice = getComputerChoice();

    console.log("Round " + ++round);
   
    if(humanChoice == computerChoice) {
        writeResult("Both used " + humanChoice + ". It's a draw!");

        console.log("Both used " + humanChoice + ". It's a draw!");
    }
    else if(humanChoice == rock  && computerChoice == paper || humanChoice == paper && computerChoice == scissors || humanChoice == scissors && computerChoice == rock) {
        
        ++computerScore;

        writeResult(computerChoice + " beats " + humanChoice + ". You lose!");
        writeResult("Your Score = " + humanScore + " Computer Score = " + computerScore);
        
        console.log(computerChoice + " beats " + humanChoice + ". You lose!");
        console.log("Your Score = " + humanScore + " Computer Score = " + computerScore);
    }
    else {

        ++humanScore;

        writeResult(humanChoice + " beats " + computerChoice + ". You win!"); 
        writeResult("Your Score = " + humanScore + " Computer Score = " + computerScore);
        
        console.log(humanChoice + " beats " + computerChoice + ". You win!"); 
        console.log("Your Score = " + humanScore + " Computer Score = " + computerScore);
    }

    playGame();
    
    
}

function getComputerChoice() {
    let choice = Math.random();

    if(choice <= 0.33) { 
        console.log(rock);
        return rock
    }

    else if (choice > 0.33 && choice <= 0.66) {
        console.log(paper);
        return paper
    }

    else {
        console.log(scissors); return scissors
    }

}

function getHumanChoice(choice){
    humanChoice = choice;
    playRound(humanChoice);

    //return prompt("What is your choice?").toLowerCase();    
}

function playGame(){
/*
    while(humanScore < 5 && computerScore < 5) {

        humanChoice;
        computerChoice = getComputerChoice();
        //playRound(humanChoice, computerChoice);
    }
*/

    if(humanScore >= 5){
        console.log("You got 5 points. You win the game!");
        restartGame();
    }

    else if(computerScore >= 5){
        console.log("Computer got 5 points. You lose the game!");
        restartGame();
    }
}

function writeResult(string){

    let div = document.createElement("div");
    div.textContent = string;
    body.appendChild(div);

}

function restartGame(){
    humanScore = 0;
    computerScore = 0;
}

const rockBtn = document.querySelector("#rockBtn");


rockBtn.addEventListener("click", () => {
    humanChoice = getHumanChoice(rock);
});

const paperBtn = document.querySelector("#paperBtn");

paperBtn.addEventListener("click", () => {
    humanChoice = getHumanChoice(paper);
});

const scissorsBtn = document.querySelector("#scissorsBtn");

scissorsBtn.addEventListener("click", () => {
    humanChoice = getHumanChoice(scissors);
});


//playGame();

