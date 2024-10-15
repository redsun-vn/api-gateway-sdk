import { BaseResponse } from '../../common.type';
export declare namespace IAttendanceQR {
    interface IRequestCreate {
        branch_id: number;
        active: boolean;
        latitude: string;
        longitude: string;
        range: number;
    }
    interface ICreate {
        shop_id: number;
        branch_id: number;
        active: boolean;
        latitude: string;
        longitude: string;
        range: number;
    }
    interface IUpdate {
        active?: boolean;
        latitude?: string;
        longitude?: string;
        range?: number;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        uuid: string;
        active: boolean;
        latitude: string | null;
        longitude: string | null;
        range: number | null;
    }
}
