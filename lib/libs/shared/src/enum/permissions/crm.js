"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmAttachmentPermission = exports.CrmConfigPermission = exports.CrmOpportunityPermission = exports.CrmLeadPermission = void 0;
var CrmLeadPermission;
(function (CrmLeadPermission) {
    CrmLeadPermission["VIEW"] = "crm_lead-view";
    CrmLeadPermission["CREATE"] = "crm_lead-create";
    CrmLeadPermission["UPDATE"] = "crm_lead-update";
    CrmLeadPermission["ASSIGN"] = "crm_lead-assign";
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
//# sourceMappingURL=crm.js.map