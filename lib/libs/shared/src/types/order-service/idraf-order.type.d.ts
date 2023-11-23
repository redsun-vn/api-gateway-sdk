import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ILineItem } from './iline-item.type';
export declare namespace IDrafOrder {
    interface ICreateDrafOrder {
        branch_id: number & tags.Type<'uint32'>;
        staff_id: number & tags.Type<'uint32'>;
        sale_channel_id: number & tags.Type<'uint32'>;
        billing_address_id?: number & tags.Type<'uint32'>;
        shipping_address_id?: number & tags.Type<'uint32'>;
        partner_id?: number & tags.Type<'uint32'>;
        email: string;
        phone: string;
        currency_code?: string;
        note?: string;
        description?: string;
        tags?: string;
        status: string;
        lineItems: ILineItem.IInputLineItem[];
    }
    interface ICreateDrafOrderKafka extends ICreateDrafOrder {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateDrafOrder {
        billing_address_id?: number & tags.Type<'uint32'>;
        shipping_address_id?: number & tags.Type<'uint32'>;
        email?: string;
        phone?: string;
        currency_code?: string;
        note?: string;
        description?: string;
        tags?: string;
        total?: number;
        sub_total?: number;
        tax_total?: number;
        discount_total?: number;
        status?: string;
        completedAt?: Date;
        canceledAt?: Date;
        userId?: string;
    }
    interface IDetailDrafOrderResponse extends BaseResponse {
        shop_id: string | number | null;
        branch_id: string | number | null;
        staff_id: string | number | null;
        sale_channel_id: string | number | null;
        billing_address_id: string | number | null;
        shipping_address_id: string | number | null;
        partner_id: string | number | null;
        idempotency_key: string;
        code: string;
        email: string;
        phone: string;
        currency_code: string;
        note: string;
        description: string;
        tags: string;
        total: number | string;
        totalPrice: number | string;
        subTotal: number | string;
        taxTotal: number | string;
        discountTotal: number | string;
        totalWeight?: number | string;
        shippingTotal?: number | string;
        status: string;
        completedAt: Date | null;
        canceledAt: Date | null;
        lineItems?: ILineItem.IDetailLineItemResponse[] | undefined;
    }
}
