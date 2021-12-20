import {BasePage} from "./base.page";
import {SIGNUP_PAGE_LOCATOR} from "../integration/locators/signup-page.locator";
import {REPLACE_PATTERN} from "../integration/constant/value";
import {HomePage} from "./home.page";

class SignupPage extends BasePage {

    inputEmail(email: string): SignupPage {
        // this.clickByLocator(CHANGE_SCREEN_LOCATOR)
        this.sendKeyByLocator(SIGNUP_PAGE_LOCATOR.EMAIL_FIELD, email)
        return this;
    }

    inputPassword(password: string): SignupPage {
        this.sendKeyByLocator(SIGNUP_PAGE_LOCATOR.PASSWORD_FIELD, password)
        return this
    }

    reInputPassword(password: string): SignupPage {
        this.sendKeyByLocator(SIGNUP_PAGE_LOCATOR.RE_ENTER_PASSWORD_FIELD, password)
        return this
    }

    selectDateOfBirth(year, month, date) {
        const dateLocator = SIGNUP_PAGE_LOCATOR.DATE.replace(REPLACE_PATTERN.DATE, date)
        this.clickByLocator(SIGNUP_PAGE_LOCATOR.DATE_OF_BIRTH)
        this.selectByLocator(SIGNUP_PAGE_LOCATOR.YEAR, year)
        this.selectByLocator(SIGNUP_PAGE_LOCATOR.MONTH, month)
        this.clickByLocator(dateLocator)
        return this
    }

    selectGender(gender) {
        const genderLocator = SIGNUP_PAGE_LOCATOR.GENDER.replace(REPLACE_PATTERN.GENDER, gender)
        this.clickByLocator(genderLocator)
        return this
    }

    signup() {
        this.clickByLocator(SIGNUP_PAGE_LOCATOR.SIGN_UP_BUTTON)
        return new HomePage()
    }

    verifyWrongFormat(){
        this.isDisableByLocator(SIGNUP_PAGE_LOCATOR.SIGN_UP_BUTTON)
        this.isVisibleByLocator(SIGNUP_PAGE_LOCATOR.WRONG_FORMAT)
    }
}

export default SignupPage;