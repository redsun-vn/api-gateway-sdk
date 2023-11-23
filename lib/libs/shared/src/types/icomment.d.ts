import { BaseResponse } from './common.type';
import { ICommentAttachment } from './icomment.attachment';
export declare namespace IComment {
    enum CommentEventEmbed {
        PARTNER = "Partner",
        DRAFT_ORDER = "DraftOrder",
        ORDER = "Order",
        PRODUCT = "Product",
        PRODUCT_VARIANT = "ProductVariant"
    }
    interface ICreate {
        staff_id: number;
        object_id: number;
        appTitle: string;
        message: string;
        attributeToApp?: boolean;
        attributeToUser?: boolean;
        embed: CommentEventEmbed;
        objectBody?: unknown;
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
        embed: CommentEventEmbed;
        objectBody?: unknown | null;
        commentAttachments?: unknown | ICommentAttachment.ICommentAttachmentResponse[];
    }
}
