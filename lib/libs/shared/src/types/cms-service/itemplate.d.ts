import { tags } from 'typia';
import { TEMPLATE_REVIEW_STATUS } from '../../enum/cms';
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
        isPublic?: boolean;
        isActive?: boolean;
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
        isPublic?: boolean;
        isActive?: boolean;
        reviewStatus?: string & TEMPLATE_REVIEW_STATUS;
        reviewById?: number & tags.Type<'uint64'>;
    }
    interface IUpdate extends IUpdateReq {
        id: string;
    }
    interface IReview {
        id: string;
        reviewStatus: string & TEMPLATE_REVIEW_STATUS;
        reviewById: number & tags.Type<'uint64'>;
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
        reviewStatus?: TEMPLATE_REVIEW_STATUS;
        reviewById?: number | string | null;
        isPublic?: boolean | null;
        isActive?: boolean | null;
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
