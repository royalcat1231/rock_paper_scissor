function computerPlay(){

    let getValue = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * getValue.length);

    if (random == 0) {
        return "rock"
    }
    else if (random == 1) {
        return "Paper"
    }

    else{
        return  "Scissors";
    }
}