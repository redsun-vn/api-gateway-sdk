import { POINT_TRANSACTION_TYPE_ENUM } from '../../enum/loyalty-service';
import { BaseResponse } from '../common.type';
export declare namespace IPointTransaction {
    interface ICreate {
        partner_id: string | number;
        points: number;
        resource?: string;
        transactionType: string & POINT_TRANSACTION_TYPE_ENUM;
        program_id?: string | number;
        reward_id?: string | number;
        description?: string | null;
    }
    interface IResponse extends BaseResponse {
        shop_id?: string | number | null;
        partner_id: string | number;
        points: number;
        transactionType: string | number;
        resource?: string | null;
        program_id?: string | number | null;
        reward_id?: string | number | null;
        description?: string | null;
    }
}
