"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmTaskRelatedToType = exports.CrmTaskStatus = exports.CrmTaskPriority = void 0;
var CrmTaskPriority;
(function (CrmTaskPriority) {
    CrmTaskPriority["LOW"] = "low";
    CrmTaskPriority["MEDIUM"] = "medium";
    CrmTaskPriority["HIGH"] = "high";
})(CrmTaskPriority || (exports.CrmTaskPriority = CrmTaskPriority = {}));
var CrmTaskStatus;
(function (CrmTaskStatus) {
    CrmTaskStatus["OPEN"] = "open";
    CrmTaskStatus["IN_PROGRESS"] = "in_progress";
    CrmTaskStatus["COMPLETED"] = "completed";
    CrmTaskStatus["CANCELLED"] = "cancelled";
})(CrmTaskStatus || (exports.CrmTaskStatus = CrmTaskStatus = {}));
var CrmTaskRelatedToType;
(function (CrmTaskRelatedToType) {
    CrmTaskRelatedToType["LEAD"] = "lead";
    CrmTaskRelatedToType["OPPORTUNITY"] = "opportunity";
    CrmTaskRelatedToType["PARTNER"] = "partner";
    CrmTaskRelatedToType["SALE_ORDER"] = "sale_order";
})(CrmTaskRelatedToType || (exports.CrmTaskRelatedToType = CrmTaskRelatedToType = {}));
//# sourceMappingURL=task.js.map