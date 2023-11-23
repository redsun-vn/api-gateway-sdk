import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace ICategory {
    interface IReqCreateCategory {
        name: string;
        parent_id?: number & tags.Type<'uint32'>;
        image_id?: number & tags.Type<'uint32'>;
        icon?: string;
        description?: string;
        htmlContent?: string;
        userId?: string;
    }
    interface ICreateCategory extends IReqCreateCategory {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateCategory {
        name: string;
        active?: boolean;
        icon?: string | null | undefined;
        parent_id?: number & tags.Type<'uint32'>;
        image_id?: number & tags.Type<'uint32'>;
        description?: string | null | undefined;
        htmlContent?: string | null | undefined;
        userId?: string | null | undefined;
    }
    interface IDetailResponse extends BaseResponse {
        shop_id: string | number | null;
        name: string;
        description?: string | undefined | null;
        htmlContent?: string | undefined | null;
        icon: string | undefined | null;
        parent_id: string | number | null;
        image_id?: string | number | null;
        level: number;
        active?: boolean;
        categoriesSlug: string | undefined | null;
        parentName?: string | undefined | null;
        sortOrder?: number | undefined | null;
        createdBy: string | undefined | null;
        updatedBy: string | undefined | null;
    }
}
