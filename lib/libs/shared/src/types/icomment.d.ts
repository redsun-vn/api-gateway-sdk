import { BaseResponse } from './common.type';
import { ICommentAttachment } from './icomment.attachment';
import { ExecutionContext } from '@nestjs/common';
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
    interface ICreateLogAdmin extends IComment.ICreate {
        objectResponse?: Record<string, unknown>;
        objectTarget?: string;
        action?: string;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface ICommentResponse extends BaseResponse {
        shop_id: string | number | null;
        staff_id: string | number;
        object_id: string | number;
        appTitle: string;
        message: string;
        attributeToApp: boolean;
        attributeToUser: boolean;
        embed: string | null;
        objectBody?: Record<string, unknown> | null;
        objectResponse?: Record<string, unknown> | null;
        action?: string | null;
        objectTarget?: string | null;
        commentAttachments?: null | ICommentAttachment.ICommentAttachmentResponse[];
    }
    interface ILogAdminEvent {
        resData: any;
        context: ExecutionContext;
    }
}
