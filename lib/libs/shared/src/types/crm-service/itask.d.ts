import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { CrmTaskPriority, CrmTaskStatus, CrmTaskRelatedToType } from '../../enum/crm-service/task';
import { CrmActivityOutcome, CrmActivityCreateType } from '../../enum/crm-service/activity';
export declare namespace ICrmTask {
    type Id = number | string;
    type IsoDate = Date | string;
    interface ITaskListQuery {
        assignee_id?: number;
        owner_id?: number;
        status?: CrmTaskStatus;
        priority?: CrmTaskPriority;
        related_to_type?: CrmTaskRelatedToType;
        related_to_id?: number;
        due_from?: string & tags.Format<'date-time'>;
        due_to?: string & tags.Format<'date-time'>;
        limit?: number & tags.Type<'int32'> & tags.Minimum<1> & tags.Maximum<1000>;
        partner_uuid?: string & tags.Format<'uuid'>;
        statuses?: string;
    }
    interface ICountsRpcInput {
        shop_id: number | string;
        viewer_staff_id: number | string;
        timezone: string;
        scoped_assignee_ids?: (number | string)[];
    }
    interface ICountsResponse {
        mine: number;
        today: number;
        overdue: number;
        next_7d: number;
        all: number;
    }
    interface ICreate {
        idempotency_key?: string & tags.MaxLength<100>;
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
    type IUpdate = Partial<Omit<ICreate, 'idempotency_key'>>;
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
        created_by_id?: number | string | null;
        source?: 'manual' | 'workflow_rule' | 'ai' | 'marketing';
        activity_id?: number | string;
    }
    interface IComplete {
        idempotency_key?: string & tags.MaxLength<100>;
        completion_notes?: string;
        log_activity?: boolean;
        outcome?: CrmActivityOutcome;
        activity_type?: CrmActivityCreateType;
    }
    interface IMyTaskRelated {
        related_to_type: string | null;
        related_to_id: Id | null;
        related_name: string | null;
    }
    interface IFocusTaskItem extends IMyTaskRelated {
        task_id: Id;
        subject: string;
        due_at: IsoDate;
        overdue_days: number;
    }
    interface ITodayUrgentItem extends IMyTaskRelated {
        task_id: Id;
        subject: string;
        due_at: IsoDate;
        is_overdue: boolean;
    }
    interface IAgendaDay {
        date: string;
        count: number;
        has_overdue: boolean;
    }
    interface IAgendaItem extends IMyTaskRelated {
        kind: 'task' | 'meeting';
        id: Id;
        title: string;
        at: IsoDate;
        is_overdue: boolean;
    }
    interface IMyTaskBlocksRpcInput {
        shop_id: Id;
        viewer_staff_id: Id;
        timezone: string;
        upcoming_only?: boolean;
        scoped_owner_ids?: Id[];
    }
    interface IMyTaskBlocksResponse {
        focus_tasks: {
            items: IFocusTaskItem[];
            total_open: number;
            total_late: number;
        };
        today_urgent: {
            total: number;
            overdue_count: number;
            items: ITodayUrgentItem[];
        };
        agenda_week: {
            week: IAgendaDay[];
            items: IAgendaItem[];
            hidden_count: number;
        };
    }
}
