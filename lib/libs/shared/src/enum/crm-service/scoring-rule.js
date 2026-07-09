"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmScoringRuleCategory = exports.CrmScoringRuleEntityType = void 0;
var CrmScoringRuleEntityType;
(function (CrmScoringRuleEntityType) {
    CrmScoringRuleEntityType["LEAD"] = "lead";
    CrmScoringRuleEntityType["OPPORTUNITY"] = "opportunity";
})(CrmScoringRuleEntityType || (exports.CrmScoringRuleEntityType = CrmScoringRuleEntityType = {}));
var CrmScoringRuleCategory;
(function (CrmScoringRuleCategory) {
    CrmScoringRuleCategory["DEMOGRAPHIC"] = "demographic";
    CrmScoringRuleCategory["FIRMOGRAPHIC"] = "firmographic";
    CrmScoringRuleCategory["BEHAVIORAL"] = "behavioral";
    CrmScoringRuleCategory["ENGAGEMENT"] = "engagement";
    CrmScoringRuleCategory["NEGATIVE"] = "negative";
    CrmScoringRuleCategory["TIME_DECAY"] = "time_decay";
})(CrmScoringRuleCategory || (exports.CrmScoringRuleCategory = CrmScoringRuleCategory = {}));
//# sourceMappingURL=scoring-rule.js.map