import { tags } from 'typia';
import { CrmBantClassification } from '../../enum/crm-service/lead';
export declare namespace ICrmBant {
    interface IDimensionScore {
        score: number;
        status: 'unknown' | 'weak' | 'good' | 'excellent';
        evidence: string[];
    }
    interface IBreakdown {
        weights: {
            budget: number;
            authority: number;
            need: number;
            timeline: number;
        };
        dimensions: {
            budget: IDimensionScore;
            authority: IDimensionScore;
            need: IDimensionScore;
            timeline: IDimensionScore;
        };
        warnings: Array<{
            code: string;
            message: string;
        }>;
        next_actions: Array<{
            type: string;
            title: string;
        }>;
    }
    interface IRecomputeResponse {
        bant_score: number;
        classification: CrmBantClassification;
        authority_warning: boolean;
        breakdown: IBreakdown;
    }
    interface IBreakdownResponse {
        bant_score: number;
        bant_budget_score: number;
        bant_authority_score: number;
        bant_need_score: number;
        bant_timeline_score: number;
        bant_classification: CrmBantClassification;
        bant_computed_at?: string | null;
        authority_warning: boolean;
        breakdown?: IBreakdown | null;
    }
    interface IPreviewRequest {
        rubric: IRubric;
        sample_lead_ids?: number[];
    }
    interface IPreviewResultItem {
        lead_id: number;
        before_score: number;
        before_classification: CrmBantClassification;
        after_score: number;
        after_classification: CrmBantClassification;
    }
    interface IPreviewResponse {
        results: IPreviewResultItem[];
    }
    interface IRubric {
        weights: {
            budget: number & tags.Minimum<0> & tags.Maximum<100>;
            authority: number & tags.Minimum<0> & tags.Maximum<100>;
            need: number & tags.Minimum<0> & tags.Maximum<100>;
            timeline: number & tags.Minimum<0> & tags.Maximum<100>;
        };
        sql_threshold: {
            bant_score_gte: number & tags.Minimum<0> & tags.Maximum<100>;
            budget_gte: number & tags.Minimum<0> & tags.Maximum<100>;
            need_gte: number & tags.Minimum<0> & tags.Maximum<100>;
            timeline_gte: number & tags.Minimum<0> & tags.Maximum<100>;
            authority_missing_behavior: 'warn' | 'block';
        };
        evidence_options?: IEvidenceOptions;
    }
    interface IEvidenceOptions {
        budget?: IBudgetOption[];
        authority?: IAuthorityOption[];
        need?: INeedOption[];
        timeline?: ITimelineOption[];
    }
    interface IBudgetOption {
        value: string;
        label: string;
        labelKey?: string;
        band: 'low' | 'medium' | 'high';
        confirmed: boolean;
    }
    interface IAuthorityOption {
        value: string;
        label: string;
        labelKey?: string;
        role: 'unknown' | 'user' | 'influencer' | 'decision_maker';
        confirmed: boolean;
    }
    interface INeedOption {
        value: string;
        label: string;
        labelKey?: string;
        pain_score: number & tags.Minimum<0> & tags.Maximum<100>;
        fit_score: number & tags.Minimum<0> & tags.Maximum<100>;
    }
    interface ITimelineOption {
        value: string;
        label: string;
        labelKey?: string;
        days_to_purchase: number & tags.Minimum<0>;
    }
}
