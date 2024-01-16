import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ILineItem } from './iline-item.type';
import { DrafOrderStatus } from '../../enum';
import { IOrder } from './iorder.type';
export declare namespace IDrafOrder {
    interface ICreateDrafOrder {
        branch_id: number & tags.Type<'uint32'>;
        staff_id: number & tags.Type<'uint32'>;
        sale_channel_id?: (number & tags.Type<'uint32'>) | null;
        billing_address_id?: (number & tags.Type<'uint32'>) | null;
        shipping_address_id?: (number & tags.Type<'uint32'>) | null;
        partner_id?: (string & tags.Format<'uuid'>) | null;
        email?: string | null;
        phone?: string | null;
        currency_code?: string;
        code?: string | null;
        note?: string | null;
        description?: string | null;
        tags?: string | null;
        status?: DrafOrderStatus;
        lineItems: ILineItem.IInputLineItem[];
    }
    interface ICreateDrafOrderKafka extends ICreateDrafOrder {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateDrafOrder {
        billing_address_id?: number & tags.Type<'uint32'>;
        shipping_address_id?: number & tags.Type<'uint32'>;
        partner_id?: string & tags.Format<'uuid'>;
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
        status?: DrafOrderStatus;
        completedAt?: string & tags.Format<'date-time'>;
        canceledAt?: string & tags.Format<'date-time'>;
        lineItems?: Omit<Partial<ILineItem.IInputLineItem>, 'product_id' | 'variant_id' | 'uom_uom_id'>[];
    }
    interface IConfirmDrafOrder {
        warehouse_id: number & tags.Type<'uint32'>;
    }
    interface IDetailDrafOrderResponse extends BaseResponse {
        shop_id: string | number | null;
        branch_id: string | number | null;
        staff_id: string | number | null;
        sale_channel_id?: string | number | null;
        billing_address_id?: string | number | null;
        shipping_address_id?: string | number | null;
        order_id?: string | number | null;
        partner_id?: string | number | null;
        idempotency_key: string | null | number;
        code: string;
        email?: string | null;
        phone?: string | null;
        currency_code?: string | null;
        note?: string | null;
        description?: string | null;
        tags?: string | null;
        total?: number | string;
        totalPrice?: number | string;
        subTotal?: number | string;
        taxTotal?: number | string;
        discountTotal?: number | string;
        totalWeight?: number | string;
        shippingTotal?: number | string;
        status: string;
        completedAt?: string | null;
        canceledAt?: string | null;
        lineItems?: ILineItem.IDetailLineItemResponse[] | null;
        order?: IOrder.IDetailOrderResponse | null;
    }
}
