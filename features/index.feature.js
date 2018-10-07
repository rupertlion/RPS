const { Rps } = require('../spec/spec.helper')
const { Randomise } = require('../spec/spec.helper')
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()
const randomise = new Randomise
const rps = new Rps

describe('User can input a value and get Rock Paper Scissors results', () => {
    
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/');
        let sinon = require('sinon')
        let fake = sinon.fake.returns(0.5);
        sinon.replace(Math, 'random', fake);
    })

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })

    it('clicking on the "Check" button', async () => {
        await browser.selectOption("select[id='value']", { option:  "rock" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.include('Computer wins! The computer chose paper');
    })

    it('clicking on the "Check" button', async () => {
        await browser.selectOption("select[id='value']", { option:  "paper" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.include("It's a tie! You both chose paper");
    })

    it('clicking on the "Check" button', async () => {
        await browser.selectOption("select[id='value']", { option:  "scissors" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.include('You win! The computer chose scissors');
    })
})