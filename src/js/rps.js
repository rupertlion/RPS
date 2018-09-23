function Rps() {
    
    let computerchoice = Math.random();
    
    if (computerchoice < 0.34) {
            choice2 = "rock";
        } else if(computerchoice <= 0.67) {
            choice2 = "paper";
        } else {
            choice2 = "scissors";
        }
    
    this.check = (choice1, choice2) => {
        if (!choice1) {
            return 'Hey come on, be serious, give me a choice!';
        }

        if (choice1 === choice2) {
            return "The result is a tie! Try again.";
        }
        
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "rock wins";
            } else { 
                return "paper wins";
            }
        }
        
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "paper wins";
            } else { 
                return "scissors wins";
            }
        }
        
        if (choice1 === "scissors") {
            if (choice2 === "paper") {
                return "scissors wins";
            } else { 
                return "rock wins";
            }
        }   
    }
}