import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace ISalesChannel {
    interface ICreate {
        name: string;
        code_prefix?: string & tags.MinLength<2> & tags.MaxLength<2>;
        active?: boolean;
        description?: string;
        icon: string;
        attachment_id?: number;
        metadata?: string;
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'code_prefix'> {
    }
    interface ISalesChannelResponse extends BaseResponse {
        name?: string;
        code?: string;
        active?: boolean;
        description?: string | null;
        icon: string;
        attachment_id?: number | null;
        metadata?: string | null;
    }
}
