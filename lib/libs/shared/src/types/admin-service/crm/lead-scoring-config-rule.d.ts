import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { LEAD_SCORING_RULE_TYPE, LEAD_SCORING_RULE_OPERATOR } from '../../../enum/admin-service/crm';
export declare namespace ICRMLeadScoringConfigRule {
    interface IRuleValue {
        min?: number;
        max?: number;
        value?: number;
        values?: number[];
    }
    interface ICreate {
        companyId?: string;
        configId: number;
        ruleType: LEAD_SCORING_RULE_TYPE;
        ruleName: string;
        ruleOperator: LEAD_SCORING_RULE_OPERATOR;
        ruleValue: IRuleValue;
        score: number;
        priority: number;
        isActive: boolean;
        description?: string;
    }
    interface IUpdate extends Partial<ICreate> {
        id: number | string;
        updatedBy?: number;
    }
    interface IResponse extends BaseResponse {
        configId: number | string;
        ruleType: LEAD_SCORING_RULE_TYPE | string;
        ruleName: string;
        ruleOperator: LEAD_SCORING_RULE_OPERATOR | string;
        ruleValue: IRuleValue;
        score: number | string;
        priority: number | string;
        isActive: boolean;
        description?: string | null;
    }
}
