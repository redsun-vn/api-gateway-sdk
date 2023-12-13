"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UomType = exports.Week = exports.PriceBookRuleReferentType = exports.PriceBookRuleStayOn = exports.PriceBookRuleType = exports.CollectionType = exports.ConditionType = exports.ProductType = exports.ProductStatus = exports.Status = void 0;
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status["INACTIVE"] = "inactive";
})(Status || (exports.Status = Status = {}));
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["ACTIVE"] = "active";
    ProductStatus["INACTIVE"] = "inactive";
    ProductStatus["OUT_OF_STOCK"] = "out_of_stock";
    ProductStatus["DELETED"] = "deleted";
})(ProductStatus || (exports.ProductStatus = ProductStatus = {}));
var ProductType;
(function (ProductType) {
    ProductType["NORMAL"] = "normal";
    ProductType["COMBO"] = "combo";
    ProductType["GIFT"] = "gift";
    ProductType["VIRTUAL"] = "virtual";
    ProductType["BUNDLED"] = "bundle";
})(ProductType || (exports.ProductType = ProductType = {}));
var ConditionType;
(function (ConditionType) {
    ConditionType["TAG"] = "tag";
    ConditionType["CATEGORY"] = "category";
    ConditionType["PRODUCT"] = "product";
    ConditionType["UOM"] = "uom";
})(ConditionType || (exports.ConditionType = ConditionType = {}));
var CollectionType;
(function (CollectionType) {
    CollectionType["MANUAL"] = "manual";
    CollectionType["AUTO"] = "auto";
})(CollectionType || (exports.CollectionType = CollectionType = {}));
var PriceBookRuleType;
(function (PriceBookRuleType) {
    PriceBookRuleType["FIXED"] = "fixed";
    PriceBookRuleType["DISCOUNT"] = "discount";
    PriceBookRuleType["RECIPE"] = "recipe";
})(PriceBookRuleType || (exports.PriceBookRuleType = PriceBookRuleType = {}));
var PriceBookRuleStayOn;
(function (PriceBookRuleStayOn) {
    PriceBookRuleStayOn["ORTHER"] = "orther";
    PriceBookRuleStayOn["ORIGIN_PRICE"] = "origin_price";
    PriceBookRuleStayOn["SALE_PRICE"] = "sale_price";
})(PriceBookRuleStayOn || (exports.PriceBookRuleStayOn = PriceBookRuleStayOn = {}));
var PriceBookRuleReferentType;
(function (PriceBookRuleReferentType) {
    PriceBookRuleReferentType["ALL"] = "all";
    PriceBookRuleReferentType["CATEGORY"] = "category";
    PriceBookRuleReferentType["PRODUCT"] = "product";
    PriceBookRuleReferentType["VARIANT"] = "variant";
})(PriceBookRuleReferentType || (exports.PriceBookRuleReferentType = PriceBookRuleReferentType = {}));
var Week;
(function (Week) {
    Week["SUNDAY"] = "Sunday";
    Week["MONDAY"] = "Monday";
    Week["TUESDAY"] = "Tuesday";
    Week["WEDNESDAY"] = "Wednesday";
    Week["THURSDAY"] = "Thursday";
    Week["FRIDAY"] = "Friday";
    Week["SATURDAY"] = "Saturday";
})(Week || (exports.Week = Week = {}));
var UomType;
(function (UomType) {
    UomType["BIGGER"] = "bigger";
    UomType["REFERENT"] = "referent";
    UomType["SMALLER"] = "smaller";
})(UomType || (exports.UomType = UomType = {}));
//# sourceMappingURL=product.state.js.map