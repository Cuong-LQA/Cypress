import {BasePage} from "./base.page";
import {HOME_PAGE_LOCATOR} from "../integration/locators/home-page.locator";
import {LOCATION, SIGNUP_PAGE_LOCATOR} from "../integration/locators/signup-page.locator";
import {REPLACE_PATTERN, TEXT_VALIDATION_VALUE} from "../integration/constant/value";
import {PRODUCT_PAGE_LOCATOR} from "../integration/locators/product-page.locator";
import SignupPage from "./signup.page";
import {ProductPage} from "./product.page";
import {Product} from "../integration/models/product";
import {CheckOutPage} from "./checkout.page";
import {TwitterPage} from "./twitter.page";
import {CategoryPage} from "./category.page";

export class HomePage extends BasePage {

    selectLocation(location: string): HomePage {
        this.selectByLocator(SIGNUP_PAGE_LOCATOR.CITY_SELECTION, location)
        this.clickByLocator(SIGNUP_PAGE_LOCATOR.AGREE_LOCATION_BUTTON)
        // this.clickByLocator(CHANGE_SCREEN_LOCATOR)
        return this;
    }

    clickSignUp(): SignupPage {
        this.clickByLocator(HOME_PAGE_LOCATOR.SIGN_UP)
        // this.clickByLocator(CHANGE_SCREEN_LOCATOR)
        return new SignupPage()
    }

    inputSearchValue(searchValue: string): HomePage {
        this.sendKeyByLocator(HOME_PAGE_LOCATOR.SEARCH_BOX, searchValue)
        return this
    }

    clearSearchValue(): HomePage {
        this.deleteTextByLocator(HOME_PAGE_LOCATOR.SEARCH_BOX)
        return this
    }

    clickFirstSuggestion(searchValue: string): ProductPage {
        const locator = HOME_PAGE_LOCATOR.FIRST_SUGGESTION
            .replace(REPLACE_PATTERN.SEARCH_STRING, this.transformStringToCapitalize(searchValue))
        this.clickByLocator(locator)
        // this.clickByLocator(CHANGE_SCREEN_LOCATOR)
        return new ProductPage()
    }

    clickSearchButton(): ProductPage {
        this.clickByLocator(HOME_PAGE_LOCATOR.SEARCH_BUTTON)
        // this.clickByLocator(CHANGE_SCREEN_LOCATOR)
        return new ProductPage()
    }

    clickProductByOrder(order: number): ProductPage {
        const locator = `(${HOME_PAGE_LOCATOR.VISIBLE_PRODUCT})[${order}]`
        this.clickByLocator(locator)
        // this.clickByLocator(CHANGE_SCREEN_LOCATOR)
        return new ProductPage()
    }

    clickPreviewCart(): HomePage {
        cy.xpath(HOME_PAGE_LOCATOR.PREVIEW_SHOPPING_CART).should('exist')
        this.clickByLocator(HOME_PAGE_LOCATOR.PREVIEW_SHOPPING_CART)
        return this
    }

    clickViewCart(): CheckOutPage {
        this.clickByLocator(HOME_PAGE_LOCATOR.VIEW_SHOPPING_CART)
        return new CheckOutPage()
    }

    clickBuffetInFood(): CategoryPage {
        this.hoverElementByLocator(HOME_PAGE_LOCATOR.FOOD_SECTION)
        this.clickByLocator(HOME_PAGE_LOCATOR.BUFFET_IN_FOOD_SECTION)
        // this.clickByLocator(CHANGE_SCREEN_LOCATOR)
        return new CategoryPage()
    }

    clickTwitterIcon(): TwitterPage {
        cy.xpath(HOME_PAGE_LOCATOR.TWITTER_LINK)
            .invoke('removeAttr', 'target')
            .click()
        return new TwitterPage()
    }

