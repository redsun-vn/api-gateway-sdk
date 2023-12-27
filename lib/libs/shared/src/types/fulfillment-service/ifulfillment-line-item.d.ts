export declare namespace IFulfillmentOrderItem {
    interface ILineItemResponse {
        id: string | number;
        variant_id: string | number;
        shop_id: string | number;
        order_id: string | number;
        fulfillment_order_id: string | number;
        line_item_id: string | number;
        stock_move_line_id: string | number | null;
        stock_quantity_id: string | number | null;
        quantity: number | string;
        fulfillableQuantity: number | string | null;
        createdAt: Date | string;
        updatedAt: Date | string;
    }
}
