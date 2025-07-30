import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { EventPurpose, EventType, PriorityLevel } from '../../../enum/admin-service/event';
export declare namespace ICRMEvent {
    interface ICreate {
        company_id?: string;
        title: string;
        description?: string;
        event_type: EventType;
        priority_level: PriorityLevel;
        start_date: string;
        start_time: string;
        end_date?: string;
        end_time?: string;
        is_all_day: boolean;
        location_type: string;
        specific_address?: string | null;
        location_notes?: string | null;
        email?: string;
        main_purpose: EventPurpose;
        agenda_details?: string;
        expected_outcomes?: string;
        reminder_enabled: boolean;
        deal_id?: number | string | null;
        invited_customers?: number[];
        invited_employees?: number[];
    }
    interface IUpdate extends Partial<ICreate> {
        id: number | string;
    }
    interface IResponse extends BaseResponse {
        title: string;
        description?: string;
        event_type: EventType;
        priority_level: PriorityLevel;
        start_date: string;
        start_time: string;
        end_date?: string;
        end_time?: string;
        is_all_day: boolean;
        location_type: string;
        specific_address?: string | null;
        location_notes?: string | null;
        email?: string;
        main_purpose?: EventPurpose;
        agenda_details?: string;
        expected_outcomes?: string;
        reminder_enabled: boolean;
        deal_id?: number | string | null;
        invited_customers?: number[];
        invited_employees?: number[];
    }
}
