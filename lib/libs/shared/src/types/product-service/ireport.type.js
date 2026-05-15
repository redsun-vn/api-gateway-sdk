"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReportProduct = exports.ReportMetric = exports.ReportGroupBy = exports.ReportPeriod = void 0;
var ReportPeriod;
(function (ReportPeriod) {
    ReportPeriod["DAY"] = "day";
    ReportPeriod["WEEK"] = "week";
    ReportPeriod["MONTH"] = "month";
    ReportPeriod["QUARTER"] = "quarter";
    ReportPeriod["YEAR"] = "year";
    ReportPeriod["CUSTOM"] = "custom";
})(ReportPeriod || (exports.ReportPeriod = ReportPeriod = {}));
var ReportGroupBy;
(function (ReportGroupBy) {
    ReportGroupBy["PRODUCT"] = "product";
    ReportGroupBy["CATEGORY"] = "category";
    ReportGroupBy["BRAND"] = "brand";
    ReportGroupBy["TYPE"] = "type";
})(ReportGroupBy || (exports.ReportGroupBy = ReportGroupBy = {}));
var ReportMetric;
(function (ReportMetric) {
    ReportMetric["REVENUE"] = "revenue";
    ReportMetric["PROFIT"] = "profit";
    ReportMetric["QUANTITY"] = "quantity";
})(ReportMetric || (exports.ReportMetric = ReportMetric = {}));
var IReportProduct;
(function (IReportProduct) {
    let ProductLifecycleStage;
    (function (ProductLifecycleStage) {
        ProductLifecycleStage["GROWTH"] = "growth";
        ProductLifecycleStage["MATURITY"] = "maturity";
        ProductLifecycleStage["DECLINE"] = "decline";
        ProductLifecycleStage["REPLACEMENT"] = "replacement";
    })(ProductLifecycleStage = IReportProduct.ProductLifecycleStage || (IReportProduct.ProductLifecycleStage = {}));
    let ProfitabilityLevel;
    (function (ProfitabilityLevel) {
        ProfitabilityLevel["HIGH"] = "high";
        ProfitabilityLevel["MEDIUM"] = "medium";
        ProfitabilityLevel["LOW"] = "low";
    })(ProfitabilityLevel = IReportProduct.ProfitabilityLevel || (IReportProduct.ProfitabilityLevel = {}));
})(IReportProduct || (exports.IReportProduct = IReportProduct = {}));
//# sourceMappingURL=ireport.type.js.map