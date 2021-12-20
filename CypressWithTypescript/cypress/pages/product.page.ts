import {BasePage} from "./base.page";
import {PRODUCT_PAGE_LOCATOR} from "../integration/locators/product-page.locator";
// @ts-ignore
import promisify from "cypress-promise";
import {Product} from "../integration/models/product";

export class ProductPage extends BasePage {

    returnHomePage(): void {
        this.returnPreviousPage()
    }

    clickButtonAddToCard(): ProductPage {
        this.clickByLocator(PRODUCT_PAGE_LOCATOR.ADD_TO_CART)
        return this
    }

    async getProductInfo(): Promise<Product> {
        return await promisify(cy.xpath(PRODUCT_PAGE_LOCATOR.PRODUCT_CARD).then($el => {
            const prodName = $el.find(PRODUCT_PAGE_LOCATOR.SELECTOR_PRODUCT_TITLE).text().trim()
            const arrPrice = String($el.find(PRODUCT_PAGE_LOCATOR.SELECTOR_DISCOUNT_PRICE).text().trim()).split(" ")
            console.log(`arrPrice in getProductInfo ${arrPrice}`)
            const originPrice = arrPrice[0].trim().replace(/[^0-9]/g,"")
            const discountPrice = arrPrice[arrPrice.length - 1].trim().replace(/[^0-9]/g,"")
            const promotion = $el.find(PRODUCT_PAGE_LOCATOR.SELECTOR_DISCOUNT_PERCENT).text().trim().replace(/[^0-9]/g, "")
            return new Product(prodName, originPrice, discountPrice, promotion)
        }))
    }

    verifyWrongProductName(): ProductPage {
        this.isVisibleByLocator(PRODUCT_PAGE_LOCATOR.NO_PRODUCT_FOUND_ELEMENT)
        this.isVisibleByLocator(PRODUCT_PAGE_LOCATOR.NO_PRODUCT_FOUND_TEXT)
        return this
    }

    //change this step to get data to use later in checkout screen
    // verifyNameAndPriceInPreview() {
    //      cy.xpath(PRODUCT_PAGE_LOCATOR.PRODUCT_CARD).then($el => {
    //         const prodName = $el.find('.product__title').text().trim()
    //         const arrPrice = String($el.find('.box-price-detail .price>.price__value').text().trim()).split(" ")
    //         const prodPrice = arrPrice[arrPrice.length - 1].trim()
    //
    //         cy.xpath(PRODUCT_PAGE_LOCATOR.getProdNameInCard(prodName)).should('exist')
    //         cy.xpath(PRODUCT_PAGE_LOCATOR.getProdPriceInCart(prodName)).then($el => {
    //             expect($el.text().trim()).eq(prodPrice)
    //             return new Product(prodName, prodPrice, 0)
    //         })
    //     })
    //     return this
    // }

    // clickViewCardAfterAddProduct() {
    //     this.clickByLocator(PRODUCT_PAGE_LOCATOR.VIEW_CARD_AFTER_ADD_PRODUCT)
    //     return new CheckOutPage()
    // }

    // verifyProductTitle() {
    //     this.isVisibleByLocator(PRODUCT_PAGE_LOCATOR.PRODUCT_TITLE)
    // }
}