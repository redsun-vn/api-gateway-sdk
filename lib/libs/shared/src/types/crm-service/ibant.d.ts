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
    }
}
