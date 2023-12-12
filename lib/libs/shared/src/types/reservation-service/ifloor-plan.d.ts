import { BaseResponse } from '../common.type';
import { IRoom } from './iroom';
import { ITable } from './itable';
export declare namespace IFloorPlan {
    interface ICreate {
        branch_id: number;
        name: string;
        description?: string;
        active?: boolean;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IFloorPlanResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        name: string;
        description?: string | null;
        active: boolean;
        tables?: null | ITable.ITableResponse[];
        rooms?: null | IRoom.IRoomResponse[];
    }
}
