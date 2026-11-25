"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmReportPermission = exports.CrmTeamPermission = exports.CRM_MARKETING_PERMISSION_PREFIX = exports.CRM_MARKETING_ANY = exports.CRM_MARKETING_PUBLISH_READ = exports.CRM_MARKETING_ADS_READ = exports.CRM_MARKETING_SETTINGS_READ = exports.CRM_MARKETING_SUBSCRIBER_READ = exports.CRM_MARKETING_AUDIENCE_READ = exports.CRM_MARKETING_JOURNEY_READ = exports.CrmMarketingPublishPermission = exports.CrmMarketingAdsPermission = exports.CrmMarketingSettingsPermission = exports.CrmMarketingSubscriberPermission = exports.CrmMarketingAudiencePermission = exports.CrmMarketingJourneyPermission = exports.CrmCallPermission = exports.CrmCompliancePermission = exports.CrmKpiTargetPermission = exports.CrmAttachmentPermission = exports.CrmConfigPermission = exports.CrmOpportunityPermission = exports.CrmConversationPermission = exports.CrmLeadPermission = void 0;
var CrmLeadPermission;
(function (CrmLeadPermission) {
    CrmLeadPermission["VIEW"] = "crm_lead-view";
    CrmLeadPermission["CREATE"] = "crm_lead-create";
    CrmLeadPermission["UPDATE"] = "crm_lead-update";
    CrmLeadPermission["ASSIGN"] = "crm_lead-assign";
    CrmLeadPermission["MERGE"] = "crm_lead-merge";
})(CrmLeadPermission || (exports.CrmLeadPermission = CrmLeadPermission = {}));
var CrmConversationPermission;
(function (CrmConversationPermission) {
    CrmConversationPermission["VIEW"] = "crm_conversation-read";
    CrmConversationPermission["REPLY"] = "crm_conversation-reply";
    CrmConversationPermission["ASSIGN"] = "crm_conversation-assign";
})(CrmConversationPermission || (exports.CrmConversationPermission = CrmConversationPermission = {}));
var CrmOpportunityPermission;
(function (CrmOpportunityPermission) {
    CrmOpportunityPermission["VIEW"] = "crm_opportunity-view";
    CrmOpportunityPermission["UPDATE"] = "crm_opportunity-update";
    CrmOpportunityPermission["ASSIGN"] = "crm_opportunity-assign";
    CrmOpportunityPermission["REPORT"] = "crm_opportunity-report";
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
var CrmCallPermission;
(function (CrmCallPermission) {
    CrmCallPermission["VIEW"] = "crm_call-view";
    CrmCallPermission["MAKE"] = "crm_call-make";
    CrmCallPermission["DIAL"] = "crm_call-dial";
    CrmCallPermission["LISTEN_RECORDING"] = "crm_call-listen_recording";
})(CrmCallPermission || (exports.CrmCallPermission = CrmCallPermission = {}));
var CrmMarketingJourneyPermission;
(function (CrmMarketingJourneyPermission) {
    CrmMarketingJourneyPermission["VIEW"] = "crm_marketing_journey-view";
    CrmMarketingJourneyPermission["CREATE"] = "crm_marketing_journey-create";
    CrmMarketingJourneyPermission["UPDATE"] = "crm_marketing_journey-update";
    CrmMarketingJourneyPermission["DELETE"] = "crm_marketing_journey-delete";
    CrmMarketingJourneyPermission["APPROVE"] = "crm_marketing_journey-approve";
})(CrmMarketingJourneyPermission || (exports.CrmMarketingJourneyPermission = CrmMarketingJourneyPermission = {}));
var CrmMarketingAudiencePermission;
(function (CrmMarketingAudiencePermission) {
    CrmMarketingAudiencePermission["VIEW"] = "crm_marketing_audience-view";
    CrmMarketingAudiencePermission["CREATE"] = "crm_marketing_audience-create";
    CrmMarketingAudiencePermission["UPDATE"] = "crm_marketing_audience-update";
    CrmMarketingAudiencePermission["DELETE"] = "crm_marketing_audience-delete";
})(CrmMarketingAudiencePermission || (exports.CrmMarketingAudiencePermission = CrmMarketingAudiencePermission = {}));
var CrmMarketingSubscriberPermission;
(function (CrmMarketingSubscriberPermission) {
    CrmMarketingSubscriberPermission["VIEW"] = "crm_marketing_subscriber-view";
    CrmMarketingSubscriberPermission["CREATE"] = "crm_marketing_subscriber-create";
    CrmMarketingSubscriberPermission["UPDATE"] = "crm_marketing_subscriber-update";
    CrmMarketingSubscriberPermission["DELETE"] = "crm_marketing_subscriber-delete";
})(CrmMarketingSubscriberPermission || (exports.CrmMarketingSubscriberPermission = CrmMarketingSubscriberPermission = {}));
var CrmMarketingSettingsPermission;
(function (CrmMarketingSettingsPermission) {
    CrmMarketingSettingsPermission["VIEW"] = "crm_marketing_settings-view";
    CrmMarketingSettingsPermission["UPDATE"] = "crm_marketing_settings-update";
})(CrmMarketingSettingsPermission || (exports.CrmMarketingSettingsPermission = CrmMarketingSettingsPermission = {}));
var CrmMarketingAdsPermission;
(function (CrmMarketingAdsPermission) {
    CrmMarketingAdsPermission["VIEW"] = "crm_marketing_ads-view";
    CrmMarketingAdsPermission["CREATE"] = "crm_marketing_ads-create";
    CrmMarketingAdsPermission["UPDATE"] = "crm_marketing_ads-update";
    CrmMarketingAdsPermission["DELETE"] = "crm_marketing_ads-delete";
})(CrmMarketingAdsPermission || (exports.CrmMarketingAdsPermission = CrmMarketingAdsPermission = {}));
var CrmMarketingPublishPermission;
(function (CrmMarketingPublishPermission) {
    CrmMarketingPublishPermission["VIEW"] = "crm_marketing_publish-view";
    CrmMarketingPublishPermission["CREATE"] = "crm_marketing_publish-create";
    CrmMarketingPublishPermission["UPDATE"] = "crm_marketing_publish-update";
    CrmMarketingPublishPermission["DELETE"] = "crm_marketing_publish-delete";
    CrmMarketingPublishPermission["APPROVE"] = "crm_marketing_publish-approve";
})(CrmMarketingPublishPermission || (exports.CrmMarketingPublishPermission = CrmMarketingPublishPermission = {}));
exports.CRM_MARKETING_JOURNEY_READ = Object.values(CrmMarketingJourneyPermission);
exports.CRM_MARKETING_AUDIENCE_READ = Object.values(CrmMarketingAudiencePermission);
exports.CRM_MARKETING_SUBSCRIBER_READ = Object.values(CrmMarketingSubscriberPermission);
exports.CRM_MARKETING_SETTINGS_READ = Object.values(CrmMarketingSettingsPermission);
exports.CRM_MARKETING_ADS_READ = Object.values(CrmMarketingAdsPermission);
exports.CRM_MARKETING_PUBLISH_READ = Object.values(CrmMarketingPublishPermission);
exports.CRM_MARKETING_ANY = [
    ...exports.CRM_MARKETING_JOURNEY_READ,
    ...exports.CRM_MARKETING_AUDIENCE_READ,
    ...exports.CRM_MARKETING_SUBSCRIBER_READ,
    ...exports.CRM_MARKETING_SETTINGS_READ,
    ...exports.CRM_MARKETING_ADS_READ,
    ...exports.CRM_MARKETING_PUBLISH_READ,
];
exports.CRM_MARKETING_PERMISSION_PREFIX = 'crm_marketing_';
var CrmTeamPermission;
(function (CrmTeamPermission) {
    CrmTeamPermission["VIEW"] = "crm_team-view";
    CrmTeamPermission["CREATE"] = "crm_team-create";
    CrmTeamPermission["UPDATE"] = "crm_team-update";
    CrmTeamPermission["DELETE"] = "crm_team-delete";
})(CrmTeamPermission || (exports.CrmTeamPermission = CrmTeamPermission = {}));
var CrmReportPermission;
(function (CrmReportPermission) {
    CrmReportPermission["VIEW"] = "crm_report-view";
    CrmReportPermission["SHARE_TEAM"] = "crm_report-view-share-team";
    CrmReportPermission["SHARE_SHOP"] = "crm_report-view-share-shop";
    CrmReportPermission["METRIC_MANAGE"] = "crm_report-metric-manage";
})(CrmReportPermission || (exports.CrmReportPermission = CrmReportPermission = {}));
//# sourceMappingURL=crm.js.map