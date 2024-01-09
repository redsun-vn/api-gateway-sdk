"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM = exports.LOYALTY_REWARD_DISCOUNT_MODE_ENUM = exports.LOYALTY_REWARD_TYPE_ENUM = void 0;
var LOYALTY_REWARD_TYPE_ENUM;
(function (LOYALTY_REWARD_TYPE_ENUM) {
    LOYALTY_REWARD_TYPE_ENUM["PRODUCT"] = "free_product";
    LOYALTY_REWARD_TYPE_ENUM["DISCOUNT"] = "discount";
    LOYALTY_REWARD_TYPE_ENUM["SHIPPING"] = "free_shipping";
})(LOYALTY_REWARD_TYPE_ENUM || (exports.LOYALTY_REWARD_TYPE_ENUM = LOYALTY_REWARD_TYPE_ENUM = {}));
var LOYALTY_REWARD_DISCOUNT_MODE_ENUM;
(function (LOYALTY_REWARD_DISCOUNT_MODE_ENUM) {
    LOYALTY_REWARD_DISCOUNT_MODE_ENUM["PERCENT"] = "percent";
    LOYALTY_REWARD_DISCOUNT_MODE_ENUM["PER_POINT"] = "vnd_per_point";
    LOYALTY_REWARD_DISCOUNT_MODE_ENUM["PER_ORDER"] = "vnd_per_order";
})(LOYALTY_REWARD_DISCOUNT_MODE_ENUM || (exports.LOYALTY_REWARD_DISCOUNT_MODE_ENUM = LOYALTY_REWARD_DISCOUNT_MODE_ENUM = {}));
var LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM;
(function (LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM) {
    LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM["ORDER"] = "order";
    LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM["CHEAPEST"] = "cheapest_product";
    LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM["SPECIFIC"] = "specific_product";
})(LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM || (exports.LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM = LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM = {}));
//# sourceMappingURL=loyalty-reward.js.map