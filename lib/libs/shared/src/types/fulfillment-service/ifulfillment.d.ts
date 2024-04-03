import { IFulfillmentOrder } from './ifulfillment-order';
export declare namespace IFulfillment {
    interface IFulfillmentResponse {
        id: number | string;
        status: string;
        fulfillment_order_uuid?: string;
        orderCode?: string;
        trackingUrl?: string;
        chargePrice?: number | string | null;
        order_uuid: string;
        shop_id: number | string;
        order_id: number | string;
        fulfillment_order_id: number | string;
        assigned_location_id: number | string;
        destination_id: number | string;
        shipping_method_id: number | string;
        shippingStatus: string;
        shippingCode?: string | null;
        cod: number | string | null;
        note: string | null;
        fulfillmentOrder?: IFulfillmentOrder.IFulfillmentOrderResponse | null;
        deletedAt: string | null;
        createdAt: string | null;
        updatedAt: string | null;
    }
    interface IUpdateCod {
        cod: number;
    }
}
