import { ICrmBant } from './ibant';
export declare namespace ICrmShopConfig {
    interface ICustomizations {
        bant_rubric?: ICrmBant.IRubric;
        dashboard_widgets?: Array<{
            kpi_id: string;
            enabled?: boolean;
            position?: number;
            group_by?: string;
        }>;
        workflow_rules?: Array<Record<string, unknown>>;
        [key: string]: unknown;
    }
    interface ICrmShopConfigResponse {
        shop_id: number | string;
        applied_template_id: number | string;
        applied_template_version: number;
        applied_at: string;
        applied_by: number | string;
        customizations: ICustomizations;
        customizations_version: number;
        features: Record<string, unknown>;
        updatedAt: string;
        effective?: Record<string, unknown>;
        bant_rubric?: ICrmBant.IRubric;
    }
    interface IUpdateCustomizations {
        bant_rubric?: Partial<ICrmBant.IRubric>;
        dashboard_widgets?: Array<{
            kpi_id: string;
            enabled?: boolean;
            position?: number;
            group_by?: string;
        }>;
        workflow_rules?: Array<Record<string, unknown>>;
        [key: string]: unknown;
    }
}
