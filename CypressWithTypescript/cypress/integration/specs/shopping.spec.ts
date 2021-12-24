import {HomePage} from "../../pages/home.page";
import {BASE_URL} from "../constant/value";

describe('Testing shopping function', () => {
    const homePage = new HomePage()

    beforeEach(() => {
        cy.visit(BASE_URL)
    });

    it('Checking cart when buy 3 products - 8th', async () => {
        const listProd = await homePage.addToCard(3)
        await homePage.clickPreviewCart()
            .clickViewCart()
            .verifyExpenseOfProducts()
            .verifyName(listProd)
    });

    it.only('Checking edit shopping cart: change quantity, delete 1 - 9th', async () => {
        const listProd = await homePage.addToCard(2)
        await homePage.clickPreviewCart()
            .clickViewCart()
            .editQuantityByOrderPosition(1, 3)
            .deleteFirstProduct()
            .verifyExpenseOfProducts()
            .verifyName(listProd)
    })

    // it.only('checking get price data in homepage of fist element product', async () => {
    //     const data = await homePage.selectLocation(LOCATION.HA_NOI)
    //         .getTextData('(//div[@class="tab-pane active"]//div[@class="product__info"])[1]')
    //     cy.log(data)
    // })

    // it.only('checking get infor', async () => {
    //     cy.visit('https://www.hotdeal.vn/ha-noi/nha-hang-viet-nhat-han-thai/dedi-deli-buffet-nuong-lau-hai-san-25-mon-363581.html')
    //     cy.log(JSON.stringify(await new ProductPage().getProductInfo()))
    // })
})