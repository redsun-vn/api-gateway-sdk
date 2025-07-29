import { AdminBaseResponse as BaseResponse } from '../../common.type';
export declare namespace ICRMEvent {
    interface ICreate {
        title: string;
        description?: string;
        event_type: string;
        priority_level: string;
        start_date: string;
        start_time: string;
        end_date?: string;
        end_time?: string;
        is_all_day: boolean;
        location_type: string;
        specific_address?: string;
        location_notes?: string;
        email?: string;
        main_purpose: string;
        agenda_details?: string;
        expected_outcomes?: string;
        reminder_enabled: boolean;
        deal_id: number | string;
        invited_customers?: number[];
        invited_employees?: number[];
    }
    interface IUpdate extends ICreate {
        id: number | string;
    }
    interface IResponse extends BaseResponse {
        title: string;
        description?: string;
        event_type: string;
        priority_level: string;
        start_date: string;
        start_time: string;
        end_date?: string;
        end_time?: string;
        is_all_day: boolean;
        location_type: string;
        specific_address?: string;
        location_notes?: string;
        email?: string;
        main_purpose: string;
        agenda_details?: string;
        expected_outcomes?: string;
        reminder_enabled: boolean;
        deal_id: number | string;
        invited_customers?: number[];
        invited_employees?: number[];
    }
}
