import {BasePage} from "./base.page";
import {HOME_PAGE_LOCATOR} from "../integration/locators/home-page.locator";
import {CONDITION} from "../integration/constant/value";
import {CATEGORY_PAGE_LOCATOR} from "../integration/locators/category-page.locator";
import {PRODUCT_PAGE_LOCATOR} from "../integration/locators/product-page.locator";

export class CategoryPage extends BasePage {

    clickSortGoodDeal(): CategoryPage {
        this.clickByLocator(HOME_PAGE_LOCATOR.SORT_GOOD_DEAL)
        return this
    }

    verifyFilterBuffet(locationOrder: number): void {
        const filterLocator = `(${HOME_PAGE_LOCATOR.LIST_LOCATION_FILTER})[${locationOrder}]`
        cy.xpath(filterLocator).then($el => {
            const locationAndNumber = $el.text().trim()
            const arrLocationAndNumber = locationAndNumber.split(" ")
            const numberProduct = parseInt(arrLocationAndNumber[arrLocationAndNumber.length - 1])
            const location = locationAndNumber.replace(` ${numberProduct}`, "").toLocaleLowerCase()
            this.clickByLocator(filterLocator)
            cy.xpath(HOME_PAGE_LOCATOR.LOADING_FILTER).should(CONDITION.NOT_EXITS)
            cy.xpath(HOME_PAGE_LOCATOR.FILTER_IMAGE).its('length').then($el => {
                const numberProdFilter = $el.valueOf()
                expect(numberProdFilter).eq(numberProduct)
                this.clickFirstElement(HOME_PAGE_LOCATOR.LIST_PRODUCT_FILTER_BUFFET_LOCATION)
                cy.xpath(PRODUCT_PAGE_LOCATOR.LIST_LOCATION).then($el => {
                    const textLocation = $el.text().trim().toLocaleLowerCase()
                    expect(textLocation).contains(location)
                })
            })
        })
    }

    verifySortDealDesc(): void {
        cy.xpath(CATEGORY_PAGE_LOCATOR.LOADING_PAGE).should(CONDITION.NOT_EXITS)
        let preDiscount = 0
        let isSorted = true
        cy.xpath(HOME_PAGE_LOCATOR.DISCOUNT_VALUE).each(($el, index) => {
            const discountText = $el.text().trim().replace(/[^0-9]/g,"")
            const curDiscount = parseInt(discountText)
            if (index === 0) {
                preDiscount = curDiscount
            }
            if (preDiscount < curDiscount) {
                isSorted = false
            }
            preDiscount = curDiscount
            expect(isSorted).to.be.true
        })
    }
}