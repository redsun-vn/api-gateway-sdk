import { tags } from 'typia';
import { SEOBaseResponse, SEOBase } from '../common.type';
import { IThemeCategory, IThemeTag } from './itheme-category';
import { THEME_REVIEW_STATUS } from '../../enum';
export declare namespace ITheme {
    interface ICreateReq extends SEOBase {
        name: string;
        isSystem?: boolean;
        isPublic?: boolean;
        isActive?: boolean;
        price?: number;
        salePrice?: number;
        category_uuid?: string;
        tags?: string[];
        imagePreviewId?: number | string;
        isDefault?: boolean;
        description?: string | null;
        content?: string | null;
        config?: Record<string, any> | null;
    }
    interface ICreate extends ICreateReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IDuplicateReq {
        website_id?: string & tags.Format<'uuid'>;
        theme_id: string & tags.Format<'uuid'>;
    }
    interface IDuplicate extends IDuplicateReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IUpdateReq extends Partial<ICreate> {
    }
    interface IUpdate extends IUpdateReq {
        id: string;
        reviewStatus?: string & THEME_REVIEW_STATUS;
        reviewById?: number & tags.Type<'uint64'>;
    }
    interface IDuplicateSystemReq {
        theme_id: string & tags.Format<'uuid'>;
    }
    interface IResponse extends SEOBaseResponse {
        shop_id?: number | string | null;
        name: string;
        isSystem: boolean | null;
        isPublic: boolean | null;
        isActive: boolean | null;
        price: number | string | null;
        salePrice: number | string | null;
        category_uuid: string | null;
        category?: IThemeCategory.IResponse | null;
        tags?: IThemeTag.IResponse[] | null;
        imagePreviewId?: number | string | null;
        isDefault?: boolean;
        parentId?: string | null;
        reviewStatus?: string & THEME_REVIEW_STATUS;
        description?: string | null;
        content?: string | null;
        config?: Record<string, any> | null;
        reviewById?: number & tags.Type<'uint64'>;
    }
}
