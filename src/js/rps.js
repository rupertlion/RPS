function Randomise() {
    let computerchoice = Math.random();
    
    // let computerchoice = ["rock", "paper", "scissors"];
    // choice2 = computerchoice[Math.floor(Math.random() * computerchoice.length)]

    if (computerchoice < 0.34) {
            choice2 = "rock";
        } else if(computerchoice <= 0.67) {
            choice2 = "paper";
        } else {
            choice2 = "scissors";
        }
}

function Rps() {
        
    let randomise = new Randomise

    this.check = (choice1, randomise) => {
        if (!choice1) {
            return 'Hey come on, be serious, give me a choice!';
        }

        if (!((choice1 == 'rock') || (choice1 == 'paper') || (choice1 == 'scissors'))) {
            return 'Hey come on, be serious, give me a choice!';
        }

        if (choice1 === randomise) {
            return `It's a tie! You both chose ${choice1}`;
        }
        
        if (choice1 === "rock") {
            if (randomise === "scissors") {
                return `You win! The computer chose ${randomise}`;
            } else { 
                return `Computer wins! The computer chose ${randomise }`;
            }
        }
        
        if (choice1 === "paper") {
            if (randomise === "rock") {
                return `You win! The computer chose ${randomise}`;
            } else { 
                return `Computer wins! The computer chose ${randomise}`;
            }
        }
        
        if (choice1 === "scissors") {
            if (randomise === "paper") {
                return `You win! The computer chose ${randomise}`;
            } else { 
                return `Computer wins! The computer chose ${randomise}`;
            }
        }   
    }
}