function Rps() {
    
    const computerchoice = ['Rock', 'Paper', 'Scissors'];
    computerchoice[Math.floor(Math.random() * computerchoice.length)];
    
    this.check = (choice1, computerchoice) => {
        
        if (!choice1) {
            return 'Hey come on, be serious, give me a choice!';
        }

        if (!((choice1 == 'Rock') || (choice1 == 'Paper') || (choice1 == 'Scissors'))) {
            return 'Hey come on, be serious, give me a choice!';
        }

        if (choice1 === computerchoice) {
            return `It's a tie! You both chose ${choice1}`;
        }
        
        if (choice1 === "Rock") {
            if (computerchoice === "Scissors") {
                return `You win! The computer chose ${computerchoice}`;
            } else { 
                return `Computer wins! The computer chose ${computerchoice}`;
            }
        }
        
        if (choice1 === "Paper") {
            if (computerchoice === "Rock") {
                return `You win! The computer chose ${computerchoice}`;
            } else { 
                return `Computer wins! The computer chose ${computerchoice}`;
            }
        }
        
        if (choice1 === "Scissors") {
            if (computerchoice === "Paper") {
                return `You win! The computer chose ${computerchoice}`;
            } else { 
                return `Computer wins! The computer chose ${computerchoice}`;
            }
        }   
    }
}