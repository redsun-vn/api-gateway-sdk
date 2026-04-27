export * from './pos.session.state';
export * from './product.state';
export * from './order.state';
export * from './webhook.state';
export * from './fulfillment-order.state';
export * from './activity-log.state';
export * from './inventory.state';
export * from './reconciliation-service';
export * from './payment.state';
export * from './report.state';
export * from './financial-service';
export * from './vnpay-qrcode';
export * from './permissions';
export * from './reservation-note.enum';
export * from './table-realtime-status.enum';
export * from './hr';
export * from './shop-service';
export * from './admin-service';
export * from './cms';
export * from './seed-data.enum';
export * from './comment-service';
export * from './treatment';
export * from './omnichannel-service';
export * from './ai-content';
export * from './billing';
export * from './reservation';
export * from './treatment';
export declare enum RecurrencePeriod {
    HOURLY = "HOURLY",
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY"
}
export declare enum SubscriptionStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    EXPIRED = "expired",
    TRIAL = "trial"
}
export declare enum ADMIN_USER_ROLE {
    SYSTEM_ADMIN = "system",
    BOSS = "boss",
    CUSTOMER_SUPPORT = "customer_support",
    CUSTOMER_SUPPORT_USER = "customer_support_user",
    SALES_ADMIN = "sales",
    SALES_USER = "sales_user",
    USER = "user"
}
export declare enum CATEGORY_BUSINESS_TYPE_ENUMS {
    SALON = "salon",
    FNB = "fnb",
    HOTEL = "hotel",
    RETAILS = "retails",
    CLINIC = "clinic",
    WELLNESS = "wellness",
    ORG = "org",
    WEBBUILDER = "webbuilder"
}
export declare enum PartnerIdentityType {
    CMND = "cmnd",
    CCCD = "cccd",
    PASSPORT = "passport",
    OTHER = "other"
}
