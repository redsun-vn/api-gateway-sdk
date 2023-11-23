import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IPricebookItem {
    interface IReqCreatePricebookItem {
        price_book_id: number & tags.Type<'uint32'>;
        variant_id: number & tags.Type<'uint32'>;
        salePrice?: number;
        differencePrice?: number;
        userId?: string;
    }
    interface ICreatePricebookItem extends IReqCreatePricebookItem {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdatePricebookItem {
        id?: string;
        salePrice?: number;
        differencePrice?: number;
        userId?: string;
    }
    interface IPricebookItemResponse extends BaseResponse {
        shop_id: string | number | null;
        price_book_id: string | number | null;
        variant_id: string | number | null;
        salePrice: number | string | null;
        differencePrice: number | string | null;
    }
    interface IDeletePricebookItem {
        id: string;
    }
}
