import { tags } from 'typia';
import { SaleOrderActivityAction } from '../../enum';
export declare namespace ISaleOrderActivity {
    interface IMetadata {
        delivery?: 'queued';
        to?: string[];
        cc?: string[];
        subject?: string;
        attachment_count?: number;
        template_id?: number | string;
        has_message?: boolean;
        attachment_ids?: (number | string)[];
    }
    interface ICreateBody {
        action: SaleOrderActivityAction.PRINT | SaleOrderActivityAction.DOWNLOAD;
    }
    interface ICreateInput extends ICreateBody {
        shop_id: number & tags.Type<'uint64'>;
        sale_order_id: string;
        actor_id: number & tags.Type<'uint64'>;
    }
    interface IListQuery {
        page?: number & tags.Minimum<1>;
        limit?: number & tags.Minimum<1> & tags.Maximum<100>;
    }
    interface IListInput extends IListQuery {
        shop_id: number & tags.Type<'uint64'>;
        sale_order_id: string;
    }
    interface IResponse {
        id: number | string;
        shop_id: number | string;
        sale_order_id: number | string;
        action: SaleOrderActivityAction;
        actor_id: number | string | null;
        metadata: IMetadata | null;
        createdAt: Date | string;
    }
    interface IListResponse {
        items: IResponse[];
        total: number;
        page: number;
        limit: number;
    }
}
