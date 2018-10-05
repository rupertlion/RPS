const { Rps } = require('../spec/spec.helper')
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()
var sinon = require('sinon')
const callback = sinon.fake.returns(0.5)
const proxy = randomise(callback)

describe('User can input a value and get Rock Paper Scissors results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })

    it('clicking on the "Check" button', async () => {
        await browser.fillIn("input[id='value']", { with:  "rock" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.eql('Computer wins! The computer chose paper');
    })

    it('clicking on the "Check" button', async () => {
        await browser.fillIn("input[id='value']", { with:  "paper" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.eql("It's a tie! You both chose paper");
    })

    it('clicking on the "Check" button', async () => {
        await browser.fillIn("input[id='value']", { with:  "scissors" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.eql('You win! The computer chose paper');
    })
})