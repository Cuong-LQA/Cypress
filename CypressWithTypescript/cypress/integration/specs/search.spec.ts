import {HomePage} from "../../pages/home.page";
import {BASE_URL, SEARCH_VALUE} from "../constant/value";
import {LOCATION} from "../locators/signup-page.locator";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Testing search function', () => {
    const homePage = new HomePage()

    beforeEach(() => {
        cy.visit(BASE_URL)
    })

    it.only('Check appearance when typing search then delete search - 3rd', () => {
        homePage.selectLocation(LOCATION.HA_NOI)
            .inputSearchValue(SEARCH_VALUE.VALID)
            .verifySearchAppearanceAfterType(SEARCH_VALUE.VALID)
        homePage.clearSearchValue()
            .verifyAfterClearInput()
    })

    //The search function in BE is searching title contain single word in search string.
    //If check list suggestion by exact input will fail
    //So these 3 tests below need to modify locator to get all suggestion
    it('Check result preview of search - 4th', () => {
        homePage.selectLocation(LOCATION.HA_NOI)
            .inputSearchValue(SEARCH_VALUE.VALID)
            .verifyListResultSuggestions(SEARCH_VALUE.VALID)
    })

    it('Check title of a result suggestion - 5th', () => {
        homePage.selectLocation(LOCATION.HA_NOI)
            .inputSearchValue(SEARCH_VALUE.VALID)
            .verifyTitleOfFirstResult(SEARCH_VALUE.VALID)
    })

    it.only('Check list results contains suggestions - 6th', () => {
        homePage.selectLocation(LOCATION.HA_NOI)
            .inputSearchValue(SEARCH_VALUE.VALID)
            .verifyListTitlesInSuggestion(SEARCH_VALUE.VALID)
    })

    it('Search wrong product name - 7th', () => {
        let productPage = homePage.selectLocation(LOCATION.HA_NOI)
            .inputSearchValue(SEARCH_VALUE.INVALID)
            .clickSearchButton()
            .verifyWrongProductName()
    })
})