import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IAdditionalFee {
    interface ICreateAdditionalFee {
        order_id: number & tags.Type<'uint32'>;
        name: string;
        price: number;
        userId?: string;
    }
    interface ICreateAdditionalFeeKafka extends ICreateAdditionalFee {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateAdditionalFee {
        name?: string;
        price?: number;
        userId?: string;
    }
    interface IDetailAdditionalFeeResponse extends BaseResponse {
        shop_id: number | string | null;
        order_id: number | string | null;
        name: string;
        price: number | string;
    }
}
