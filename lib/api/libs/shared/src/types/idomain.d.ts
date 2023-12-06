import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IDomain {
    interface ICreate {
        host: string & tags.Format<'ipv4'>;
        sslEnabled?: boolean;
        url: string & tags.Format<'url'>;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IDomainResponse extends BaseResponse {
        host: string;
        sslEnabled?: boolean;
        url: string;
        shop_id: string;
    }
}
