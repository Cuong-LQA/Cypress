export const CHECKOUT_PAGE_LOCATOR = {
    LIST_UNIT_PRICE: '//tbody//td[@class="unit"]',
    LIST_QUANTITY_SELECTED: '//tbody//select[@class="quantity__modifier quantity-modifier quantity-modifier-select "]//option[@selected="selected"]',
    LIST_TOTAL_OF_ONE: '//tbody//td[@class="total"]',
    ALL_INFO_ROW: '//tbody//tr[not(@class="sep-row")]',
    LIST_QUANTITY: '//select[@class="quantity__modifier quantity-modifier quantity-modifier-select "]',
    TOTAL_EXPENSE: '//span[@id="order-total"]',
    LIST_PRODUCT_NAME: '//div[@class="box__body"]//tbody//td[@class="name"]',
    LIST_DELETE_BUTTON: '//td[@class="action"]/a',
    AGREE_DELETE: '//div[@class="modal-content"]//button[text()="Đồng ý"]',
    CONFIRM_MODAL: '//div[@id="confirmModal"]',
    setSelectedUnitQuantity(position, quantity) {
        return `((${this.LIST_QUANTITY})[${position}]//option[@value="${quantity}"])[${position}]`
    },
    clickSelectQuantity(position) {
        return `(${this.LIST_QUANTITY})[${position}]`
    }
}