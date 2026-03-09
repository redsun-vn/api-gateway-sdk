import { BaseResponse } from '../common.type';
export interface AutomationSettings {
    enabled: boolean;
    auto_checkout_enabled: boolean;
    auto_complete_enabled: boolean;
    auto_complete_delay_hours: number;
    auto_cleaning_note: boolean;
    checkout_time: string;
    checkin_time: string;
}
export declare namespace IReservationConfig {
    interface ICreate {
        product_ids?: string[];
        staff_ids?: string[];
        automation_settings?: AutomationSettings;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IReservationConfigResponse extends BaseResponse {
        shop_id: number | string;
        product_ids?: string[] | null;
        staff_ids?: string[] | null;
        automation_settings?: AutomationSettings | null;
    }
}
