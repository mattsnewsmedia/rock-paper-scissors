let humanScore = 0;
let computerScore = 0;

//Takes argument 'shootComputer' and compares it with numbers between 0 and .999 to determine
//if the computer chose rock, paper, or scissors

function getComputerChoice(shootComputer){
    if(shootComputer <= 0.33){
        let shootComputer = "rock";
        return shootComputer;
    }   
    else if(shootComputer > 0.33 && shootComputer < 0.66){
        shootComputer = "paper";
        return shootComputer;
    }     
    else
        shootComputer = "scissors";
        return shootComputer; 
}

//Prompt user for their choice of rock paper or scissors

function getHumanChoice(){
    let shootHuman = prompt("Choose your weapon: rock, paper, or scissors");
    if(shootHuman.toUpperCase() == "ROCK" || shootHuman.toUpperCase() == "PAPER" || shootHuman.toUpperCase() == "SCISSORS"){
    return shootHuman;
    }
    else
        return "Not an option";
}

// Compares human choice to computer choice to determine which action to take

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        return alert("You win! Rock beats paper!");
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        return alert("You win! Paper beats rock!");        
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        return alert("You win! Scissors beats paper!");        
    }
    else if(humanChoice == "rock" && computerChoice == "rock"){
        return alert("It's a draw!");
    }
    else if(humanChoice == "paper" && computerChoice == "paper"){
        return alert("It's a draw!");        
    }
    else if(humanChoice == "scissors" && computerChoice == "scissors"){
        return alert("It's a draw!");        
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        return alert("You lose! Computer chose paper!");
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        return alert("You lose! Computer chose scissors!");        
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        return alert("You lose! Computer chose rock!");        
    }
}


