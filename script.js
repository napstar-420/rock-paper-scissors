function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const n = Math.floor((Math.random()) * 3);
    return choices[n];
}

function getGamerChoice(){
    const gamerChoice = prompt("Place your Bet");
    gamerChoice.toLowerCase();
    if(gamerChoice === "rock" || gamerChoice === "paper" || gamerChoice === "scissors"){
        return gamerChoice;
    } else {
        return `Sorry! ${gamerChoice} is not a valid bet.`
    }
}

function playRound(gamerChoice, computerChoice){

    if (gamerChoice === computerChoice){
        return ("It's a draw")
    };
    if(gamerChoice === "rock" && computerChoice === "paper"){
        return (`You Lose! ${computerChoice} defeats ${gamerChoice}`)
    };
    if(gamerChoice === "rock" && computerChoice === "scissors"){
        return (`You Won! ${gamerChoice} defeats ${computerChoice}`)
    };
    if(gamerChoice === "paper" && computerChoice === "scissors"){
        return (`You Lose! ${computerChoice} defeats ${gamerChoice}`)
    };
    if(gamerChoice === "paper" && computerChoice === "rock"){
        return (`You Won! ${gamerChoice} defeats ${computerChoice}`)
    };
    if(gamerChoice === "scissors" && computerChoice === "rock"){
        return (`You Lose! ${computerChoice} defeats ${gamerChoice}`)
    };
    if(gamerChoice === "scissors" && computerChoice === "paper"){
        return (`You Won! ${gamerChoice} defeats ${computerChoice}`)
    };
}

function game(getGamerChoice, getComputerChoice, playRound){
    for(let i = 0; i < 5; i++){
        const gamerChoice = getGamerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(gamerChoice, computerChoice));
    }
    return 'Game Ended';
}

console.log(game(getGamerChoice, getComputerChoice, playRound))