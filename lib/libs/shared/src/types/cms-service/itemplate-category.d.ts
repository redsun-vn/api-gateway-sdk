import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ITemplateCategory {
    interface ICreateReq {
        name: string & tags.MinLength<1>;
        isActive?: boolean;
        description?: string;
        color?: string;
        icon?: string;
        parent_uuid?: (string & tags.Format<'uuid'>) | null;
    }
    interface ICreate extends ICreateReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IUpdateReq extends Partial<ICreateReq> {
    }
    interface IUpdate extends IUpdateReq {
        id: string;
    }
    interface IResponse extends BaseResponse {
        shop_id?: number | string | null;
        name: string;
        isActive: boolean;
        description?: string | null;
        color?: string | null;
        icon?: string | null;
        parent_uuid?: string | null;
        parent?: IResponse | null;
    }
}
