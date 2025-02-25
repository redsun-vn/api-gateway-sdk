import { tags } from 'typia';
import { BaseResponse, NoCodeComponentEntry } from '../common.type';
export declare namespace IDocument {
    interface ICreateReq {
        websiteId?: string & tags.Format<'uuid'>;
        themeId?: string & tags.Format<'uuid'>;
        type?: string | null;
        target?: string;
        targetId?: string & tags.Format<'uuid'>;
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
        websiteId?: string | null;
        themeId?: string | null;
        type?: string | null;
        target?: string | null;
        targetId?: string | null;
        version: number | string | null;
        entry: NoCodeComponentEntry;
    }
}
