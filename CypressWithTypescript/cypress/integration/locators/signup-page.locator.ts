export const SIGNUP_PAGE_LOCATOR = {
    EMAIL_FIELD: '//input[@id="email"]',
    PASSWORD_FIELD: '//input[@placeholder="Nhập mật khẩu"]',
    RE_ENTER_PASSWORD_FIELD: '//input[@id="password2"]',
    DATE_OF_BIRTH: '//input[@id="birthday"]',
    YEAR: '//div[@class="calendar left single"]//select[@class="yearselect"]',
    MONTH: '//div[@class="calendar left single"]//select[@class="monthselect"]',
    DATE: '//div[@class="calendar left single"]//td[not(contains(@class,"off available")) and .="date_xyz"]',
    GENDER: '//input[@id="gender_xyz"]',
    SIGN_UP_BUTTON: '//div[@class="form-group form-group-lg"]//button',
    //button[text()[contains(.,"ĐĂNG KÝ")]]
    WRONG_FORMAT: '//div[@class="form-group form-group-lg has-feedback fv-has-tooltip has-error"]',
    CITY_SELECTION: '//select[@name="location"]',
    HA_NOI_PATH: '//option[@value="440"]',
    HO_CHI_MINH_PATH: '//option[@value="437"]',
    OTHER_CITY_PATH: '//option[@value="999999"]',
    AGREE_LOCATION_BUTTON: '//*[text()[contains(.,"ĐỒNG Ý")]]',
    CHANGE_SCREEN: '//div[@id="changeAddress"]',
    SUCCESS_ALERT: '//div[@class="alert alert-success"]'
}

export const LOCATION = {
    HA_NOI: 'Hà Nội',
    HO_CHI_MINH: "Thành phố Hồ Chí Minh",
    OTHER_CITY: 'Tỉnh Thành Khác',
}

export const GENDER_ID = {
    MALE: 'gender_m',
    FEMALE: 'gender_f',
    NO_INFO: 'gender_o'
}

export const MONTH = {
    1: 'Th01',
    2: 'Th02',
    3: 'Th03',
    4: 'Th04',
    5: 'Th05',
    6: 'Th06',
    7: 'Th07',
    8: 'Th08',
    9: 'Th09',
    10: 'Th010',
    11: 'Th011',
    12: 'Th012',
}