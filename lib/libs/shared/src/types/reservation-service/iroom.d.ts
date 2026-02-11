import { BaseResponse } from '../common.type';
import { ITable } from './itable';
export declare namespace IRoom {
    interface ICreate {
        branch_id: number;
        floor_plan_id: number;
        name: string;
        description?: string;
        active?: boolean;
        product_id?: number;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IRoomResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        floor_plan_id: number | string;
        name: string;
        description?: string | null;
        active: boolean;
        product_id?: number | string | null;
        tables?: null | ITable.ITableResponse[];
    }
}
