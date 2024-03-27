import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ICheckout {
    interface ICreateCheckout {
        shop_id?: number & tags.Type<'uint64'>;
        partner_id: (number & tags.Type<'uint64'>) | (string & tags.Format<'uuid'>);
        order_id?: number & tags.Type<'uint64'>;
        uuid?: string;
        currency?: string;
        presentmentCurrency?: string;
        customerLocale?: string;
        totalAmount: number;
        totalDiscount?: number;
        totalTax?: number;
        note?: string;
    }
    interface IUpdateCheckout {
        currency?: string;
        presentmentCurrency?: string;
        customerLocale?: string;
        totalAmount?: number;
        totalDiscount?: number;
        note?: string;
    }
    interface ICheckoutResponse extends BaseResponse {
        shop_id: number | string | null;
        partner_id: number | string | null;
        order_id?: number | string | null;
        uuid?: string;
        currency: string;
        presentmentCurrency: string;
        customerLocale: string;
        totalAmount: number | string;
        totalDiscount: number | string;
        note: string;
    }
}
