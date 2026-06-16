export * from './package.state';
export * from './receipt';
export * from './promotion';
export * from './invoice';
export * from './system-pricebook';
export * from './resource-addon';
export declare enum E_INVOICE_PROVIDER_ENUM {
    MOBI_INVOICE = "mobi",
    VIETTEL_INVOICE = "viettel",
    MISA_INVOICE = "misa",
    VNPAY_INVOICE = "vnpay",
    FPT_INVOICE = "fpt"
}
export declare enum CREATE_SHOP_FROM_SOURCE_ENUM {
    SIPOS = "sipos.vn",
    WEBINO = "webino.vn"
}
export declare enum APPLICATION_MAIN_SALES_STATUS_ENUM {
    ACTIVE_HIDDEN = "active_hidden",
    ACTIVE_SELLING = "active_selling",
    MAINTAINING = "maintaining",
    INACTIVE = "inactive"
}
export declare enum APPLICATION_PRICING_TYPE_ENUM {
    FREE = "free",
    LIFETIME = "lifetime",
    SUBSCRIPTION = "subscription"
}
