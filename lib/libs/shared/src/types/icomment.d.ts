import { BaseResponse } from './common.type';
import { ICommentAttachment } from './icomment.attachment';
export declare namespace IComment {
    interface ICreate {
        staff_id: number;
        object_id: number;
        appTitle: string;
        message: string;
        attributeToApp?: boolean;
        attributeToUser?: boolean;
        embed: string;
        objectBody?: Record<string, unknown>;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface ICommentResponse extends BaseResponse {
        shop_id: string | number;
        staff_id: string | number;
        object_id: string | number;
        appTitle: string;
        message: string;
        attributeToApp: boolean;
        attributeToUser: boolean;
        embed: string | null;
        objectBody?: Record<string, unknown> | null;
        commentAttachments?: null | ICommentAttachment.ICommentAttachmentResponse[];
    }
}
