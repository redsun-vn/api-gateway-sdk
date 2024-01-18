import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IAdminReconciliationItem {
    interface ICreate {
        shop_id: number & tags.Type<'uint32'>;
        shipping_method_id: number & tags.Type<'uint32'>;
        fulfillment_id: number & tags.Type<'uint32'>;
        fulfillmentShippingStatus: string;
        order_uuid: string & tags.Format<'uuid'>;
        orderCode: string;
        cod: number;
        chargePrice: number;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        status: string;
        admin_reconciliation_id: number | string;
        shipping_method_id: number | string;
        fulfillment_id: number | string;
        order_uuid: string;
        shippingCode: string;
        orderCode: string;
        cod: number | string;
        chargePrice: number | string;
        fulfillmentShippingStatus: string;
    }
}
