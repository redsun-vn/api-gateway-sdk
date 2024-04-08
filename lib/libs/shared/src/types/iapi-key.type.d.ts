import { BaseResponse } from './common.type';
export declare namespace IApiKey {
    interface ICreate {
        name: string;
    }
    interface IUpdate {
        active?: boolean;
        name?: string;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        apiKey: string;
        name: string;
        active: boolean;
    }
}
