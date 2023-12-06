import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace ISelectionGroup {
    interface IReqCreateSelectionGroup {
        product_id: number & tags.Type<'uint32'>;
        name: string;
        active: boolean;
        icon?: string | null | undefined;
        userId?: string;
    }
    interface ICreateSelectionGroup extends IReqCreateSelectionGroup {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateSelectionGroup {
        id?: string;
        name?: string;
        active?: boolean;
        icon?: string | null | undefined;
        userId?: string;
    }
    interface ISelectionGroupResponse extends BaseResponse {
        shop_id: number | string | null;
        image_id?: number | string | null;
        product_id: number | string | null;
        name: string;
        active: boolean;
        icon?: string | null | undefined;
        createdBy: string | undefined | null;
        updatedBy: string | undefined | null;
    }
    interface IDeleteSelectionGroup {
        id: string;
    }
}
