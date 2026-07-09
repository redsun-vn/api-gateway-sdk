import { BaseResponse } from '../common.type';
export declare namespace IResourceType {
    interface ICreate {
        name: string;
        description?: string;
        branch_id?: number;
        active?: boolean;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IResourceTypeResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string | null;
        name: string;
        description?: string | null;
        active: boolean;
    }
}
