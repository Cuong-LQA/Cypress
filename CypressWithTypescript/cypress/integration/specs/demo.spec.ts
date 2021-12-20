//TODO: tsconfig.json file need to be created first. If not, this file will get error

describe('Testing api', () => {
    it.only('Testing get weather data by city name', () => {
        cy.request({
            url: 'https://goweather.herokuapp.com/weather/Hanoi'
        }).then(res => {
            console.log(res)
            expect(res.status, 'response status to be 200').to.eq(200)
            expect(res.body['temperature']).contain('C')
            // debugger
        })
    })
})