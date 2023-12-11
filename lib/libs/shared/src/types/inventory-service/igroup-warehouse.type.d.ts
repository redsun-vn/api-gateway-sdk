import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IGroupWarehouse {
    interface ICreateGroupWarehouse {
        shop_id?: number & tags.Type<'uint32'>;
        name: string;
        country: string;
        city: string;
        fulfillable: boolean;
        stockable: boolean;
        lotable: boolean;
    }
    interface IUpdateGroupWarehouse {
        name?: string;
        country?: string;
        city?: string;
        fulfillable?: boolean;
        stockable?: boolean;
        lotable?: boolean;
    }
    interface IGroupWarehouseResponse extends BaseResponse {
        shop_id: number | string | null;
        name: string;
        country: string;
        city: string;
        fulfillable?: boolean;
        stockable?: boolean;
        lotable?: boolean;
    }
}
