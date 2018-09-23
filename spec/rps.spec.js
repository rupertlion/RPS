const { Rps } =  require('./spec.helper')

describe('Rps', () => {
    let rps = new Rps

    it('returns an error if no choice is made', () => {
        expect(rps.check(null)).to.eql('Hey come on, be serious, give me a choice!')
    })

})