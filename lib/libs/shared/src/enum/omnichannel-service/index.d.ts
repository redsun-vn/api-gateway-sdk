export * from './omnichannel';
export declare enum OMNI_CHANNEL_PROVIDER_ENUM {
    SHOPEE_SHOP = "shopee_shop",
    TIKTOK_SHOP = "tiktok_shop",
    AMAZON = "amazon",
    LAZADA = "lazada"
}
export declare enum OMNI_CHANNEL_TARGET_ENUM {
    ORDER = "order",
    PRODUCT = "product",
    FULFILLMENT_ORDER = "fulfillment_order"
}
export declare enum OMNI_CHANNEL_MAPPING_STATUS_ENUM {
    DRAF = "draf",
    PENDING = "pending",
    SUCCESS = "success",
    FAILED = "failed",
    UNLIST = "unlist",
    DELETED = "deleted"
}
export declare enum OMNI_CHANNEL_ACTION_ENUM {
    CREATE = "create",
    UPDATE = "update",
    DELETE = "delete",
    GET = "get",
    CREATE_FROM_PROVIDER = "create-from-provider",
    UPDATE_FROM_PROVIDER = "update-from-provider"
}
export declare enum OMNI_CHANNEL_TABLE_EXTERNAL_MAPPING_VARIANT_ENUM {
    MAIN = "main",
    SUB = "sub"
}
export declare enum SyncDirection {
    TO_PROVIDER = "to_provider",
    FROM_PROVIDER = "from_provider",
    BIDIRECTIONAL = "bidirectional"
}
export declare enum PricingPolicyType {
    FIXED = "fixed",
    PERCENTAGE = "percentage",
    CUSTOM = "custom"
}
export declare enum NotificationChannel {
    EMAIL = "email",
    SMS = "sms",
    WEBHOOK = "webhook",
    IN_APP = "in_app"
}
