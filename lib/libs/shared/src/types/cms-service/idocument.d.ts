import { tags } from 'typia';
import { BaseResponse, NoCodeComponentEntry } from '../common.type';
export declare namespace IDocument {
    interface ICreateReq {
        website_id?: string & tags.Format<'uuid'>;
        theme_id?: string & tags.Format<'uuid'>;
        type?: string | null;
        target?: string;
        target_id?: string & tags.Format<'uuid'>;
        version?: number;
        entry: NoCodeComponentEntry;
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
        website_id?: string | null;
        theme_id?: string | null;
        type?: string | null;
        target?: string | null;
        target_id?: string | null;
        version: number | string | null;
        entry: NoCodeComponentEntry;
    }
}
