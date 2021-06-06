function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        draw++
        const message = document.querySelector('#result-round');
        message.textContent = 'Its a Draw, Play again';
        const drawResult = document.querySelector('#drawS');
        drawResult.textContent = draw;
    
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        player++

        const message = document.querySelector('#result-round');
        message.textContent = 'Paper beats rock, You win!';
        const playerResult = document.querySelector('#playerS');
        playerResult.textContent = player;

    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        player++
        const message = document.querySelector('#result-round');
        message.textContent = 'Rock beats scissors, You win!';
        const playerResult = document.querySelector('#playerS');
        playerResult.textContent = player;
       
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        player++
        const message = document.querySelector('#result-round');
        message.textContent = 'Scissors beats paper, You win! ';
        const playerResult = document.querySelector('#playerS');
        playerResult.textContent = player;
      
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computer++
     
        const message = document.querySelector('#result-round');
        message.textContent = 'Scissors beats paper, You lost!';
        const compResult = document.querySelector('#compS');
        compResult.textContent = computer;
      
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computer++
        const message = document.querySelector('#result-round');
        message.textContent = 'Rock beats scissors, You lost! ';
        const compResult = document.querySelector('#compS');
        compResult.textContent = computer;
      
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computer++
        const message = document.querySelector('#result-round');
        message.textContent = 'Paper beats rock, You lost!';
        const compResult = document.querySelector('#compS');
        compResult.textContent = computer;
    } else {
        return "oops sad";
    }

}
let playerSelection = "Rock";

const computerSelection = function computerPlay() {
    let getValue = ['Rock', 'Paper', 'Scissors'];
    const random = [Math.floor(Math.random() * getValue.length)];
    if (random == 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else if (random == 2) {
        return "Scissors";
    } else {
        return "opps";
    }
}

let draw = 0;
let player = 0;
let computer = 0;

function getTotalScore() {
    if (player == computer) {
        return "game ends with draw";
    } else if (player > computer) {
        return "player wins";
    } else if (computer > player) {
        return "computer won"
    } else {
        return "sad"
    }
}

document.getElementById("rock").addEventListener("click", function () {
    console.log(playRound("Rock", computerSelection()))
});

document.getElementById("paper").addEventListener("click", function () {
    console.log(playRound("Paper", computerSelection()))

});

document.getElementById("scis").addEventListener("click", function () {
    console.log(playRound("Scissors", computerSelection()))
});