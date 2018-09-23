const { Rps } =  require('./spec.helper')
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('Rps', () => {
    
    let rps = new Rps

    describe('Input required', () => {
        it('returns an error if no choice is made', () => {
            expect(rps.check(null)).to.eql('Hey come on, be serious, give me a choice!')
        })
    })

    describe('Player 1 wins', () => {
        it('expects Player 1 to win the game', () => {
            expect(rps.check('rock', 'scissors')).to.equal('You win!')
        })

        it('expects Player 1 to win the game', () => {
            expect(rps.check('scissors', 'paper')).to.equal('You win!')
        })

        it('expects Player 1 to win the game', () => {
            expect(rps.check('paper', 'rock')).to.equal('You win!')
        })

    })

    describe('Computer wins', () => {
        it('expects Computer to win the game', () => {
            expect(rps.check('rock', 'paper')).to.equal('Computer wins!')
        })

        it('expects Computer to win the game', () => {
            expect(rps.check('scissors', 'rock')).to.equal('Computer wins!')
        })

        it('expects Computer to win the game', () => {
            expect(rps.check('paper', 'scissors')).to.equal('Computer wins!')
        })

    })

    describe('Game is tied', () => {
        it('calculates when a game is a rock tie', () => {
            expect(rps.check('rock', 'rock')).to.equal("It's a tie!")
        })

        it('calculates when a game is a paper tie', () => {
            expect(rps.check('paper', 'paper')).to.equal("It's a tie!")
        })

        it('calculates when a game is a scissors tie', () => {
            expect(rps.check('scissors', 'scissors')).to.equal("It's a tie!")
        })

    })
    
    describe('Computer player random generation', () => {
        it('creates a random choice for the computer', () => {
            computerchoice = Math.random();
            expect(choice2).to.equal('paper')
        })
    })
})