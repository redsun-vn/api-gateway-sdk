import { BaseResponse } from '../common.type';
import { ILoyaltyLevel } from './iloyalty-level';
export declare namespace IPointPartner {
    interface ICreate {
        active?: boolean;
        partner_id: string | number;
        totalPoints?: number;
        availablePoints?: number;
        loyalty_level_id?: string | number | null;
        expireDate?: string;
    }
    interface IUpdate {
        totalPoints?: number;
        availablePoints?: number;
        loyalty_level_id?: string | number | null;
        expireDate?: string | number;
    }
    interface IResponse extends BaseResponse {
        shop_id?: string | number | null;
        active?: boolean | null;
        level?: ILoyaltyLevel.IResponse | null;
        partner_id: string | number;
        totalPoints: number;
        availablePoints: number;
        loyalty_level_id?: string | number | null;
        expireDate?: string | number | null;
    }
}
