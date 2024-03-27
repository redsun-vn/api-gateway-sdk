import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ITag {
    interface IReqCreateTag {
        name: string;
        icon?: string | null | undefined;
        parent_id?: number & tags.Type<'uint64'>;
        image_id?: number & tags.Type<'uint64'>;
        userId?: string;
    }
    interface ICreateTag extends IReqCreateTag {
        shop_id?: number & tags.Type<'uint64'>;
    }
    interface IOnCreateTag {
        name: string;
        icon?: string | null | undefined;
        shopId: number & tags.Type<'uint64'>;
        imageId?: number & tags.Type<'uint64'>;
        parentId?: number & tags.Type<'uint64'>;
        userId?: string;
    }
    interface IUpdateTag {
        name?: string;
        active?: boolean;
        icon?: string | null | undefined;
        parent_id?: number & tags.Type<'uint64'>;
        image_id?: number & tags.Type<'uint64'>;
        userId?: string;
    }
    interface IOnUpdateTag {
        name?: string;
        active?: boolean;
        icon?: string | null | undefined;
        imageId?: number & tags.Type<'uint64'>;
        parentId?: number & tags.Type<'uint64'>;
        userId?: string;
    }
    interface IDetailTagResponse extends BaseResponse {
        name: string;
        shop_id: string | number | null;
        image_id: string | number | null;
        parent_id: string | number | null;
        icon: string | undefined | null;
        active?: boolean;
        tagsSlug: string | undefined | null;
        createdBy: string | undefined | null;
        updatedBy: string | undefined | null;
    }
}
