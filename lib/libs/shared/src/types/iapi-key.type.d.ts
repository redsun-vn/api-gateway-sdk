import { BaseResponse } from './common.type';
export declare namespace IApiKey {
    interface ICreate {
        shop_id: number;
    }
    interface IUpdate {
        active: boolean;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        apiKey: string;
        active: boolean;
    }
}
