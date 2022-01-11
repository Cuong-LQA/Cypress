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
    it.only('should be log number in order', function () {
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