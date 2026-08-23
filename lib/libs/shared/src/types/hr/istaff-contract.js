"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EExpiryFilter = exports.EExpiryStage = exports.EContractStatus = exports.EContractTypeCode = void 0;
var EContractTypeCode;
(function (EContractTypeCode) {
    EContractTypeCode["PROBATION"] = "PROBATION";
    EContractTypeCode["INTERNSHIP"] = "INTERNSHIP";
    EContractTypeCode["FIXED_TERM"] = "FIXED_TERM";
    EContractTypeCode["INDEFINITE"] = "INDEFINITE";
    EContractTypeCode["ADDENDUM"] = "ADDENDUM";
    EContractTypeCode["SERVICE"] = "SERVICE";
    EContractTypeCode["OTHER"] = "OTHER";
})(EContractTypeCode || (exports.EContractTypeCode = EContractTypeCode = {}));
var EContractStatus;
(function (EContractStatus) {
    EContractStatus["DRAFT"] = "DRAFT";
    EContractStatus["ACTIVE"] = "ACTIVE";
    EContractStatus["EXPIRED"] = "EXPIRED";
    EContractStatus["TERMINATED"] = "TERMINATED";
    EContractStatus["SUPERSEDED"] = "SUPERSEDED";
})(EContractStatus || (exports.EContractStatus = EContractStatus = {}));
var EExpiryStage;
(function (EExpiryStage) {
    EExpiryStage["D60"] = "D60";
    EExpiryStage["D30"] = "D30";
    EExpiryStage["D7"] = "D7";
    EExpiryStage["OVERDUE"] = "OVERDUE";
})(EExpiryStage || (exports.EExpiryStage = EExpiryStage = {}));
var EExpiryFilter;
(function (EExpiryFilter) {
    EExpiryFilter["IN_60"] = "60";
    EExpiryFilter["IN_30"] = "30";
    EExpiryFilter["IN_7"] = "7";
    EExpiryFilter["OVERDUE"] = "OVERDUE";
})(EExpiryFilter || (exports.EExpiryFilter = EExpiryFilter = {}));
//# sourceMappingURL=istaff-contract.js.map