    async addToCard(numberOfProd: number): Promise<Product[]> {
        const listProds: Product[] = []
        this.selectLocation(LOCATION.HA_NOI)
        for (let i = 0; i < numberOfProd; i++) {
            let productPage = this.clickProductByOrder(i + 1)
                .clickButtonAddToCard()
            let prod = await productPage.getProductInfo()
            listProds.push(prod)
            cy.log(JSON.stringify(prod))
            cy.log(listProds.toString())
            console.log(prod)
            console.log(listProds)
            productPage.returnHomePage()
        }
        return listProds
    }

    verifySearchAppearanceAfterType(searchValue: string): void {
        this.verifyElementNotExitsByString(TEXT_VALIDATION_VALUE.SEARCH_PLACE_HOLDER)
        this.verifyElementExitsByString(searchValue)
    }

    verifyListResultSuggestions(searchValue: string): void {
        const searchValueCapitalize = this.transformStringToCapitalize(searchValue)
        const typeInLocator = HOME_PAGE_LOCATOR.getProductSuggestionList(searchValue)
        const typeInCapitalizeLocator = HOME_PAGE_LOCATOR.getProductSuggestionList(searchValueCapitalize)
        this.isVisibleByLocatorContainText(typeInLocator, searchValue)
        this.isVisibleByLocatorContainText(typeInCapitalizeLocator, searchValueCapitalize)
        //check to have at least 1 suggestion in a category in dropdown
        this.isLengthGreater(typeInLocator, 1)
    }

    verifySignUpSuccess(): void {
        this.isVisibleByLocator(SIGNUP_PAGE_LOCATOR.SUCCESS_ALERT)
        this.isVisibleByString(TEXT_VALIDATION_VALUE.SUCCESS_SIGN_UP)
    }

    verifyAfterClearInput(): void {
        this.isLocatorValueEqualTo(HOME_PAGE_LOCATOR.SEARCH_BOX, TEXT_VALIDATION_VALUE.EMPTY_STRING)
        this.isLengthGreater(HOME_PAGE_LOCATOR.SEARCH_BOX_PLACE_HOLDER, 0)
    }

    verifyTitleOfFirstResult(searchValue: string): void {
        const locator = HOME_PAGE_LOCATOR.FIRST_SUGGESTION
            .replace(REPLACE_PATTERN.SEARCH_STRING, this.transformStringToCapitalize(searchValue))
        cy.xpath(locator).then(($el) => {
            const productName = $el.text()
            this.clickFirstSuggestion(searchValue)
            this.isVisibleByLocatorContainText(PRODUCT_PAGE_LOCATOR.PRODUCT_TITLE, productName)
        })
    }

    verifyListTitlesInSuggestion(searchValue: string): void {
        const suggestProductLocator = HOME_PAGE_LOCATOR.getProductSuggestionList(this.transformStringToCapitalize(searchValue))
        cy.xpath(suggestProductLocator).then(($el) => {
            const arrProductNameSuggestion = Cypress.$.makeArray($el).map((el) => el.innerText)
            const listProductTitlesLocator = HOME_PAGE_LOCATOR.LIST_TITLE_PRODUCT_SEARCH
            this.clickSearchButton()
            cy.xpath(listProductTitlesLocator, {timeout: 60000}).then(($el) => {
                const arrProductNameSearchResult = Cypress.$.makeArray($el).map((el) =>
                    el.innerText.replace('...', ''))
                let countResult = 0
                arrProductNameSuggestion.forEach(suggestion => {
                    arrProductNameSearchResult.forEach(result => {
                        if (suggestion.includes(result)) {
                            countResult++
                        }
                    })
                })
                expect(countResult).eq(arrProductNameSuggestion.length)
            })
        })
    }

    // hoverMouseFirstElement(searchValue) {
    //     const locator = HOME_PAGE_LOCATOR.FIRST_SUGGESTION
    //         .replace(REPLACE_PATTERN.SEARCH_STRING, this.transformStringToCapitalize(searchValue))
    //     this.hoverElementByLocator(locator)
    //     return this
    // }
}