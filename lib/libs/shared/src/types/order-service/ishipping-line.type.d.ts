import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IShippingLine {
    interface ICreateShippingLine {
        shipping_method_id: number & tags.Type<'uint64'>;
        requested_fulfillment_id: number & tags.Type<'uint64'>;
        line_item_id: number & tags.Type<'uint64'>;
        title: string;
        phone: string;
        userId?: string;
    }
    interface ICreateShippingLineKafka extends ICreateShippingLine {
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IUpdateShippingLine {
        title?: string;
        phone?: string;
        userId?: string;
    }
    interface IDetailShippingLineResponse extends BaseResponse {
        shop_id: number | string | null;
        shipping_method_id: number | string | null;
        requested_fulfillment_id: number | string | null;
        line_item_id: number | string | null;
        title: string;
        phone: string;
    }
}
