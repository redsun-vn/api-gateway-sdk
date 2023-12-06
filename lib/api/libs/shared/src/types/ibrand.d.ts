import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IBrand {
    interface ICreate {
        attachment_id?: number & tags.Type<'uint32'>;
        description?: string;
        slogan?: string;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IBrandResponse extends BaseResponse {
        slogan?: null | string;
        attachment_id?: null | string;
        description?: null | string;
        shop_id: string;
    }
}
