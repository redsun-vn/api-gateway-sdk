import { BaseResponse } from '../common.type';
export declare namespace IWallet {
    interface ICreate {
        active?: boolean;
        partner_id: string | number;
        opt: string;
    }
    interface IUpdate {
        active?: boolean;
    }
    interface ISendOTP {
        partner_id: string;
    }
    interface IResponse extends BaseResponse {
        active?: boolean | null;
        shop_id?: string | number | null;
        totalAmount: number;
        uuid: string;
    }
}
