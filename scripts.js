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

function playRound(humanChoice) {

    computerChoice = getComputerChoice();

    console.log("Round " + ++round);
   
    if(humanChoice == computerChoice) {
        console.log("Both used " + humanChoice + ". It's a draw!");
    }
    else if(humanChoice == paper  && computerChoice == rock || humanChoice == paper && computerChoice == scissors || humanChoice == scissors && computerChoice == rock) {
        console.log(computerChoice + " beats " + humanChoice + ". You lose!");
        console.log("Your Score = " + humanScore + " Computer Score = " + ++computerScore);
    }
    else {
        console.log(humanChoice + " beats " + computerChoice + ". You win!"); 
        console.log("Your Score = " + ++humanScore + " Computer Score = " + computerScore);
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

    if(humanScore == 5){
        console.log("You got 5 points. You win the game!")
    }

    else if(computerScore == 5){
        console.log("Computer got 5 points. You lose the game!")
    }
}

const rockBtn = document.querySelector("#rockBtn");


rockBtn.addEventListener("click", () => {
    humanChoice = getHumanChoice("Rock");
});

const paperBtn = document.querySelector("paperBtn");
const scissorsBtn = document.querySelector("scissorsBtn");


//playGame();

