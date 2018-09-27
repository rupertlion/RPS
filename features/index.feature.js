const { Rps } = require('../spec/spec.helper')
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
        await browser.selectOption("select[name='value']", {option: 'Rock' })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.eql('Computer wins! The computer chose Paper');
    })

    it('clicking on the "Check" button', async () => {
        await browser.selectOption("select[name='value']", {option: 'Paper' })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.eql("It's a tie! You both chose Paper");
    })

    it('clicking on the "Check" button', async () => {
        await browser.selectOption("select[name='value']", {option: 'Scissors' })
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.eql('You win! The computer chose Paper');
    })
})