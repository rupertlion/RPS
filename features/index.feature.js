const { Rps } = require('../spec/spec.helper')
const { Randomise } = require('../spec/spec.helper')
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

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
        let sinon = require('sinon')
        let fake = sinon.fake.returns('paper');
        sinon.replace(this, randomise, fake);
        await browser.selectOption("select[id='value']", { option:  "rock" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.include('chose');
    })

    it('clicking on the "Check" button', async () => {
        await browser.selectOption("select[id='value']", { option:  "paper" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.include('chose');
    })

    it('clicking on the "Check" button', async () => {
        await browser.selectOption("select[id='value']", { option:  "scissors" })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.include('chose');
    })
})