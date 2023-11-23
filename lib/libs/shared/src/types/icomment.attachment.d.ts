import { BaseResponse } from './common.type';
export declare namespace ICommentAttachment {
    interface ICreate {
        attachment_id: number;
        comment_id: number;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface ICommentAttachmentResponse extends BaseResponse {
        attachment_id: number | string;
        comment_id: number | string;
    }
}
