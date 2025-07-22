import { tags } from 'typia';
import { ActivityResult, ActivityStatus, ActivityType } from '../../enum';
import { BaseResponse } from '../common.type';
export declare namespace IActivity {
    interface ICreate {
        customer_id?: number | null;
        type: ActivityType;
        phone?: string | null;
        address?: string | null;
        email?: string | null;
        deal_id?: number | null;
        priority?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        status?: ActivityStatus;
        title?: string | null;
        description?: string | null;
        targetContent?: string | null;
        result?: ActivityResult | null;
        rate?: (number & tags.Minimum<0> & tags.Maximum<5>) | null;
        resultNote?: string | null;
        nextActionRequired?: boolean;
        nextActionType?: ActivityType | null;
        nextActionDate?: string | null;
        nextActionDescription?: string | null;
        attachment_ids?: string[] | null;
        canceledDate?: string | null;
        canceledReason?: string | null;
        canceledById?: number;
        createdById?: number;
    }
    interface IUpdate extends Partial<ICreate> {
        updatedById?: number;
    }
    interface IResponse extends BaseResponse {
        type: string;
        customer_id?: number | string | null;
        phone?: string | null;
        address?: string | null;
        email?: string | null;
        deal_id?: number | string | null;
        priority?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        status?: string;
        title?: string | null;
        description?: string | null;
        targetContent?: string | null;
        result?: string | null;
        rate?: number | null;
        resultNote?: string | null;
        nextActionRequired?: boolean;
        nextActionType?: string | null;
        nextActionDate?: string | null;
        nextActionDescription?: string | null;
        attachment_ids?: string[] | null;
        canceledDate?: string | null;
        canceledReason?: string | null;
        canceledById?: number | string | null;
    }
}
