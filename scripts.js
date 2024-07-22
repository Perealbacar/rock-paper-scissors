//Randomly return rock/paper/scissors
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanChoice;
let computerChoice;

//score variables

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

   
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

function getHumanChoice(){
    return prompt("What is your choice?").toLowerCase();    
}

humanChoice = getHumanChoice();

computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);