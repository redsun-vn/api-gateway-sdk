export declare namespace IFulfillment {
    interface IFulfillmentResponse {
        id: number | string;
        status?: string;
        orderCode?: string;
        trackingUrl?: string | null;
        chargePrice?: string | number | null;
        order_uuid?: string | null;
        shop_id: number | string;
        order_id: number | string;
        fulfillment_order_id: number | string;
        assigned_location_id: number | string;
        destination_id: number | string;
        shipping_method_id: number | string;
        shippingStatus?: string | null;
        cod?: number | string | null;
        note?: string | null;
        deletedAt: string | null;
        createdAt: string | null;
        updatedAt: string | null;
    }
}
