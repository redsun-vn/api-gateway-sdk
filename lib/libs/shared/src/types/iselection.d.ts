import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace ISelection {
    interface IReqCreateSelection {
        selection_group_id: number & tags.Type<'uint32'>;
        name: string;
        price: number;
        originPrice: number;
        icon?: string | null | undefined;
        userId?: string;
    }
    interface ICreateSelection extends IReqCreateSelection {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateSelection {
        id?: string;
        name?: string;
        price?: number;
        originPrice?: number;
        icon?: string | null | undefined;
        userId?: string;
    }
    interface ISelectionResponse extends BaseResponse {
        name: string;
        shop_id: number | string | null;
        image_id?: number | string | null;
        parent_id?: number | string | null;
        icon?: string | null | undefined;
        createdBy: string | undefined | null;
        updatedBy: string | undefined | null;
    }
    interface IDeleteSelection {
        id: string;
    }
}
