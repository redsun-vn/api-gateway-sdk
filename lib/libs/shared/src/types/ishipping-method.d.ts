import { BaseResponse } from './common.type';
export declare namespace IShippingMethod {
    interface ICreate {
        name: string;
        code: string;
        active?: boolean;
        description?: string;
        icon?: string;
        attachment_id?: number;
        metadata?: string;
    }
    type IUpdate = Omit<Partial<ICreate>, 'code'>;
    interface IShippingMethodResponse extends BaseResponse {
        name: string;
        code: string;
        active: boolean;
        description?: null | string;
        icon?: string | null;
        attachment_id?: null | number;
        metadata?: null | string;
    }
}
