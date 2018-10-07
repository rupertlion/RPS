const { Rps } = require('../spec/spec.helper')
const { Randomise } = require('../spec/spec.helper')
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()
const sinon = require('sinon')

describe('User can input a value and get Rock Paper Scissors results', () => {
    
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/');
    })

    beforeEach(async () => {
        await  browser.page.reload();
        randomiseMock = sinon.mock(new Randomise());
        global.randomise = randomiseMock;
        rps = new Rps();
    })

    after(async ()=> {
        await  browser.close();
    })

    afterEach(async ()=> {
        delete global.randomise;
    })

    it('choosing rock and clicking "Check" button', async () => {
        await browser.selectOption("select[id='value']", { option:  "rock" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.include('Computer wins! The computer chose paper');
    })

    it('choosing paper and clicking "Check" button', async () => {
        await browser.selectOption("select[id='value']", { option:  "paper" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.include("It's a tie! You both chose paper");
    })

    it('choosing scissors clicking "Check" button', async () => {
        await browser.selectOption("select[id='value']", { option:  "scissors" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.include('You win! The computer chose scissors');
    })
})