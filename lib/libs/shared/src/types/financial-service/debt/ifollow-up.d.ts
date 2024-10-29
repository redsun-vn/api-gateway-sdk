import { tags } from 'typia';
import { BaseResponse } from '../../common.type';
export declare namespace IFollowUpLine {
    interface ICreate {
        follow_up_level_id: number & tags.Type<'uint64'>;
        name: string;
        description?: string;
        delay: number;
        send_email: boolean;
        send_letter: boolean;
        send_sms: boolean;
        manual_action: boolean;
        automatic: boolean;
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'follow_up_level_id'> {
    }
    interface IResponse extends BaseResponse {
        name: string;
        description: string | null;
        delay: number | string;
        send_email: boolean;
        send_letter: boolean;
        send_sms: boolean;
        manual_action: boolean;
        automatic: boolean;
    }
}
export declare namespace IFollowUpLevel {
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        lines: IFollowUpLine.IResponse[];
    }
}
