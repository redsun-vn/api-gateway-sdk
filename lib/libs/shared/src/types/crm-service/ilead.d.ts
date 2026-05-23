import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { CrmLeadSource, CrmLeadStatus, CrmBantClassification } from '../../enum/crm-service/lead';
export declare namespace ICrmLead {
    interface ICreate {
        branch_id?: number | null;
        source: CrmLeadSource;
        source_ref?: string;
        name: string & tags.MinLength<1> & tags.MaxLength<255>;
        email?: string & tags.Format<'email'>;
        phone?: string & tags.MaxLength<50>;
        company_name?: string;
        note?: string;
        owner_id?: number | null;
        custom_fields?: Record<string, unknown>;
        assign_reason?: string;
    }
    type IUpdate = Partial<Omit<ICreate, 'owner_id'>> & {
        owner_id?: number | string | null;
    };
    interface ICrmLeadResponse extends BaseResponse {
        shop_id: number | string;
        branch_id?: number | string | null;
        source: CrmLeadSource;
        source_ref?: string | null;
        name: string;
        email?: string | null;
        phone?: string | null;
        company_name?: string | null;
        note?: string | null;
        score: number;
        score_breakdown?: Record<string, unknown> | null;
        bant_score: number;
        bant_budget_score: number;
        bant_authority_score: number;
        bant_need_score: number;
        bant_timeline_score: number;
        bant_classification: CrmBantClassification;
        bant_computed_at?: string | null;
        authority_warning: boolean;
        bant_breakdown?: Record<string, unknown> | null;
        status: CrmLeadStatus;
        owner_id?: number | string | null;
        converted_partner_uuid?: string | null;
        converted_opportunity_id?: number | string | null;
        custom_fields?: Record<string, unknown> | null;
        needs_reassignment?: boolean;
    }
    interface IAssign {
        owner_id: number;
        reason?: string;
    }
    interface IBulkAssign {
        lead_ids: Array<number> & tags.MinItems<1> & tags.MaxItems<100>;
        owner_id: number;
        reason?: string;
    }
    interface IBulkAssignResponse {
        success: boolean;
        count: number;
        lead_ids: Array<number>;
    }
    interface IQualify {
        create_opportunity?: boolean;
        pipeline_id?: number;
        initial_stage_id?: number;
        expected_value?: number;
        expected_close_date?: string & tags.Format<'date'>;
    }
    interface IQualifyResponse {
        lead: ICrmLeadResponse;
        partner_uuid: string;
        opportunity_id?: number | null;
    }
    interface IImportEntry extends Omit<ICreate, 'shop_id'> {
        _row_index?: number;
    }
    interface IImportRequest {
        leads: Array<IImportEntry> & tags.MinItems<1> & tags.MaxItems<500>;
        options?: {
            skip_workflow_rules?: boolean;
        };
    }
    type ImportAssignOrigin = 'workflow_rule' | 'auto_round_robin' | 'unassigned' | 'manual';
    interface IImportRowResult {
        row_index: number;
        status: 'created' | 'failed';
        lead_id?: number;
        duplicate_of_lead_id?: number;
        owner_id?: number | null;
        origin?: ImportAssignOrigin;
        error_code?: string;
        error_message?: string;
        error_fields?: string[];
    }
    interface IImportResponse {
        success_count: number;
        error_count: number;
        duplicate_warning_count: number;
        results: IImportRowResult[];
    }
    interface IScoreRecomputeResponse {
        score: number;
        breakdown: Record<string, unknown>;
    }
    interface IBantRecomputeResponse {
        bant_score: number;
        classification: CrmBantClassification;
        authority_warning: boolean;
        breakdown: Record<string, unknown>;
    }
    type ILeadResponse = ICrmLeadResponse;
    interface IListQuery {
        pagination?: unknown;
        filters?: unknown;
        sort?: unknown;
        search?: unknown;
    }
}
