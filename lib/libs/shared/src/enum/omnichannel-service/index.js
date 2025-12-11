"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationChannel = exports.PricingPolicyType = exports.SyncDirection = exports.OMNI_CHANNEL_TABLE_EXTERNAL_MAPPING_VARIANT_ENUM = exports.OMNI_CHANNEL_ACTION_ENUM = exports.OMNI_CHANNEL_MAPPING_STATUS_ENUM = exports.OMNI_CHANNEL_TARGET_ENUM = exports.OMNI_CHANNEL_PROVIDER_ENUM = void 0;
__exportStar(require("./omnichannel"), exports);
var OMNI_CHANNEL_PROVIDER_ENUM;
(function (OMNI_CHANNEL_PROVIDER_ENUM) {
    OMNI_CHANNEL_PROVIDER_ENUM["SHOPEE_SHOP"] = "shopee_shop";
    OMNI_CHANNEL_PROVIDER_ENUM["TIKTOK_SHOP"] = "tiktok_shop";
    OMNI_CHANNEL_PROVIDER_ENUM["AMAZON"] = "amazon";
    OMNI_CHANNEL_PROVIDER_ENUM["LAZADA"] = "lazada";
})(OMNI_CHANNEL_PROVIDER_ENUM || (exports.OMNI_CHANNEL_PROVIDER_ENUM = OMNI_CHANNEL_PROVIDER_ENUM = {}));
var OMNI_CHANNEL_TARGET_ENUM;
(function (OMNI_CHANNEL_TARGET_ENUM) {
    OMNI_CHANNEL_TARGET_ENUM["ORDER"] = "order";
    OMNI_CHANNEL_TARGET_ENUM["PRODUCT"] = "product";
    OMNI_CHANNEL_TARGET_ENUM["FULFILLMENT_ORDER"] = "fulfillment_order";
})(OMNI_CHANNEL_TARGET_ENUM || (exports.OMNI_CHANNEL_TARGET_ENUM = OMNI_CHANNEL_TARGET_ENUM = {}));
var OMNI_CHANNEL_MAPPING_STATUS_ENUM;
(function (OMNI_CHANNEL_MAPPING_STATUS_ENUM) {
    OMNI_CHANNEL_MAPPING_STATUS_ENUM["DRAF"] = "draf";
    OMNI_CHANNEL_MAPPING_STATUS_ENUM["PENDING"] = "pending";
    OMNI_CHANNEL_MAPPING_STATUS_ENUM["SUCCESS"] = "success";
    OMNI_CHANNEL_MAPPING_STATUS_ENUM["FAILED"] = "failed";
    OMNI_CHANNEL_MAPPING_STATUS_ENUM["UNLIST"] = "unlist";
    OMNI_CHANNEL_MAPPING_STATUS_ENUM["DELETED"] = "deleted";
})(OMNI_CHANNEL_MAPPING_STATUS_ENUM || (exports.OMNI_CHANNEL_MAPPING_STATUS_ENUM = OMNI_CHANNEL_MAPPING_STATUS_ENUM = {}));
var OMNI_CHANNEL_ACTION_ENUM;
(function (OMNI_CHANNEL_ACTION_ENUM) {
    OMNI_CHANNEL_ACTION_ENUM["CREATE"] = "create";
    OMNI_CHANNEL_ACTION_ENUM["UPDATE"] = "update";
    OMNI_CHANNEL_ACTION_ENUM["DELETE"] = "delete";
    OMNI_CHANNEL_ACTION_ENUM["GET"] = "get";
    OMNI_CHANNEL_ACTION_ENUM["CREATE_FROM_PROVIDER"] = "create-from-provider";
    OMNI_CHANNEL_ACTION_ENUM["UPDATE_FROM_PROVIDER"] = "update-from-provider";
})(OMNI_CHANNEL_ACTION_ENUM || (exports.OMNI_CHANNEL_ACTION_ENUM = OMNI_CHANNEL_ACTION_ENUM = {}));
var OMNI_CHANNEL_TABLE_EXTERNAL_MAPPING_VARIANT_ENUM;
(function (OMNI_CHANNEL_TABLE_EXTERNAL_MAPPING_VARIANT_ENUM) {
    OMNI_CHANNEL_TABLE_EXTERNAL_MAPPING_VARIANT_ENUM["MAIN"] = "main";
    OMNI_CHANNEL_TABLE_EXTERNAL_MAPPING_VARIANT_ENUM["SUB"] = "sub";
})(OMNI_CHANNEL_TABLE_EXTERNAL_MAPPING_VARIANT_ENUM || (exports.OMNI_CHANNEL_TABLE_EXTERNAL_MAPPING_VARIANT_ENUM = OMNI_CHANNEL_TABLE_EXTERNAL_MAPPING_VARIANT_ENUM = {}));
var SyncDirection;
(function (SyncDirection) {
    SyncDirection["TO_PROVIDER"] = "to_provider";
    SyncDirection["FROM_PROVIDER"] = "from_provider";
    SyncDirection["BIDIRECTIONAL"] = "bidirectional";
})(SyncDirection || (exports.SyncDirection = SyncDirection = {}));
var PricingPolicyType;
(function (PricingPolicyType) {
    PricingPolicyType["FIXED"] = "fixed";
    PricingPolicyType["PERCENTAGE"] = "percentage";
    PricingPolicyType["CUSTOM"] = "custom";
})(PricingPolicyType || (exports.PricingPolicyType = PricingPolicyType = {}));
var NotificationChannel;
(function (NotificationChannel) {
    NotificationChannel["EMAIL"] = "email";
    NotificationChannel["SMS"] = "sms";
    NotificationChannel["WEBHOOK"] = "webhook";
    NotificationChannel["IN_APP"] = "in_app";
})(NotificationChannel || (exports.NotificationChannel = NotificationChannel = {}));
//# sourceMappingURL=index.js.map