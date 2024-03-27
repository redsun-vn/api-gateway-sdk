import { tags } from 'typia';
import { IFulfillmentOrderItem } from './ifulfillment-line-item';
import { FULFILLMENT_ORDER_STATUS, FULFILLMENT_REQUEST_STATUS, PAYMENT_TARGET, RECEIVE_METHOD } from '../../enum';
export declare namespace IFulfillmentOrder {
    interface ICreateFulfillmentOrder {
        order_id: number & tags.Type<'uint64'>;
        shipping_method_id: number & tags.Type<'uint64'>;
        destination_id: number & tags.Type<'uint64'>;
        assigned_location_id: number & tags.Type<'uint64'>;
        fulfillHoleReason?: string;
        fulfillHoleReasonNotes?: string;
        lineItems: ICreateFulfillmentOrderItems[];
    }
    interface IUpdateFulfillmentOrderItem {
        stock_move_line_id: number & tags.Type<'uint64'>;
        stock_quantity_id: number & tags.Type<'uint64'>;
    }
    interface ICancelFulfillmentOrder {
        cancelReason: string;
    }
    interface ICreateFulfillmentOrderItems {
        fulfillHoleReason?: string;
        fulfillHoleReasonNotes?: string;
        line_item_id: number & tags.Type<'uint64'>;
        stock_move_line_id?: number & tags.Type<'uint64'>;
        stock_quantity_id?: number & tags.Type<'uint64'>;
        quantity?: number;
        fulfillableQuantity?: number;
        variant_id: number & tags.Type<'uint64'>;
    }
    interface IFulfillmentOrderRequestShipping {
        cod: number;
        paymentTarget: string & PAYMENT_TARGET;
        receiveMethod: string & RECEIVE_METHOD;
        note?: string;
        weight: number;
        length: number;
        width: number;
        height: number;
    }
    interface IUpdateFulfillmentOrder {
        status?: string & FULFILLMENT_ORDER_STATUS;
        requestStatus?: string & FULFILLMENT_REQUEST_STATUS;
        fulfillHoldReason?: string;
        fulfillHoldReasonNotes?: string;
    }
    interface IFulfillmentOrderResponse {
        id: string | number;
        uuid: string;
        staff_id: string | number;
        partner_id: string | number;
        shop_id: string | number;
        orderCode: string;
        order_id: string | number;
        order_uuid: string;
        fulfillment_id: string | number | null;
        assigned_location_id: string | number;
        destination_id: string | number;
        weight: number;
        shipping_method_id: string | number;
        status: string;
        requestStatus: string;
        fulfillAt: string | null;
        fulfillBy: number | string | null;
        fulfillHoldReason: string | null;
        fulfillHoldReasonNote: string | null;
        cancelReason?: string | null;
        cancelled_by?: string | number | null;
        cancelledAt?: string | null;
        lineItems: IFulfillmentOrderItem.ILineItemResponse[] | [];
        paymentTarget?: (string & PAYMENT_TARGET) | null;
        receiveMethod?: (string & RECEIVE_METHOD) | null;
        length?: number;
        width?: number;
        height?: number;
        deletedAt: string | null;
        createdAt: string | null;
        updatedAt: string | null;
    }
    interface IFulfillmentOrderDetailResponse {
        id: string | number;
        uuid?: string;
        shop_id: string | number;
        staff_id: string | number;
        partner_id: string | number;
        order_id: string | number;
        orderCode: string;
        order_uuid: string;
        assigned_location_id: string | number;
        destination_id: string | number;
        shipping_method_id: string | number;
        status: string;
        weight: number;
        requestStatus: string;
        fulfillAt: string | null;
        fulfillBy: number | string | null;
        fulfillHoldReason: string | null;
        fulfillHoldReasonNote: string | null;
        cancelReason?: string | null;
        cancelled_by?: string | number | null;
        cancelledAt?: string | null;
        paymentTarget?: (string & PAYMENT_TARGET) | null;
        receiveMethod?: (string & RECEIVE_METHOD) | null;
        length?: number;
        width?: number;
        height?: number;
        lineItems: IFulfillmentOrderItem.ILineItemResponse[];
        shop: {
            id: string | number;
            name: string;
            zipcode?: string | null;
            active: boolean;
            needConfig: boolean;
            multiBranchEnabled: boolean;
            defaultCurrencyCode: string;
            business_type_id?: null | string;
            shopOwnerId: string;
            metadata?: string | null;
        };
        partner: {
            shop_id: number | string;
            uuid?: string | null;
            branch_id?: number | null;
            user_id?: number | null;
            attachment_id?: number | null;
            first_name?: string | null;
            last_name?: string | null;
            display_name?: string | null;
            email?: string | null;
            phone?: string | null;
            company_name?: string | null;
            day_of_birth?: string | null;
            code?: string | null;
            active: boolean;
            orders_count?: number | null;
            accepts_marketing: boolean;
            is_employee: boolean;
            is_company: boolean;
            is_customer: boolean;
            is_supplier: boolean;
            tax_code?: string | null;
            website?: string | null;
            note?: string | null;
            gender?: number | null;
        } | null;
        partnerAddress: {
            partner_id: number | string;
            type: string;
            function?: string | null;
            country?: string | null;
            first_name?: string | null;
            last_name?: string | null;
            phone?: string | null;
            province?: string | null;
            city?: string | null;
            state?: string | null;
            zipcode?: string | null;
            address1?: string | null;
            address2?: string | null;
            company?: string | null;
            note?: string | null;
        } | null;
        deletedAt: string | null;
        createdAt: string | null;
        updatedAt: string | null;
    }
}
