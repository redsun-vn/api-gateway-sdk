import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { CrmBantClassification } from '../../enum/crm-service/lead';
export type StageWinState = 'none' | 'won' | 'lost';
export interface IStageResponse {
    id: number | string;
    pipeline_id: number | string;
    name: string;
    order_index: number;
    probability: number;
    win_state: StageWinState;
    ui_color: string | null;
    required_fields_to_enter: Array<{
        key: string;
        validation?: string;
    }> | null;
    allowed_next_stages: string[] | null;
    allowed_prev_stages: string[] | null;
    updated_at: string;
    sla_stuck_days: number | string;
}
export declare namespace ICrmPipeline {
    interface IFindAllQuery {
        active?: boolean;
        q?: string & tags.MaxLength<255>;
    }
    interface IPipelineResponse extends BaseResponse {
        shop_id: number | string;
        name: string;
        template_id: number | string;
        template_version: number | string;
        active: boolean;
        is_default: boolean;
    }
    interface IFindAllResponse {
        items: IPipelineResponse[];
        total: number;
    }
    interface IFindOneResponse extends IPipelineResponse {
        stages: IStageResponse[];
    }
    interface IQualifyGate {
        mode: 'off' | 'warn' | 'block' | 'auto_qualify';
        thresholds: {
            bant_score_gte?: number & tags.Minimum<0> & tags.Maximum<100>;
            budget_gte?: number & tags.Minimum<0> & tags.Maximum<100>;
            authority_gte?: number & tags.Minimum<0> & tags.Maximum<100>;
            need_gte?: number & tags.Minimum<0> & tags.Maximum<100>;
            timeline_gte?: number & tags.Minimum<0> & tags.Maximum<100>;
            bant_classification_in?: CrmBantClassification[];
            score_gte?: number & tags.Minimum<0> & tags.Maximum<100>;
        };
        authority_missing_behavior?: 'warn' | 'block';
        auto_create_opportunity?: boolean;
    }
    interface IQualifyGateFailedResponse {
        errorCode: 'qualify_gate_failed';
        lead_id: number | string;
        pipeline_id: number | string;
        gate_mode: 'block';
        failed_signals: Array<{
            signal: 'bant_score' | 'budget' | 'authority' | 'need' | 'timeline' | 'classification' | 'score' | 'authority_warning';
            actual: number | string | boolean;
            required: number | string[] | true;
            op: 'gte' | 'in' | 'warn_flag';
        }>;
        lead_scores: {
            bant_score: number | string;
            bant_budget_score: number | string;
            bant_authority_score: number | string;
            bant_need_score: number | string;
            bant_timeline_score: number | string;
            bant_classification: CrmBantClassification;
            score: number | string;
            authority_warning: boolean;
        };
    }
}
