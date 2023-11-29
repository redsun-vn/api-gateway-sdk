import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IWarehouse {
    interface ICreateWarehouse {
        shop_id?: number & tags.Type<'uint32'>;
        branch_id: number & tags.Type<'uint32'>;
        name: string;
        abbreviation: string;
        country: string;
        city: string;
        state?: string;
        address: string;
        latitude: string;
        longitude: string;
        sequence: number;
    }
    interface IUpdateWarehouse {
        name?: string;
        abbreviation?: string;
        country?: string;
        city?: string;
        state?: string;
        address?: string;
        latitude?: string;
        longitude?: string;
        sequence?: number;
    }
    interface IWarehouseResponse extends BaseResponse {
        shop_id: number | string | null;
        branch_id: number | string | null;
        view_location_id: number | string | null;
        stock_location_id: number | string | null;
        code: string;
        name: string;
        abbreviation: string;
        country: string;
        city: string;
        state?: string;
        address: string;
        latitude: string;
        longitude: string;
        sequence: number | string;
    }
}
