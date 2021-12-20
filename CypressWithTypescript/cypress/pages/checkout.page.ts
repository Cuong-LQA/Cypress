import {BasePage} from "./base.page";
import {CONDITION, INVOKE_FUNCTION} from "../integration/constant/value";
import {CHECKOUT_PAGE_LOCATOR} from "../integration/locators/checkout-page.locator";
import {Product} from "../integration/models/product";

export class CheckOutPage extends BasePage {

    deleteFirstProduct(): CheckOutPage {
        cy.window().then(w => w["beforeReload"] = true)
        this.clickByLocator(`(${CHECKOUT_PAGE_LOCATOR.LIST_DELETE_BUTTON})[1]`)
        this.isVisibleByLocator(CHECKOUT_PAGE_LOCATOR.AGREE_DELETE)
        this.clickByLocator(CHECKOUT_PAGE_LOCATOR.AGREE_DELETE)
        // cy.window().should('have.prop', 'beforeReload', true)
        cy.window().should(CONDITION.NOT_HAVE_PROP, 'beforeReload')
        return this
    }

    editQuantityByOrderPosition(orderPosition: number, quantity: number): CheckOutPage {
        cy.xpath(`(${CHECKOUT_PAGE_LOCATOR.LIST_QUANTITY_SELECTED})[1]`)
            .invoke(INVOKE_FUNCTION.REMOVE_ATTRIBUTE, 'selected')
            .should(CONDITION.NOT_HAVE_ATTRIBUTE, 'selected')
        cy.xpath(CHECKOUT_PAGE_LOCATOR.setSelectedUnitQuantity(orderPosition, quantity)).then($el => {
            $el.attr('selected', 'selected')
        }).should(CONDITION.HAVE_ATTRIBUTE, 'selected')
        cy.xpath(CHECKOUT_PAGE_LOCATOR.clickSelectQuantity(orderPosition)).select(quantity.toString())
        return this
    }

    verifyExpenseOfProducts(): CheckOutPage {
        //get list price
        cy.xpath(CHECKOUT_PAGE_LOCATOR.LIST_UNIT_PRICE).then(($el) => {
            const listPriceStr = Cypress.$.makeArray($el).map(el => el.innerText)
            const listPriceInt = this.convertPriceStringToNumber(listPriceStr)
            //get quantity
            cy.xpath(CHECKOUT_PAGE_LOCATOR.LIST_QUANTITY_SELECTED).then($el => {
                const listUnitStr = Cypress.$.makeArray($el).map(el => el.innerText)
                const listUnitInt = this.convertPriceStringToNumber(listUnitStr)
                //get total and check
                cy.xpath(CHECKOUT_PAGE_LOCATOR.LIST_TOTAL_OF_ONE).then($el => {
                    const listTotalStr = Cypress.$.makeArray($el).map(el => el.innerText)
                    const listTotalInt = this.convertPriceStringToNumber(listTotalStr)
                    cy.log(`price unit: ${listPriceInt}, quantity: ${listUnitInt}, Total: ${listTotalInt}`)
                    for (let i = 0; i < listTotalInt.length; i++) {
                        expect(listTotalInt[i]).eq(listUnitInt[i] * listPriceInt[i])
                    }
                    cy.xpath(CHECKOUT_PAGE_LOCATOR.TOTAL_EXPENSE).then($el => {
                        const totalExpenseStr = $el.text().trim()
                        const totalExpenseInt = this.convertPriceStringToNumber([totalExpenseStr])[0]
                        const totalUnitCost = listTotalInt.reduce((total, curr) => total += curr, 0)
                        expect(totalExpenseInt).eq(totalUnitCost)
                    })
                })
            })
        })
        return this
    }

    async verifyName(listProd: Product[]): Promise<void> {
        const listNameAndCode = await this.getTextDataByLocator(CHECKOUT_PAGE_LOCATOR.LIST_PRODUCT_NAME)
        const listPriceWithCurrency = await  this.getTextDataByLocator(CHECKOUT_PAGE_LOCATOR.LIST_UNIT_PRICE)
        const listName = listNameAndCode.map(el => el.toString().split("\n")[0])
        const listPrice = listPriceWithCurrency.map(el => el.toString().replace(/[^0-9]/g, ""))
        console.log(listName)
        console.log(listPrice)
        listProd.forEach(el => {
            const curName = listName.find(name => name === el.name)
            const curPrice = listPrice[listName.indexOf(curName)]
            if (curName) {
                expect(el.name).eq(curName)
                expect(el.discountPrice).eq(curPrice)
            }
        })
    }

    convertPriceStringToNumber(arrPrice: string[]) {
        return arrPrice.map(el => parseInt(el.replace(/[^0-9]/, '').trim()))
    }
}