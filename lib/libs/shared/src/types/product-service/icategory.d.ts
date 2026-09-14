import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ICategory {
    interface IReqCreateCategory {
        name: string;
        parent_id?: number & tags.Type<'uint64'>;
        image_id?: number & tags.Type<'uint64'>;
        icon?: string;
        active?: boolean;
        description?: string;
        htmlContent?: string;
        userId?: string;
        categorySlug?: string;
        metaTitle?: string | null;
        metaDescription?: string | null;
        metaKeywords?: string | null;
        metaOgImage?: (number & tags.Type<'uint64'>) | null;
    }
    interface ICreateCategory extends IReqCreateCategory {
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IUpdateCategory {
        name?: string;
        active?: boolean;
        icon?: string | null | undefined;
        image_id?: number & tags.Type<'uint64'>;
        description?: string | null;
        htmlContent?: string | null;
        userId?: string | null;
        parent_id?: number & tags.Type<'uint64'>;
        categorySlug?: string;
        metaTitle?: string | null;
        metaDescription?: string | null;
        metaKeywords?: string | null;
        metaOgImage?: (number & tags.Type<'uint64'>) | null;
    }
    interface IDetailResponse extends BaseResponse {
        shop_id: string | number | null;
        name: string;
        description?: string | null;
        htmlContent?: string | null;
        icon?: string | null;
        parent_id?: string | number | null;
        image_id?: string | number | null;
        level?: number | string;
        active?: boolean;
        categoriesSlug?: string | null;
        categoryFlattened?: string | null;
        parentName?: string | null;
        sortOrder?: number | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        parent?: IDetailResponse | null;
        childrens?: IDetailResponse[] | null;
        categorySlug?: string | null;
        metaTitle?: string | null;
        metaDescription?: string | null;
        metaKeywords?: string | null;
        metaOgImage?: string | number | null;
    }
}
