import { BaseResponse } from '../../common.type';
export declare namespace IDeviceCategory {
    interface ICreate {
        name: string;
        description?: string;
        active?: boolean;
    }
    interface IUpdate {
        name?: string;
        description?: string;
        active?: boolean;
    }
    interface IResponse extends BaseResponse {
        name: string;
        description?: string | null;
        active: boolean;
    }
}
