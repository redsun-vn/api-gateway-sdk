import { BaseResponse } from '../common.type';
export declare namespace IPartnerCategory {
    interface ICreate {
        name: string;
        isDefault?: boolean;
        active?: boolean;
        description?: string;
        image_id?: number;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        shop_id: string | number;
        name: string;
        active: boolean;
        description?: string;
        isDefault?: boolean;
        image_id: number | null;
    }
}
