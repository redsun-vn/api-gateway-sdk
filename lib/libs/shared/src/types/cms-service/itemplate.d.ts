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
        group?: string;
        thumbnail?: string | null;
        thumbnailLabel?: string | null;
    }
    interface ICreate extends ICreateReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IUpdateReq {
        label?: string;
        entry?: NoCodeComponentEntry;
        width?: number;
        widthAuto?: boolean;
        group?: string;
        thumbnail?: string | null;
        thumbnailLabel?: string | null;
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
        group?: string | null;
    }
    interface IGroupCountTree {
        group: string | null;
        matchedCount: number;
        total: number;
    }
    type IGroupCountMap = Record<string, {
        matchedCount: number;
        total: number;
    }>;
}
