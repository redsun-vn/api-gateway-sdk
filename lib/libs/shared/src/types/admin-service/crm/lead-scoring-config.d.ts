import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { ICRMLeadScoringConfigRule } from './lead-scoring-config-rule';
export declare namespace ICRMLeadScoringConfig {
    interface IRuleValue extends Partial<ICRMLeadScoringConfigRule.ICreate> {
        id: number | string | null;
        updatedBy?: number | null;
    }
    interface ISetDefault {
        industry: string;
        configId: number;
    }
    interface IActivate {
        configId: number;
    }
    interface IDemographicScores {
        company_size: {
            small: number;
            medium: number;
            large: number;
            enterprise: number;
        };
        industry_match: {
            exact: number;
            related: number;
            none: number;
        };
        budget_range: {
            low: number;
            medium: number;
            high: number;
            enterprise: number;
        };
        decision_maker: {
            c_level: number;
            director: number;
            manager: number;
            staff: number;
        };
    }
    interface IBehavioralScores {
        website_visits: {
            low: number;
            medium: number;
            high: number;
        };
        content_downloads: {
            none: number;
            low: number;
            high: number;
        };
        email_engagement: {
            none: number;
            low: number;
            medium: number;
            high: number;
        };
        demo_request: {
            none: number;
            requested: number;
        };
    }
    interface IEngagementScores {
        phone_answered: {
            no: number;
            yes: number;
        };
        meeting_attended: {
            no: number;
            yes: number;
        };
        proposal_requested: {
            no: number;
            yes: number;
        };
    }
    interface IClassificationThresholds {
        cold: number;
        warm: number;
        hot: number;
        sales_ready: number;
    }
    interface IAssignmentWeights {
        location: number;
        industry_expertise: number;
        workload: number;
    }
    interface ICreate {
        companyId?: string;
        industry: string;
        configName: string;
        description?: string;
        isActive: boolean;
        isDefault: boolean;
        demographicScores: IDemographicScores;
        behavioralScores: IBehavioralScores;
        engagementScores: IEngagementScores;
        classificationThresholds: IClassificationThresholds;
        assignmentWeights: IAssignmentWeights;
        version: number | string;
    }
    interface IUpdate extends Partial<ICreate> {
        id: number | string;
        updatedBy?: number;
    }
    interface IResponse extends BaseResponse {
        industry: string;
        configName: string;
        description?: string | null;
        isActive: boolean;
        isDefault: boolean;
        demographicScores: IDemographicScores;
        behavioralScores: IBehavioralScores;
        engagementScores: IEngagementScores;
        classificationThresholds: IClassificationThresholds;
        assignmentWeights: IAssignmentWeights;
        version: number;
        rules?: ICRMLeadScoringConfigRule.IResponse[];
    }
    interface IGetActiveConfig {
        industry: string;
    }
    interface ICloneConfig {
        sourceId: number;
        newConfigName: string;
        description?: string;
        createdBy: number;
    }
    interface IValidateConfig {
        config: IResponse;
    }
}
