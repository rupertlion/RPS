function Randonmise() {
    let computerchoice = Math.random();
    
    if (computerchoice < 0.34) {
            choice2 = "rock";
        } else if(computerchoice <= 0.67) {
            choice2 = "paper";
        } else {
            choice2 = "scissors";
        }
}

function Rps() {
        
    this.check = (choice1, choice2) => {
        if (!choice1) {
            return 'Hey come on, be serious, give me a choice!';
        }

        if (!((choice1 == 'rock') || (choice1 == 'paper') || (choice1 == 'scissors'))) {
            return 'Hey come on, be serious, give me a choice!';
        }

        if (choice1 === choice2) {
            return `It's a tie! You both chose ${choice1}`;
        }
        
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return `You win! The computer chose ${choice2}`;
            } else { 
                return `Computer wins! The computer chose ${choice2}`;
            }
        }
        
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                return `You win! The computer chose ${choice2}`;
            } else { 
                return `Computer wins! The computer chose ${choice2}`;
            }
        }
        
        if (choice1 === "scissors") {
            if (choice2 === "paper") {
                return `You win! The computer chose ${choice2}`;
            } else { 
                return `Computer wins! The computer chose ${choice2}`;
            }
        }   
    }
}