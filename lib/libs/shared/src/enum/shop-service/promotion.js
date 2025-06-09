"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionRewardUnit = exports.PromotionRewardType = exports.PromotionTargetType = void 0;
var PromotionTargetType;
(function (PromotionTargetType) {
    PromotionTargetType["BUSINESS_TYPE"] = "BUSINESS_TYPE";
    PromotionTargetType["PACKAGE"] = "PACKAGE";
    PromotionTargetType["APPLICATION"] = "APPLICATION";
    PromotionTargetType["CUSTOMER"] = "CUSTOMER";
    PromotionTargetType["SHOP"] = "SHOP";
})(PromotionTargetType || (exports.PromotionTargetType = PromotionTargetType = {}));
var PromotionRewardType;
(function (PromotionRewardType) {
    PromotionRewardType["DISCOUNT"] = "DISCOUNT";
    PromotionRewardType["EXTEND_TIME"] = "EXTEND_TIME";
    PromotionRewardType["ADD_FEATURE"] = "ADD_FEATURE";
    PromotionRewardType["ADD_EMPLOYEE"] = "ADD_EMPLOYEE";
    PromotionRewardType["ADD_BRANCH"] = "ADD_BRANCH";
})(PromotionRewardType || (exports.PromotionRewardType = PromotionRewardType = {}));
var PromotionRewardUnit;
(function (PromotionRewardUnit) {
    PromotionRewardUnit["PERCENT"] = "PERCENT";
    PromotionRewardUnit["FIXED_AMOUNT"] = "FIXED_AMOUNT";
    PromotionRewardUnit["DAYS"] = "DAYS";
    PromotionRewardUnit["FEATURE"] = "FEATURE";
    PromotionRewardUnit["NUMBER"] = "NUMBER";
})(PromotionRewardUnit || (exports.PromotionRewardUnit = PromotionRewardUnit = {}));
//# sourceMappingURL=promotion.js.map