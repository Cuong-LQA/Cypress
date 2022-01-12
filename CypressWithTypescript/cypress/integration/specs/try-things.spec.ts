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
    it.only('html5 input', function (){
        const p = 'Daisy01.jpg'
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile(p)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('Daisy')

        // cy.visit("https://upload.photobox.com/en/#computer")
        // cy.xpath('//button[@id="button_desktop"]').should('not.exist')
        // cy.xpath(' //button[text()="Get photos from your computer"]').should('exist').attachFile(p)
    });

    it('drag an drop picture', () => {
        cy.visit('https://www.google.com/search?q=daisy&tbm=isch&ved=2ahUKEwjQkoPD6Kj1AhWUTPUHHc-5C4QQ2-cCegQIABAA&oq=daisy&gs_lcp=CgNpbWcQAzoFCAAQgAQ6BAgAEEM6BQgAELEDOggIABCxAxCDAToICAAQgAQQsQM6CwgAEIAEELEDEIMBUK8KWMsPYMgRaABwAHgAgAGEAYgB6gWSAQMwLjaYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=hAHdYdDAAZSZ1e8Pz_OuoAg&bih=927&biw=1146&hl=en-US')
        cy.xpath('//input[@id="REsRA"]')
            .attachFile('Daisy01.jpg', { subjectType: 'drag-n-drop' })
    })
})