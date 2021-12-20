export const PRODUCT_PAGE_LOCATOR = {
    PRODUCT_TITLE: '//h1[@class="product__title"]',
    PRODUCT_TITLE_JQUERY: '$(".product__title"])',
    PRODUCT_TITLE_PREVIEW_CART: '//ul[@class="header-cart"]//div[@class="minicart__item__name"]//a',
    FIRST_PRODUCT_ROW_PREVIEW_CART: '(//ul[@class="header-cart"]//div[@class="minicart__item"])[1]',
    NO_PRODUCT_FOUND_ELEMENT: '//p[@class="well"]',
    NO_PRODUCT_FOUND_TEXT: '//p[text()="Không tìm thấy sản phẩm phù hợp yêu cầu."]',
    ADD_TO_CART: '//button[@id="add-to-cart"]',
    VIEW_CARD_AFTER_ADD_PRODUCT: '//div[@class="col-md-2 header-cart-wrapper "]//a[@class="btn btn--view-cart"]',
    LIST_LOCATION: '//div[@class="box box--narrow"]//li',
    PREVIEW_OPEN_CART: '//li[@class="nav-cart open"]',
    PRODUCT_CARD: '//div[@class="product product--details clearfix"]',
    SELECTOR_PRODUCT_TITLE: '.product__title',
    SELECTOR_DISCOUNT_PRICE: '.box-price-detail .price>.price__value',
    SELECTOR_ORIGIN_PRICE: '.box-price-detail .price.price--list-price .price__value',
    SELECTOR_DISCOUNT_PERCENT: '.box-price-detail .price>.price__discount',
    getProdNameInCard(prodName) {
        return `//ul[@class="header-cart"]//a[text()[contains(.,"${prodName}")]]`
    },
    getProdPriceInCart(prodName) {
        return `//ul[@class="header-cart"]//div[@class="minicart__item__info"]//a[text()[contains(.,"${prodName}")]]/../..//span[@class="price__value"]`
    }
}