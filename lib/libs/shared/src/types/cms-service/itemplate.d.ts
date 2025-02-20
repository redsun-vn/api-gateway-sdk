import { tags } from 'typia';
import { BaseResponse, NoCodeComponentEntry } from '../common.type';
export declare namespace ITemplate {
    interface ICreateReq {
        website_id?: string & tags.Format<'uuid'>;
        target?: string | null;
        target_id?: string & tags.Format<'uuid'>;
        label: string;
        entry: NoCodeComponentEntry;
        width?: number;
        widthAuto?: boolean;
        isUserDefined?: boolean;
    }
    interface ICreate extends ICreateReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IUpdateReq {
        label?: string;
        entry?: NoCodeComponentEntry;
        width?: number;
        widthAuto?: boolean;
    }
    interface IUpdate extends IUpdateReq {
        id: string;
    }
    interface IResponse extends BaseResponse {
        shop_id?: number | string | null;
        website_id?: string | null;
        target?: string | null;
        target_id?: string | null;
        label: string;
        thumbnail?: string | null;
        thumbnailLabel?: string | null;
        isUserDefined: boolean;
        width?: number | string | null;
        widthAuto?: boolean | null;
        entry: NoCodeComponentEntry;
    }
}
