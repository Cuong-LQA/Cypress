import {BASE_URL, USER_INFO} from "../constant/value";
import {HomePage} from "../../pages/home.page";
import {GENDER_ID, LOCATION, MONTH} from "../locators/signup-page.locator";

describe('Testing sign up function', () => {
    let homePage = new HomePage()

    beforeEach(() => {
        cy.visit(BASE_URL)
    });

    it('Sign up with wrong email format - 1st', () => {
        let signUpPage = homePage.selectLocation(LOCATION.HA_NOI).clickSignUp()
        signUpPage.inputEmail(USER_INFO.INVALID_EMAIL).verifyWrongFormat()
    })

    it('Sign up with all valid input - 2nd', () => {
        const email = homePage.createRandomEmail()
        const password = USER_INFO.PASSWORD
        let signUpPage = homePage.selectLocation(LOCATION.HA_NOI).clickSignUp()
        signUpPage.inputEmail(email)
            .inputPassword(password)
            .reInputPassword(password)
            .selectDateOfBirth('1999', MONTH['1'], '1')
            .selectGender(GENDER_ID.MALE)
            .signup()
        // .verifySignUpSuccess()
        // the verify success sign up is commented because of the website remove the success announcement pop up
    })
})