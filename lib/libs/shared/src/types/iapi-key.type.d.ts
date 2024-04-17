import { BaseResponse } from './common.type';
import { IShop } from './ishop';
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
        shop?: IShop.IShopResponse;
    }
    interface IAdminCreate {
        name: string;
    }
    interface IAdminUpdate {
        active?: boolean;
        name?: string;
    }
    interface IAdminResponse extends BaseResponse {
        apiKey: string;
        name: string;
        active: boolean;
    }
}
