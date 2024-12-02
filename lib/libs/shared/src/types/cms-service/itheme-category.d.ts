import { BaseResponse } from '../common.type';
export declare namespace IThemeCategory {
    interface ICreate {
        name: string;
        isActive?: boolean;
    }
    interface IUpdateReq extends Partial<ICreate> {
    }
    interface IUpdate extends IUpdateReq {
        id: string;
    }
    interface IResponse extends BaseResponse {
        name: string;
        isActive: boolean;
    }
}
export declare namespace IThemeTag {
    interface ICreate {
        name: string;
        isActive?: boolean;
    }
    interface IUpdateReq extends Partial<ICreate> {
    }
    interface IUpdate extends IUpdateReq {
        id: string;
    }
    interface IResponse extends BaseResponse {
        name: string;
        isActive: boolean;
    }
}
