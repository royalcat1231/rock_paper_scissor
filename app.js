
function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection) {
        draw++
       return "It's a Draw, Play again";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock" ) {
        player++
       return "You Win! Paper vs Rock";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        player++
      return "You Win! Rock wins Scissors loss";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        player++
        return "You Win! Scissors win Paper loss";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        computer++
      return "You lost! Paper vs Scissors";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        computer++
        return "You lost! Scissors vs Rock";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
        computer++
        return "You lost! Rock vs Paper";
    }
    else{
        return "oops sad";
    }

  }
  
  const playerSelection = "plz enter rock, paper or Scissors" ;

const computerSelection = function computerPlay(){
    let getValue = ['Rock', 'Paper', 'Scissors'];
    const random = [Math.floor(Math.random() * getValue.length)]; 
    if (random == 0) {
        return "Rock";
    }
    else if (random == 1) {
        return "Paper";
    }
    else if (random == 2){
        return "Scissors";
    }
    else {
        return "opps";
    }
}

let draw = 0;
let player = 0;
let computer = 0;

function getTotalScore(){
    if(player == computer){
        return "game ends with draw";
    }

    else if (player > computer) {
        return "player wins" + player;
    }
    else if (computer > player) {
        return "computer won"
    }
    else {
        return "sad"
    }
    }
    let step = 0;
function game() {

        for ( step = 0; step < 5; step++) {
         console.log(playRound(prompt(playerSelection), computerSelection()));
        }
       
      }

      