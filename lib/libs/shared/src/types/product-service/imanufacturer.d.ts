import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IManufacturer {
    interface ICreateManufacturer {
        shop_id?: number & tags.Type<'uint32'>;
        parent_id?: number & tags.Type<'uint32'>;
        attachment_id?: number & tags.Type<'uint32'>;
        avatar_id?: number & tags.Type<'uint32'>;
        active?: boolean;
        name: string;
        description?: string | null;
    }
    interface IUpdateManufacturer {
        attachment_id?: number & tags.Type<'uint32'>;
        avatar_id?: number & tags.Type<'uint32'>;
        active?: boolean;
        name?: string;
        description?: string | null;
    }
    interface IDetailManufacturerResponse extends BaseResponse {
        shop_id: number | string | null;
        parent_id?: number | string | null;
        attachment_id?: number | string | null;
        avatar_id?: number | string | null;
        active?: boolean;
        name: string;
        description?: string | null;
        manufacturerSlug?: string | null;
        parent?: IDetailManufacturerResponse | null;
        childrens?: IDetailManufacturerResponse[] | null;
    }
}
