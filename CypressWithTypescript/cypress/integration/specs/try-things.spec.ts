//TODO: tsconfig.json file need to be created first. If not, this file will get error

describe('Testing api', () => {
    it('Testing get weather data by city name', () => {
        cy.request({
            url: 'https://www.metaweather.com/api/location/search/?query=minh'
        }).then(res => {
            console.log(res)
            console.log(JSON.stringify(res.body))
            expect(res.status, 'response status to be 200').to.eq(200)
            expect(res.body[0]['title']).to.be.exist
            // debugger
        })
    })
})

describe('testing the order of cypress command', () => {
    it('should be log number in order', function () {
        console.log('1')
        cy.visit('https://www.cypress.io/')
        cy.xpath('//div[@class="styled__MenuWrapper-sc-16oj5lj-1 cGpLxq"]//li[@class="styled__NavItem-sc-16oj5lj-4 iqFVFJ"]/a')
            .then($el => {
                cy.xpath('(//a[@href="/dashboard"])[1]').then($el => {
                    console.log('2')
                    cy.xpath('(//a[@href="/dashboard"])[1]').then($el => console.log('3'))
                })
                cy.xpath('(//a[@href="/dashboard"])[1]').then($el => console.log('4'))
                console.log('5')
            })
        console.log('6')
    });
})

describe('testing upload file', () => {
    it('html5 input with heroku web', function (){
        const p = 'Daisy01.jpg'
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile(p)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('Daisy')

        // cy.visit("https://upload.photobox.com/en/#computer")
        // cy.xpath('//button[@id="button_desktop"]').should('not.exist')
        // cy.xpath(' //button[text()="Get photos from your computer"]').should('exist').attachFile(p)
    });

    it.only('html4, drag an drop picture', () => {
        //Todo: Maybe it works with input tag only. Event when it's input, still not work like first test.
        // The third works, it have input is a css as a box - maybe this is why

        const p = 'Daisy01.jpg'

        //This work if use drag-n-drop, remove option field will cause fail
        cy.visit('https://pasteboard.co/')
        cy.xpath('//input[@class="file-upload-text"]').attachFile(p, {subjectType: "drag-n-drop"})
        cy.xpath('//span[text()="Upload"]').click()
        cy.xpath('//a[@class="link button"]', {timeout: 10000}).should('exist').click()

        // //This website cannot use this attachFile
        // cy.visit('https://vi.imgbb.com/')
        // cy.xpath('//a[@class="btn btn-big blue"]')
        //     .should('exist')
        //     .attachFile(p, {subjectType: "drag-n-drop"})

        // // This works
        // cy.visit('https://practice.automationbro.com/cart')
        // cy.get("input[type=file]")
        //     .attachFile(p)
        // cy.get("input[value='Upload File']")
        //     .click()
    })
})