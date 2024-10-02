import { BaseResponse } from '../common.type';
export declare namespace ITable {
    interface ICreate {
        branch_id: number;
        floor_plan_id?: number;
        room_id?: number;
        name: string;
        maxAdult?: number;
        maxChild?: number;
        description?: string;
        active?: boolean;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface ITableResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        floor_plan_id: number | string | null;
        room_id: number | string | null;
        name: string;
        maxAdult?: number | null;
        maxChild?: number | null;
        description?: string | null;
        active: boolean;
    }
}
