import { tags } from 'typia';
import { AdminActivityResult, AdminActivityStatus, AdminActivityType } from '../../enum';
import { BaseResponse } from '../common.type';
export declare namespace IAdminActivity {
    interface ICreate {
        customer_id?: number | null;
        type: AdminActivityType;
        phone?: string | null;
        address?: string | null;
        meeting_address?: string | null;
        duration_minutes?: number | null;
        email?: (string & tags.Format<'email'>) | null;
        target_id?: number | null;
        target?: string | null;
        priority?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        status?: AdminActivityStatus;
        title?: string | null;
        description?: string | null;
        targetContent?: string | null;
        result?: AdminActivityResult | null;
        rate?: (number & tags.Minimum<0> & tags.Maximum<5>) | null;
        resultNote?: string | null;
        nextActionRequired?: boolean;
        nextActionType?: AdminActivityType | null;
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
        target_id?: number | string | null;
        target?: string | null;
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
        meeting_address?: string | null;
        duration_minutes?: number | string | null;
    }
}
