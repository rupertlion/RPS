const { Rps } =  require('./spec.helper')

describe('Rps', () => {
    
    let rps = new Rps

    it('returns an error if no choice is made', () => {
        expect(rps.check(null)).to.eql('Hey come on, be serious, give me a choice!')
    })

    it('calculates the winner of the game', () => {
        let choice1 = 'rock';
        let choice2 = 'scissors';
        expect(rps.check(choice1, choice2)).to.equal('rock wins')
    })

    it('calculates when a game is a rock tie', () => {
        expect(rps.check('rock', 'rock')).to.equal('The result is a tie! Try again.')
    })

    it('calculates when a game is a paper tie', () => {
        expect(rps.check('paper', 'paper')).to.equal('The result is a tie! Try again.')
    })

    it('calculates when a game is a scissors tie', () => {
        expect(rps.check('scissors', 'scissors')).to.equal('The result is a tie! Try again.')
    })

    it('creates a random choice for the computer', () => {
        computerchoice = 0.1;
        expect(choice2).to.equal('rock')
    })

})