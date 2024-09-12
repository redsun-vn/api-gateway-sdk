import { POINT_TRANSACTION_TYPE_ENUM } from '../../enum/loyalty-service';
import { BaseResponse } from '../common.type';
export declare namespace IPointTransaction {
    interface ICreate {
        partnerId: string | number;
        points: number;
        transactionType: string & POINT_TRANSACTION_TYPE_ENUM;
        program_id: string | number;
        reward_id: string | number;
        description?: string | null;
    }
    interface IResponse extends BaseResponse {
        partnerId: string | number;
        points: string | number;
        transactionType: string | number;
        program_id: string | number;
        reward_id: string | number;
        description?: string | null;
    }
}
