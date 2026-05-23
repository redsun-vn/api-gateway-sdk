import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { CrmScoringRuleEntityType, CrmScoringRuleCategory } from '../../enum/crm-service/scoring-rule';
export declare namespace ICrmScoringRule {
    interface IConditionNode {
        op: string;
        field?: string;
        value?: unknown;
        children?: IConditionNode[];
    }
    interface ICreate {
        entity_type: CrmScoringRuleEntityType;
        name: string & tags.MinLength<1> & tags.MaxLength<255>;
        category: CrmScoringRuleCategory;
        condition: IConditionNode;
        delta: number & tags.Minimum<-50> & tags.Maximum<50>;
        order_index: number;
        active?: boolean;
    }
    type IUpdate = Partial<ICreate>;
    interface ICrmScoringRuleResponse extends BaseResponse {
        shop_id: number | string;
        template_id?: number | string | null;
        entity_type: CrmScoringRuleEntityType;
        name: string;
        category: CrmScoringRuleCategory;
        condition: Record<string, unknown>;
        delta: number;
        active: boolean;
        is_system_seeded: boolean;
        order_index: number;
    }
    interface IToggle {
        active: boolean;
    }
    interface IPreview {
        condition: IConditionNode;
        sample_lead: Record<string, unknown>;
    }
    interface IPreviewResponse {
        matched: boolean;
        evaluated_path?: Array<{
            op: string;
            result: boolean;
            detail?: string;
        }>;
    }
    interface IListQuery {
        entity_type?: CrmScoringRuleEntityType;
        category?: CrmScoringRuleCategory;
    }
}
