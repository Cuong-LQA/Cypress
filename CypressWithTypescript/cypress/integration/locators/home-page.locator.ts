export const HOME_PAGE_LOCATOR  = {
    SIGN_UP: '//ul[@id="user_info_header"]//a[text()="Đăng ký"]',
    SIGN_IN: '//li[@id="login-popup-header-form"]',
    SEARCH_BOX: '//input[@id="search_all"]',
    SEARCH_TEXT: '//pre[./text()="search_text_xyz"]',
    ALL_SUGGESTION_LIST: '//div[@class="tt-dataset tt-dataset-search_minimize"]//div',
    RESULT_CLEAR: '//div[@class="tt-search-in-category  tt-suggestion tt-selectable"]',
    FIRST_SUGGESTION: '(//div[@class="tt-dataset tt-dataset-search_minimize"]//div//strong/a[text()[contains(.,"search_text_xyz")]])[1]',
    SEARCH_BUTTON: '//button[@class="btn btn-danger"]',
    SEARCH_BOX_PLACE_HOLDER: '//div[@id="main-search"]//input[@placeholder="Tìm kiếm sản phẩm / khuyến mãi"]',
    VISIBLE_PRODUCT: ' (//div[@class="col-md-3 product-wrapper  _tracking"]//div[@class="product__image"])',
    LIST_TITLE_PRODUCT_SEARCH: '//h3[@class="product__title"]',
    PREVIEW_SHOPPING_CART: '//div[@class="col-md-2 header-cart-wrapper "]//li[@class="nav-cart"]',
    VIEW_SHOPPING_CART: '//ul[@class="header-cart"]//a[@class="btn btn--view-cart"]',
    FOOD_SECTION: '//nav[@id="main-nav"]//li[@class="branding__item branding branding--an-uong multicolumns"]/a',
    BUFFET_IN_FOOD_SECTION: '//nav[@id="main-nav"]//li[@class="branding__item branding branding--an-uong multicolumns"]//a[text()="Buffet"]',
    LIST_LOCATION_FILTER: '//div[@class="filter__body"]//label[@class="filter__button "]',
    LIST_PRODUCT_FILTER_BUFFET_LOCATION: '//div[@class="product product-kind-1"]//div[@class="product__image"]/a',
    RESULT_TEXT_FILTER: '//div[@class="filter--inline current-filter"]//div[@class="filter__title"]',
    SORT_GOOD_DEAL: ' //div[@class="filter__body"]//a[@data-field="discountValue"]',
    SORT_BEST_SELLING: ' //div[@class="filter__body"]//a[@data-field="sell"]',
    DISCOUNT_VALUE: '//span[@class="price__discount"]',
    TWITTER_LINK: '//a[@class="social-item social-item-twitter"]',
    LOADING_FILTER: '//div[@class="row loading"]',
    FILTER_IMAGE: '//div[@class="product__image"]',
    getSpecificSearchResultsTitle(searchValue) {
        return `//a[text()="${searchValue}"]`
    },
    getProductSuggestionList(searchValue) {
        return `//div[@class="tt-dataset tt-dataset-search_minimize"]//div//strong/a[text()[contains(.,"${searchValue}")]]`
    },
}