import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { CrmOpportunityVisibility } from '../../enum/crm-service/opportunity';
export declare namespace ICrmOpportunity {
    interface ICreate {
        owning_branch_id?: number | null;
        visibility?: CrmOpportunityVisibility;
        partner_uuid?: string;
        pipeline_id: number;
        stage_id: number;
        name: string & tags.MinLength<1> & tags.MaxLength<255>;
        value: number;
        currency?: string & tags.MaxLength<3>;
        probability?: number & tags.Minimum<0> & tags.Maximum<100>;
        expected_close_date: string & tags.Format<'date'>;
        owner_id: number;
        source?: string;
        source_ref?: string;
        custom_fields?: Record<string, unknown>;
    }
    type IUpdate = Partial<ICreate>;
    interface ICrmOpportunityResponse extends BaseResponse {
        shop_id: number | string;
        owning_branch_id?: number | string | null;
        visibility: CrmOpportunityVisibility;
        partner_uuid?: string | null;
        pipeline_id: number | string;
        stage_id: number | string;
        name: string;
        value: string;
        currency: string;
        value_master: string;
        fx_rate_at_close?: string | null;
        probability: number;
        expected_close_date: string;
        closed_at?: string | null;
        won_at?: string | null;
        lost_reason?: string | null;
        owner_id: number | string;
        source?: string | null;
        source_ref?: string | null;
        sale_order_id?: number | string | null;
        order_id?: number | string | null;
        reservation_id?: number | string | null;
        custom_fields?: Record<string, unknown> | null;
        stage_since?: string | null;
        first_responded_at?: string | null;
    }
    interface IMove {
        target_stage_id: number;
        reason?: string;
    }
    interface IWon {
        sale_order_id?: number;
        notes?: string;
    }
    interface ILost {
        lost_reason: string & tags.MinLength<1>;
        notes?: string;
    }
    interface IListColumn {
        items: ICrmOpportunityResponse[];
        total: number;
    }
    interface IKanbanColumn {
        stage_id: number | string;
        stage_name: string;
        probability: number;
        ui_color: string | null;
        count: number;
        total_value: string;
        items: ICrmOpportunityResponse[];
    }
    interface IQueryPipeline {
        pipeline_id: number;
    }
    interface IKanbanResponse {
        pipeline_id: number | string;
        columns: IKanbanColumn[];
    }
    interface IAutoPromoteThreshold {
        score_gte: number & tags.Minimum<1> & tags.Maximum<100>;
        mode: 'notify' | 'auto_move';
        additional_required?: string[];
    }
    interface IAutoPromoteConfig {
        auto_promote_thresholds: Record<string, IAutoPromoteThreshold>;
    }
    interface IBulkAssign {
        opportunity_ids: Array<number> & tags.MinItems<1> & tags.MaxItems<100>;
        owner_id: number;
        reason?: string;
    }
    interface IBulkAssignResponse {
        success: boolean;
        count: number;
        opportunity_ids: number[];
    }
    interface IQuotePrefill {
        partner_uuid: string | null;
        currency: string;
        email?: string | null;
        expected_value?: number | null;
    }
    interface ILinkSaleOrder {
        sale_order_id: number & tags.Type<'uint64'>;
    }
    interface ILinkSaleOrderResult {
        linked: boolean;
        opportunity_id: number;
        sale_order_id: number;
    }
}
