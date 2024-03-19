import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ITax {
    interface ICreateTax {
        shop_id?: number & tags.Type<'uint64'>;
        name?: string;
        code: string;
        description?: string | null;
        rate: number;
        ratePercentage: number & tags.Type<'int32'>;
        active?: boolean;
    }
    interface IUpdateTax {
        name?: string;
        code?: string;
        description?: string | null;
        rate?: number;
        ratePercentage?: number & tags.Type<'int32'>;
        active?: boolean;
    }
    interface IDetailTaxResponse extends BaseResponse {
        shop_id: number | string | null;
        code: string;
        name?: string | null;
        description?: string | null;
        rate: number | string;
        ratePercentage: number | string;
        active?: boolean;
    }
}
