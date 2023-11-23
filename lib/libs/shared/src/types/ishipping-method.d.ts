import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IShippingMethod {
    interface ICreate {
        name: string;
        code_prefix?: string & tags.MinLength<2> & tags.MaxLength<2>;
        active?: boolean;
        description?: string;
        icon: string & tags.MinLength<10> & tags.MaxLength<10>;
        attachment_id?: number;
        metadata?: string;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IShippingMethodResponse extends BaseResponse {
        name: string;
        code: string;
        active: boolean;
        description?: null | string;
        icon: string;
        attachment_id?: null | number;
        metadata?: null | string;
    }
}
