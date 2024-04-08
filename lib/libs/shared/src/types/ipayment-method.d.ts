import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IPaymentMethod {
    interface ICreate {
        name: string;
        code?: string & tags.MinLength<2> & tags.MaxLength<10>;
        active?: boolean;
        description?: string;
        icon?: string;
        attachment_id?: number | string;
        metadata?: string;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IPaymentMethodResponse extends BaseResponse {
        name: string;
        code: string;
        active: boolean;
        description?: null | string;
        icon?: string | null;
        attachment_id?: null | number | string;
        metadata?: null | string;
    }
}
