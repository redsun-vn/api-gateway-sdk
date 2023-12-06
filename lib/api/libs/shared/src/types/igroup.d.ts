import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IGroup {
    interface ICreate {
        name: string & tags.MinLength<3> & tags.MaxLength<50>;
        permission: string[];
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IGroupResponse extends BaseResponse {
        shop_id: string;
        name: string;
        permission: string[];
    }
}
