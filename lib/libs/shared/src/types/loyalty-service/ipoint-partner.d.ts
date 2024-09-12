import { BaseResponse } from '../common.type';
export declare namespace IPointPartner {
    interface ICreate {
        partner_id: string | number;
        totalPoints: number;
        loyalty_level_id?: string | number | null;
        expireDate?: string;
    }
    interface IUpdate {
        totalPoints?: number;
        loyalty_level_id?: string | number | null;
        expireDate?: string | number;
    }
    interface IResponse extends BaseResponse {
        partner_id: string | number;
        totalPoints: number;
        loyalty_level_id?: string | number | null;
        expireDate?: string | number | null;
    }
}
