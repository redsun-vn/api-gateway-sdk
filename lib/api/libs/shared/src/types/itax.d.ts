import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace ITax {
    interface IReqCreateTax {
        name: string;
        title: string;
        description: string;
        value: number;
        active: boolean;
        userId?: string;
    }
    interface ICreateTax extends IReqCreateTax {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateTax {
        name?: string;
        title?: string;
        description?: string;
        value?: number;
        active?: boolean;
        userId?: string;
    }
    interface IDetailTaxResponse extends BaseResponse {
        name: string;
        shop_id: number | string | null;
        title?: string;
        description?: string;
        value?: number | string;
        active?: boolean;
        createdBy: string | undefined | null;
        updatedBy: string | undefined | null;
    }
}
