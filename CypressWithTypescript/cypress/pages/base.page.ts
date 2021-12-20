// TODO: to use xpath dependency we need to add config to tsconfig.json in the "types" section

// @ts-ignore
import promisify from 'cypress-promise';
import {CONDITION} from "../integration/constant/value";

export class BasePage {
    selectByLocator(locator: string, value: string): void {
        cy.xpath(locator, {timeout: 60000}).select(value)
    }

    clickByLocator(locator: string): void {
        cy.xpath(locator, {timeout: 60000}).click({ multiple: true, force: true });
    }

    clickFirstElement(locator: string): void {
        cy.xpath(locator).first().click({ multiple: true, force: true });
    }

    sendKeyByLocator(locator: string, key: string): void {
        cy.xpath(locator, { timeout: 60000 }).clear({ force: true }).type(key, { force: true });
    }

    deleteTextByLocator(locator: string): void {
        cy.xpath(locator, { timeout: 60000 }).clear({ force: true })
    }

    isVisibleByLocatorContainText(locator: string, text: string): void {
        cy.xpath(locator, {timeout: 60000}).each(($el)=>{
            expect($el.text()).to.include(text)
        })
    }

    returnPreviousPage():void {
        cy.go('back')
    }

    transformStringToCapitalize(value: string): string {
        return value.split(" ").map(el => el = el[0].toUpperCase() + el.slice(1)).join(" ")
    }

    async getTextDataByLocator(locator: string):  Promise<string[]> {
        return await promisify(cy.xpath(locator).then($el => {
            return Cypress.$.makeArray($el).map(el => el.innerText)
        }))
    }

    isVisibleByString(value: string): void {
        expect(cy.contains(value, { timeout: 60000 }).should(CONDITION.VISIBLE));
    }

    isVisibleByLocator(locator: string): void {
        expect(cy.xpath(locator, { timeout: 60000 }).should(CONDITION.VISIBLE));
    }

    isLengthGreater(locator: string, number: number) {
        cy.xpath(locator).its('length').should('be.gt', number)
    }

    isLocatorValueEqualTo(locator: string, value: string) {
        cy.xpath(locator).should(CONDITION.HAVE_VALUE, value)
    }

    isDisableByLocator(locator: string): void {
        expect(cy.xpath(locator, { timeout: 60000 }).should(CONDITION.DISABLE));
    }

    createRandomEmail(): string {
        let r = Math.random().toString(36).substring(9);
        return "random" + "+" + r + "@qa.team"
    }

    verifyElementNotExitsByString(value: string): void {
        cy.contains(value, { timeout: 60000 }).should(CONDITION.NOT_EXITS)
    }

    verifyElementExitsByString(value: string): void {
        cy.contains(value, { timeout: 60000 }).scrollIntoView()
    }

    hoverElementByLocator(locator: string): void {
        cy.xpath(locator).trigger('mouseover')
    }
}