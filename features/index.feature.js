const { Rps } = require('../spec/spec.helper')
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()
//const mockMath = Object.create(global.Math);
//mockMath.random = () => 0.5;
//global.Math = mockMath;
computerchoice = 0.5

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