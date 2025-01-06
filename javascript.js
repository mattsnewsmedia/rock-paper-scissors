let humanScore = 0;
let computerScore = 0;

const begin = document.querySelector("#begin");
const board = document.querySelector(".game-board");

begin.addEventListener('click', () => {
    board.removeChild(begin);

    const choose = document.querySelector("#title");
    choose.textContent = "Choose Your Weapon";

    score = document.createElement("p");
    score.textContent = "Human: " + humanScore + " Computer: " + computerScore;

    board.insertBefore(score, title.nextSibling);

    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";

    board.appendChild(rock);
    board.appendChild(paper);
    board.appendChild(scissors);

    rock.addEventListener('click', () => {
        let humanChoice = "rock";
        let computerChoice = getComputerChoice(Math.random());
        playRound(humanChoice, computerChoice);
        score.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    });

    paper.addEventListener('click', () => {
        let humanChoice = "paper";
        let computerChoice = getComputerChoice(Math.random());
        playRound(humanChoice, computerChoice);
        score.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    });

    scissors.addEventListener('click', () => {
        let humanChoice = "scissors";
        let computerChoice = getComputerChoice(Math.random());
        playRound(humanChoice, computerChoice);
        score.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    });
});
if(playerScore == 5){
    alert("5 points, you win!");
}
else if(computerScore == 5){
    alert("5 points, computer wins!")
}

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

// Compares human choice to computer choice to determine which action to take

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        alert("You win! Rock beats paper!");
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        alert("You win! Paper beats rock!");        
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        alert("You win! Scissors beats paper!");        
    }
    else if(humanChoice == "rock" && computerChoice == "rock"){
        alert("It's a draw!");
    }
    else if(humanChoice == "paper" && computerChoice == "paper"){
        alert("It's a draw!");        
    }
    else if(humanChoice == "scissors" && computerChoice == "scissors"){
        alert("It's a draw!");        
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        alert("You lose! Computer chose paper!");
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        alert("You lose! Computer chose scissors!");        
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        alert("You lose! Computer chose rock!");        
    }
    if (humanScore === 5) {
        alert("You Win!");
        return; 
    } 
    else if (computerScore === 5) {
        alert("Computer Wins!");
        return;
    } 
}


