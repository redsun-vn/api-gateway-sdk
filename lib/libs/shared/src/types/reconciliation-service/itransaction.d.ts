import { BaseResponse } from '../common.type';
export declare namespace ITransactionReconService {
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        shipping_method_id: number | string;
        admin_reconciliation_id: number | string;
        fulfillment_id: number | string;
        orderCode: string;
        type: string;
        name?: string;
        amount: number;
        serviceFee: number;
        status: string;
    }
}
