"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReport = void 0;
var IReport;
(function (IReport) {
    let StockStatus;
    (function (StockStatus) {
        StockStatus["SUFFICIENT"] = "sufficient";
        StockStatus["LOW"] = "low";
        StockStatus["RUNNING_OUT"] = "running_out";
        StockStatus["OUT_OF_STOCK"] = "out_of_stock";
    })(StockStatus = IReport.StockStatus || (IReport.StockStatus = {}));
    let PriorityLevel;
    (function (PriorityLevel) {
        PriorityLevel["HIGH"] = "high";
        PriorityLevel["MEDIUM"] = "medium";
        PriorityLevel["LOW"] = "low";
    })(PriorityLevel = IReport.PriorityLevel || (IReport.PriorityLevel = {}));
})(IReport || (exports.IReport = IReport = {}));
//# sourceMappingURL=ireport-inventory.type.js.map