import { BaseResponse } from '../common.type';
export declare namespace IClinicQueue {
    type QueueItemStatus = 'waiting' | 'called' | 'in_progress' | 'done' | 'skipped';
    type QueuePriority = 'urgent' | 'vip' | 'normal';
    interface ICreate {
        shop_id?: number | string;
        branch_id?: string;
        patient_id?: string;
        reservation_id?: string;
        visit_id?: string;
        station?: string;
        priority?: QueuePriority;
        notes?: string;
    }
    interface IStart {
        visit_id: string;
    }
    interface ILeave {
        reason?: string;
    }
    interface IResponse extends BaseResponse {
        shop_id?: number | string | null;
        branch_id?: string | null;
        patient_id?: string | null;
        visit_id?: string | null;
        station?: string | null;
        status?: QueueItemStatus | string | null;
        priority?: QueuePriority | string | null;
        queue_position?: number | null;
        waiting_since?: string | null;
        called_at?: string | null;
        started_at?: string | null;
        done_at?: string | null;
        left_at?: string | null;
        leave_reason?: string | null;
        notes?: string | null;
    }
    interface IDetailResponse extends IResponse {
    }
    interface IQuery {
        shopId?: number;
        branchId?: string;
        station?: string;
        status?: string;
        date?: string;
        page?: number;
        limit?: number;
    }
}
