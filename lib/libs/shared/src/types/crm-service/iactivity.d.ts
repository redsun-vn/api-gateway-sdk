import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { CrmActivityType, CrmActivityRelatedToType, CrmActivityDirection } from '../../enum/crm-service/activity';
export declare namespace ICrmActivity {
    interface ICreate {
        type: CrmActivityType;
        related_to_type: CrmActivityRelatedToType;
        related_to_id: number;
        owner_id: number;
        subject: string & tags.MinLength<1> & tags.MaxLength<255>;
        body?: string;
        direction?: CrmActivityDirection;
        duration_sec?: number;
        due_at?: string & tags.Format<'date-time'>;
        completed_at?: string & tags.Format<'date-time'>;
        metadata?: Record<string, unknown>;
    }
    type IUpdate = Partial<ICreate>;
    interface ICrmActivityResponse extends BaseResponse {
        shop_id: number | string;
        type: CrmActivityType;
        related_to_type: CrmActivityRelatedToType;
        related_to_id: number | string;
        owner_id: number | string;
        subject: string;
        body?: string | null;
        direction?: CrmActivityDirection | null;
        duration_sec?: number | null;
        completed_at?: string | null;
        due_at?: string | null;
        metadata?: Record<string, unknown> | null;
        created_by_id?: string | null;
    }
    interface IListQuery {
        related_to_type?: CrmActivityRelatedToType;
        related_to_id?: number;
        owner_id?: number;
        type?: CrmActivityType;
        partner_uuid?: string & tags.Format<'uuid'>;
    }
}
