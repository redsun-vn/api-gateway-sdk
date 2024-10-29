import { BaseResponse } from '../../common.type';
export declare namespace IPaymentReminder {
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        source_id: number | string | null;
        source: string | null;
        partner_uuid: string | null;
        reminder_date: string | null;
        status: 'pending' | 'sent' | 'failed';
        send_email: boolean;
        send_sms: boolean;
        follow_up_id: number | string | null;
        next_follow_up_id: number | string | null;
        description: string | null;
        type: 'shop' | 'partner';
    }
}
