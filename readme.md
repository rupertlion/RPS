## **Rock, Paper, Scissors**
### *Online Game*
-------
### Built With
-------

* HTML
* [Javascript](https://www.javascript.com/) - The programming language used
* [npm](https://www.npmjs.com/) - Package manager
* [Chai](http://www.chaijs.com/) - BDD / TDD assertion library
* [Mocha](https://mochajs.org/) - Testing framework
* [Tailwind](https://tailwindcss.com/) - CSS Styling

### **Overview**
-------
The application provides the ability for users to play a digital version of "Rock, Paper, Scissors" against the computer.

### **Game requirements**
-------
* Ability to play against the computer
* Ability to replay the game
* Computer generated plays need to be random

### **Rulesets**
-------
* There are 3 valid moves (Rock, Paper, Scissors) with assoiated game performance:
    * Rock vs Scissors: Paper covers Rock -> Rock wins
    * Rock vs Paper: Rock breaks Scissors -> Paper wins
    * Paper vs Scissor: Scissors cut Paper -> Scissor wins

### **Game**
-------
The player chooses one of the available symbols, the computer waits for the player's choice and makes its choice, then the symbols are compared.

From the player's point of view, the computer makes its choice at the same time the player does.

### **User Stories**
-------
#### The "Rock, Paper, Scissors" (RPC) program will work with the following associated user stories.

* **1:** 

  ```
    As a user
    In order to have fun
    I would like to be able to initiate a game of RPC
  ```

* **2:** 

  ```
    As a user
    In order to play RPC
    I would like to be able to input my choice
  ```

* **3:** 

  ```
    As a user
    In order to see if I have won
    I would like to be able to see what my opponent has chosen and whether I have won or lost the game
  ```

### **Author**
-------
* **Rupert Lion**