import { BaseResponse } from '../common.type';
export declare namespace ITomotekDevice {
    interface ICreate {
        tomotek_config_id: number;
        branch_id: number;
        name: string;
        serialNumber: string;
    }
    interface IUpdate {
        name?: string;
        active?: boolean;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        tomotek_config_id: number | string;
        name: string;
        serialNumber: string;
        active: boolean;
    }
}
