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
    }
    interface ISuggestResponse {
        suggested_template_id?: number | string | null;
        suggested_template_code?: string | null;
        suggested_reason?: string | null;
        alternates: ITemplate[];
    }
    interface IListTemplatesQuery {
        industry_group?: string;
        business_type?: string;
    }
    interface IListTemplatesResponse {
        templates: ITemplate[];
        cross_category_warning?: boolean;
    }
    interface IApply {
        template_id: number;
        acknowledged_cross_category?: boolean;
    }
    interface IApplyResponse {
        shop_id: number | string;
        applied_template_id: number | string;
        applied_template_version: number;
        applied_at: string;
    }
}
