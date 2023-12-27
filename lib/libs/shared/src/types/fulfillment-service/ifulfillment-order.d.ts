import { tags } from 'typia';
import { IFulfillmentOrderItem } from './ifulfillment-line-item';
import { FULFILLMENT_ORDER_STATUS, FULFILLMENT_REQUEST_STATUS } from '../../enum';
export declare namespace IFulfillmentOrder {
    interface ICreateFulfillmentOrder {
        order_id: number & tags.Type<'uint32'>;
        shop_id: number & tags.Type<'uint32'>;
        partner_id: number & tags.Type<'uint32'>;
        shipping_method_id: number & tags.Type<'uint32'>;
        destination_id: number & tags.Type<'uint32'>;
        assigned_location_id: number & tags.Type<'uint32'>;
        fulfillHoleReason?: string;
        fulfillHoleReasonNotes?: string;
        lineItems: ICreateFulfillmentOrderItems[];
    }
    interface IUpdateFulfillmentOrderItem {
        stock_move_line_id: number & tags.Type<'uint32'>;
        stock_quantity_id: number & tags.Type<'uint32'>;
    }
    interface ICancelFulfillmentOrder {
        note?: string;
    }
    interface ICreateFulfillmentOrderItems {
        fulfillHoleReason?: string;
        fulfillHoleReasonNotes?: string;
        line_item_id: number & tags.Type<'uint32'>;
        stock_move_line_id?: number & tags.Type<'uint32'>;
        stock_quantity_id?: number & tags.Type<'uint32'>;
        quantity?: number;
        fulfillableQuantity?: number;
        variant_id: number & tags.Type<'uint32'>;
    }
    interface IFulfillmentOrderRequestShipping {
        length: number;
        width: number;
        height: number;
    }
    interface IUpdateFulfillmentOrder {
        status?: string & FULFILLMENT_ORDER_STATUS;
        requestStatus?: string & FULFILLMENT_REQUEST_STATUS;
        fulfillHoldReason?: string;
        fulfillHoldReasonNotes?: string;
        quantity?: number;
        fulfillableQuantity?: number;
    }
    interface IFulfillmentOrderResponse {
        id: string | number;
        uuid?: string | null;
        shop_id: string | number;
        order_id: string | number;
        assigned_location_id: string | number;
        destination_id: string | number;
        shipping_method_id: string | number;
        status: string;
        requestStatus: string;
        fulfillAt: string | null;
        fulfillBy: string | null;
        fulfillHoldReason: string | null;
        fulfillHoldReasonNote: string | null;
        lineItems: IFulfillmentOrderItem.ILineItemResponse[];
        deletedAt: string | null;
        createdAt: string | null;
        updatedAt: string | null;
    }
    interface IFulfillmentOrderDetailResponse {
        id: string | number;
        shop_id: string | number;
        uuid?: string | null;
        order_id: string | number;
        assigned_location_id: string | number;
        destination_id: string | number;
        shipping_method_id: string | number;
        status: string;
        requestStatus: string;
        fulfillAt: string | null;
        fulfillBy: string | null;
        fulfillHoldReason: string | null;
        fulfillHoldReasonNote: string | null;
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
