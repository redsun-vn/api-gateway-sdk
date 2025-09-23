import { BaseResponse } from '../common.type';
export declare namespace IWalletTransaction {
    interface ICreate {
        amount: number;
        shop_id: string | number;
        partner_id: string | number;
        product_id?: number;
        varant_id?: number;
    }
    interface IResponse extends BaseResponse {
        amount: string | number;
        transactionType: string;
        description?: string | null;
    }
}
