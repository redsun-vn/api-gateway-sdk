import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ISaleOrderTemplate {
    interface IListQuery {
        active?: boolean;
        page?: number & tags.Minimum<1>;
        limit?: number & tags.Minimum<1> & tags.Maximum<100>;
    }
    interface ICreateBody {
        name: string & tags.MinLength<1> & tags.MaxLength<255>;
        content_html: string & tags.MinLength<1>;
        default_terms?: string | null;
        validity_days?: (number & tags.Type<'uint32'>) | null;
        active?: boolean;
    }
    interface IUpdateBody {
        name?: string & tags.MinLength<1> & tags.MaxLength<255>;
        content_html?: string & tags.MinLength<1>;
        default_terms?: string | null;
        validity_days?: (number & tags.Type<'uint32'>) | null;
        active?: boolean;
    }
    interface IListInput extends IListQuery {
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IFindOneInput {
        shop_id: number & tags.Type<'uint64'>;
        id: string;
    }
    interface ICreateInput extends ICreateBody {
        shop_id: number & tags.Type<'uint64'>;
        created_by: number & tags.Type<'uint64'>;
    }
    interface IUpdateInput extends IUpdateBody {
        shop_id: number & tags.Type<'uint64'>;
        id: string;
        updated_by: number & tags.Type<'uint64'>;
    }
    interface IShopScopedAction extends IFindOneInput {
        updated_by: number & tags.Type<'uint64'>;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        name: string;
        content_html: string;
        default_terms: string | null;
        validity_days: number | null;
        is_default: boolean;
        active: boolean;
        created_by: number | string | null;
        updated_by: number | string | null;
    }
    interface IListResponse {
        items: IResponse[];
        total: number;
        page: number;
        limit: number;
    }
    interface IPublicTemplate {
        content_html: string;
    }
}
