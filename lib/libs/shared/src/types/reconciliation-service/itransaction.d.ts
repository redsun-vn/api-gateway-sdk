import { BaseResponse } from '../common.type';
export declare namespace ITransactionReconService {
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        shipping_method_id: number | string;
        admin_reconciliation_id: number | string;
        admin_reconciliation_item_id: number | string;
        uuid: string;
        fulfillment_id: number | string;
        orderCode: string;
        shippingCode: string;
        name?: string;
        amount: number | string;
        serviceFee: number | string;
        status: string;
    }
}
