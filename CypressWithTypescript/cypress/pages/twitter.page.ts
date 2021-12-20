import {BasePage} from "./base.page";
import {TWITTER_LOCATOR} from "../integration/locators/twitter-page.locator";

export class TwitterPage extends BasePage {

    clickLogin(): TwitterPage {
        this.clickByLocator(TWITTER_LOCATOR.LOGIN_BUTTON_REDIRECT)
        return this
    }

    enterEmail(email: string): TwitterPage {
        this.sendKeyByLocator(TWITTER_LOCATOR.EMAIL_FIELD, email)
        return this
    }

    enterPassword(password: string): TwitterPage {
        this.sendKeyByLocator(TWITTER_LOCATOR.PASSWORD_FIELD, password)
        return this
    }

    clickNextButton(): TwitterPage {
        this.clickByLocator(TWITTER_LOCATOR.NEXT_BUTTON)
        return this
    }

    clickSignInButton(): TwitterPage {
        this.clickByLocator(TWITTER_LOCATOR.LOGIN_BUTTON_SIGN_IN)
        return this
    }

    loginTwitter(email: string, password: string): void {
        this.enterEmail(email)
            .clickNextButton()
            .enterPassword(password)
            .clickSignInButton()
    }
}