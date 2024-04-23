import { BaseResponse } from '../common.type';
export declare namespace IOrderReconciliation {
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        status: string;
        admin_reconciliation_id: number | string | null;
        shipping_method_id: number | string;
        fulfillment_id: number | string;
        shippingCode: string;
        orderCode: string;
        cod: number | string;
        chargePrice: number | string;
        fulfillmentShippingStatus: string;
    }
}
