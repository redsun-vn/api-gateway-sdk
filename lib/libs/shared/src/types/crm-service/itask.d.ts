import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { CrmTaskPriority, CrmTaskStatus, CrmTaskRelatedToType } from '../../enum/crm-service/task';
export declare namespace ICrmTask {
    interface ITaskListQuery {
        assignee_id?: number;
        status?: CrmTaskStatus;
        priority?: CrmTaskPriority;
        related_to_type?: CrmTaskRelatedToType;
        related_to_id?: number;
        due_from?: string & tags.Format<'date-time'>;
        due_to?: string & tags.Format<'date-time'>;
        partner_uuid?: string & tags.Format<'uuid'>;
    }
    interface ICreate {
        assignee_id: number;
        subject: string & tags.MinLength<1> & tags.MaxLength<255>;
        description?: string;
        priority?: CrmTaskPriority;
        status?: CrmTaskStatus;
        related_to_type: CrmTaskRelatedToType;
        related_to_id: number;
        due_at: string & tags.Format<'date-time'>;
        reminder_at?: string & tags.Format<'date-time'>;
    }
    type IUpdate = Partial<ICreate>;
    interface ICrmTaskResponse extends BaseResponse {
        shop_id: number | string;
        assignee_id: number | string;
        subject: string;
        description?: string | null;
        priority: CrmTaskPriority;
        status: CrmTaskStatus;
        related_to_type: CrmTaskRelatedToType;
        related_to_id: number | string;
        due_at: string;
        reminder_at?: string | null;
        completed_at?: string | null;
    }
    interface IComplete {
        completion_notes?: string;
    }
}
