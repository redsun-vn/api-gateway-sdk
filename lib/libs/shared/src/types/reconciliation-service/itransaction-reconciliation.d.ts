import { BaseResponse } from '../common.type';
export declare namespace ITransactionReconciliation {
    interface IResponse extends BaseResponse {
        uuid: string;
        shop_id: number | string;
        transaction_id: number | string;
        reconciliation_id: number | string;
        orderCode: string;
        shippingCode: string;
        amount: string | number;
    }
}
