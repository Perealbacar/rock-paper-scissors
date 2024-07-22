//Randomly return rock/paper/scissors
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice(){
    let choice = Math.random();

    if(choice <= 0.33) { console.log(rock); return rock}
    else if (choice > 0.33 && choice <= 0.66) { console.log(paper);return paper}
    else {console.log(scissors); return scissors}

}

getComputerChoice();