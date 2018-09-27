const { Rps } =  require('./spec.helper')

describe('Rps', () => {
    
    let rps = new Rps

    describe('Correct input required', () => {
        it('returns an error if no choice is made', () => {
            expect(rps.check(null)).to.eql('Hey come on, be serious, give me a choice!')
        })
        it('returns an error if wrong choice is made', () => {
            expect(rps.check('panda')).to.eql('Hey come on, be serious, give me a choice!')
        })
    
    })

    describe('Player 1 wins', () => {
        it('expects Player 1 to win the game', () => {
            expect(rps.check('Rock', 'Scissors')).to.equal('You win! The computer chose Scissors')
        })

        it('expects Player 1 to win the game', () => {
            expect(rps.check('Scissors', 'Paper')).to.equal('You win! The computer chose Paper')
        })

        it('expects Player 1 to win the game', () => {
            expect(rps.check('Paper', 'Rock')).to.equal('You win! The computer chose Rock')
        })
    })

    describe('Computer wins', () => {
        it('expects Computer to win the game', () => {
            expect(rps.check('Rock', 'Paper')).to.equal('Computer wins! The computer chose Paper')
        })

        it('expects Computer to win the game', () => {
            expect(rps.check('Scissors', 'Rock')).to.equal('Computer wins! The computer chose Rock')
        })

        it('expects Computer to win the game', () => {
            expect(rps.check('Paper', 'Scissors')).to.equal('Computer wins! The computer chose Scissors')
        })
    })

    describe('Game is tied', () => {
        it('calculates when a game is a Rock tie', () => {
            expect(rps.check('Rock', 'Rock')).to.equal("It's a tie! You both chose Rock")
        })

        it('calculates when a game is a Paper tie', () => {
            expect(rps.check('Paper', 'Paper')).to.equal("It's a tie! You both chose Paper")
        })

        it('calculates when a game is a Scissors tie', () => {
            expect(rps.check('Scissors', 'Scissors')).to.equal("It's a tie! You both chose Scissors")
        })
    })
    
    describe('Computer player random generation', () => {
        it('creates a random choice for the computer', () => {
            computerchoice = Math.random();
            expect(computerchoice).to.equal('Paper')
        })
    })
})