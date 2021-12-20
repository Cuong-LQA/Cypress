import {HomePage} from "../../pages/home.page";
import {BASE_URL} from "../constant/value";
import {LOCATION} from "../locators/signup-page.locator";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Testing catalog function', () => {
    const homePage = new HomePage()

    beforeEach(() => {
        cy.visit(BASE_URL)
    })

    it('Check location of product in food>buffet - 11th', () => {
        homePage.selectLocation(LOCATION.HA_NOI)
            .clickBuffetInFood()
            .verifyFilterBuffet(1)
    })

    it.only('Check sort good deal in catalog food>buffet - 12th', () => {
        homePage.selectLocation(LOCATION.HA_NOI)
            .clickBuffetInFood()
            .clickSortGoodDeal()
            .verifySortDealDesc()
    })

    // it.only('Testing async await', async () => {
    //     const basePage = new BasePage()
    //     const listNav = await basePage.getTextData('(//ul[@class="styled__NavList-sc-16oj5lj-3 gQOWwC"])[1]')
    //     console.log(listNav)
    // })
})