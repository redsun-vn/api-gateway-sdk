"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmBantClassification = exports.CrmLeadStatus = exports.CrmLeadSource = void 0;
var CrmLeadSource;
(function (CrmLeadSource) {
    CrmLeadSource["WEB_FORM"] = "web_form";
    CrmLeadSource["IMPORT"] = "import";
    CrmLeadSource["CAMPAIGN"] = "campaign";
    CrmLeadSource["REFERRAL"] = "referral";
    CrmLeadSource["MANUAL"] = "manual";
    CrmLeadSource["PARTNER_API"] = "partner_api";
    CrmLeadSource["OFFLINE"] = "offline";
    CrmLeadSource["SOCIAL"] = "social";
    CrmLeadSource["MARKETPLACE"] = "marketplace";
    CrmLeadSource["CHAT"] = "chat";
    CrmLeadSource["CALL_CENTER"] = "call_center";
    CrmLeadSource["POS"] = "pos";
    CrmLeadSource["EVENT"] = "event";
    CrmLeadSource["OTHER"] = "other";
})(CrmLeadSource || (exports.CrmLeadSource = CrmLeadSource = {}));
var CrmLeadStatus;
(function (CrmLeadStatus) {
    CrmLeadStatus["NEW"] = "new";
    CrmLeadStatus["WORKING"] = "working";
    CrmLeadStatus["QUALIFIED"] = "qualified";
    CrmLeadStatus["UNQUALIFIED"] = "unqualified";
    CrmLeadStatus["CONVERTED"] = "converted";
})(CrmLeadStatus || (exports.CrmLeadStatus = CrmLeadStatus = {}));
var CrmBantClassification;
(function (CrmBantClassification) {
    CrmBantClassification["COLD"] = "cold";
    CrmBantClassification["WARM"] = "warm";
    CrmBantClassification["HOT"] = "hot";
    CrmBantClassification["MQL"] = "mql";
    CrmBantClassification["SQL"] = "sql";
    CrmBantClassification["DISQUALIFIED"] = "disqualified";
})(CrmBantClassification || (exports.CrmBantClassification = CrmBantClassification = {}));
//# sourceMappingURL=lead.js.map