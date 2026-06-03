export declare namespace ICrmOnboarding {
    interface ITemplate {
        id: number | string;
        code: string;
        name: string;
        industry_group: string;
        business_types: string[];
        description: string;
        version: number;
        preview?: Record<string, unknown>;
        mode?: 'pipeline' | 'reservation' | 'retention';
        supports_modes?: string[];
        stage_count?: number;
        is_cross_category?: boolean;
    }
    interface IApplyCustomizations {
        mode?: 'pipeline' | 'reservation' | 'retention';
        enabled_modules?: string[];
        shop_name?: string;
        timezone?: string;
    }
    interface IOnboardingContext {
        industry?: string;
        mode?: 'pipeline' | 'reservation' | 'retention';
        team_size?: number;
    }
    interface IApplyAnalytics {
        suggested_template_id?: number | string | null;
        chosen_template_id?: number | string | null;
        chosen_matches_suggested?: boolean;
    }
    interface ISuggestResponse {
        suggested_template_id?: number | string | null;
        suggested_template_code?: string | null;
        suggested_reason?: string | null;
        match_percent?: number | string;
        alternates: ITemplate[];
    }
    interface IListTemplatesQuery {
        industry_group?: string;
        business_type?: string;
    }
    interface IListTemplatesResponse {
        templates: ITemplate[];
        cross_category_warning: boolean;
    }
    interface IApply {
        template_id: number;
        acknowledged_cross_category?: boolean;
        customizations?: IApplyCustomizations;
        onboarding_context?: IOnboardingContext;
        analytics?: IApplyAnalytics;
    }
    interface IApplyResponse {
        shop_id: number | string;
        applied_template_id: number | string;
        applied_template_version: number | string;
        applied_at: string;
    }
    interface IReapply {
        template_id?: number;
        customizations?: IApplyCustomizations;
        acknowledged_destructive?: boolean;
        acknowledged_cross_category?: boolean;
    }
    interface IReapplyResponse {
        shop_id: number | string;
        applied_template_id: number | string;
        applied_template_version: number | string;
        reapplied_at: string;
        path: 'customizations_only' | 'template_changed';
    }
}
