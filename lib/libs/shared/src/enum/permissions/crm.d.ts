export declare enum CrmLeadPermission {
    VIEW = "crm_lead-view",
    CREATE = "crm_lead-create",
    UPDATE = "crm_lead-update",
    ASSIGN = "crm_lead-assign",
    MERGE = "crm_lead-merge"
}
export declare enum CrmConversationPermission {
    VIEW = "crm_conversation-read",
    REPLY = "crm_conversation-reply",
    ASSIGN = "crm_conversation-assign"
}
export declare enum CrmOpportunityPermission {
    VIEW = "crm_opportunity-view",
    UPDATE = "crm_opportunity-update",
    ASSIGN = "crm_opportunity-assign",
    REPORT = "crm_opportunity-report"
}
export declare enum CrmConfigPermission {
    UPDATE = "crm_config-update"
}
export declare enum CrmAttachmentPermission {
    VIEW = "crm_attachment-view",
    MANAGE = "crm_attachment-manage"
}
export declare enum CrmKpiTargetPermission {
    VIEW = "crm_kpi_target-view"
}
export declare enum CrmCompliancePermission {
    VIEW = "crm_compliance-view"
}
export declare enum CrmCallPermission {
    VIEW = "crm_call-view",
    MAKE = "crm_call-make",
    DIAL = "crm_call-dial",
    LISTEN_RECORDING = "crm_call-listen_recording"
}
export declare enum CrmMarketingJourneyPermission {
    VIEW = "crm_marketing_journey-view",
    CREATE = "crm_marketing_journey-create",
    UPDATE = "crm_marketing_journey-update",
    DELETE = "crm_marketing_journey-delete",
    APPROVE = "crm_marketing_journey-approve"
}
export declare enum CrmMarketingAudiencePermission {
    VIEW = "crm_marketing_audience-view",
    CREATE = "crm_marketing_audience-create",
    UPDATE = "crm_marketing_audience-update",
    DELETE = "crm_marketing_audience-delete"
}
export declare enum CrmMarketingSubscriberPermission {
    VIEW = "crm_marketing_subscriber-view",
    CREATE = "crm_marketing_subscriber-create",
    UPDATE = "crm_marketing_subscriber-update",
    DELETE = "crm_marketing_subscriber-delete"
}
export declare enum CrmMarketingSettingsPermission {
    VIEW = "crm_marketing_settings-view",
    UPDATE = "crm_marketing_settings-update"
}
export declare enum CrmMarketingAdsPermission {
    VIEW = "crm_marketing_ads-view",
    CREATE = "crm_marketing_ads-create",
    UPDATE = "crm_marketing_ads-update",
    DELETE = "crm_marketing_ads-delete"
}
export declare enum CrmMarketingPublishPermission {
    VIEW = "crm_marketing_publish-view",
    CREATE = "crm_marketing_publish-create",
    UPDATE = "crm_marketing_publish-update",
    DELETE = "crm_marketing_publish-delete",
    APPROVE = "crm_marketing_publish-approve"
}
export declare const CRM_MARKETING_JOURNEY_READ: readonly CrmMarketingJourneyPermission[];
export declare const CRM_MARKETING_AUDIENCE_READ: readonly CrmMarketingAudiencePermission[];
export declare const CRM_MARKETING_SUBSCRIBER_READ: readonly CrmMarketingSubscriberPermission[];
export declare const CRM_MARKETING_SETTINGS_READ: readonly CrmMarketingSettingsPermission[];
export declare const CRM_MARKETING_ADS_READ: readonly CrmMarketingAdsPermission[];
export declare const CRM_MARKETING_PUBLISH_READ: readonly CrmMarketingPublishPermission[];
export declare const CRM_MARKETING_ANY: readonly string[];
export declare const CRM_MARKETING_PERMISSION_PREFIX = "crm_marketing_";
export declare enum CrmTeamPermission {
    VIEW = "crm_team-view",
    CREATE = "crm_team-create",
    UPDATE = "crm_team-update",
    DELETE = "crm_team-delete"
}
export declare enum CrmReportPermission {
    VIEW = "crm_report-view",
    SHARE_TEAM = "crm_report-view-share-team",
    SHARE_SHOP = "crm_report-view-share-shop",
    METRIC_MANAGE = "crm_report-metric-manage"
}
