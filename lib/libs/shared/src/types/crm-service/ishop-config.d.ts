import { ICrmBant } from './ibant';
import { ICrmAdmin } from './iadmin';
export declare namespace ICrmShopConfig {
    interface IRecomputeStatus {
        last_rubric_recompute_at: string | null;
        last_rubric_recompute_job_id: string | null;
        last_rubric_recompute_state: ICrmAdmin.JobState | 'idle';
        last_rubric_recompute_progress: number;
    }
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
        recompute_status?: IRecomputeStatus;
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
