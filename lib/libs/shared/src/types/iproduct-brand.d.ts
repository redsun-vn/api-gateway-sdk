import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IProductBrand {
    interface ICreateProductBrand {
        shop_id?: number & tags.Type<'uint32'>;
        parent_id?: number & tags.Type<'uint32'>;
        attachment_id?: number & tags.Type<'uint32'>;
        avatar_id?: number & tags.Type<'uint32'>;
        active?: boolean;
        name: string;
        description?: string | null;
    }
    interface IUpdateProductBrand {
        attachment_id?: number & tags.Type<'uint32'>;
        avatar_id?: number & tags.Type<'uint32'>;
        active?: boolean;
        name?: string;
        description?: string | null;
    }
    interface IDetailProductBrandResponse extends BaseResponse {
        shop_id: number | string | null;
        parent_id?: number | string | null;
        attachment_id?: number | string | null;
        avatar_id?: number | string | null;
        active?: boolean;
        name: string;
        description?: string | null;
        brandSlug?: string | null;
        parent?: IDetailProductBrandResponse | null;
        childrens?: IDetailProductBrandResponse[] | null;
    }
}
