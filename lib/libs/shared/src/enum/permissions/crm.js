"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmCompliancePermission = exports.CrmKpiTargetPermission = exports.CrmAttachmentPermission = exports.CrmConfigPermission = exports.CrmOpportunityPermission = exports.CrmLeadPermission = void 0;
var CrmLeadPermission;
(function (CrmLeadPermission) {
    CrmLeadPermission["VIEW"] = "crm_lead-view";
    CrmLeadPermission["CREATE"] = "crm_lead-create";
    CrmLeadPermission["UPDATE"] = "crm_lead-update";
    CrmLeadPermission["ASSIGN"] = "crm_lead-assign";
    CrmLeadPermission["MERGE"] = "crm_lead-merge";
})(CrmLeadPermission || (exports.CrmLeadPermission = CrmLeadPermission = {}));
var CrmOpportunityPermission;
(function (CrmOpportunityPermission) {
    CrmOpportunityPermission["VIEW"] = "crm_opportunity-view";
    CrmOpportunityPermission["UPDATE"] = "crm_opportunity-update";
    CrmOpportunityPermission["ASSIGN"] = "crm_opportunity-assign";
})(CrmOpportunityPermission || (exports.CrmOpportunityPermission = CrmOpportunityPermission = {}));
var CrmConfigPermission;
(function (CrmConfigPermission) {
    CrmConfigPermission["UPDATE"] = "crm_config-update";
})(CrmConfigPermission || (exports.CrmConfigPermission = CrmConfigPermission = {}));
var CrmAttachmentPermission;
(function (CrmAttachmentPermission) {
    CrmAttachmentPermission["VIEW"] = "crm_attachment-view";
    CrmAttachmentPermission["MANAGE"] = "crm_attachment-manage";
})(CrmAttachmentPermission || (exports.CrmAttachmentPermission = CrmAttachmentPermission = {}));
var CrmKpiTargetPermission;
(function (CrmKpiTargetPermission) {
    CrmKpiTargetPermission["VIEW"] = "crm_kpi_target-view";
})(CrmKpiTargetPermission || (exports.CrmKpiTargetPermission = CrmKpiTargetPermission = {}));
var CrmCompliancePermission;
(function (CrmCompliancePermission) {
    CrmCompliancePermission["VIEW"] = "crm_compliance-view";
})(CrmCompliancePermission || (exports.CrmCompliancePermission = CrmCompliancePermission = {}));
//# sourceMappingURL=crm.js.map