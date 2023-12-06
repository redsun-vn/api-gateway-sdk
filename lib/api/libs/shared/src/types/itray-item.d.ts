import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace ITrayItem {
    interface IReqCreateTrayItem {
        branch_id: number & tags.Type<'uint32'>;
        code: string;
        shortTrayCode: string;
        userId?: string;
    }
    interface ICreateTrayItem extends IReqCreateTrayItem {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateTrayItem {
        id?: string;
        code?: string;
        shortTrayCode?: string;
        userId?: string;
    }
    interface ITrayItemResponse extends BaseResponse {
        shop_id: number | string | null;
        branch_id: number | string | null;
        code: string;
        shortTrayCode: string;
    }
    interface IDeleteTrayItem {
        id: string;
    }
}
