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
export * from './hr';
export * from './shop-service';
export * from './admin-service';
export * from './cms';
export * from './seed-data.enum';
export * from './comment-service';
export * from './omnichannel-service';
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
    RETAILS = "retails"
}
