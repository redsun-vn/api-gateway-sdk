import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ICrmAttachment {
    type Visibility = 'branch' | 'shop' | 'private';
    interface ICreate {
        type: string & tags.MinLength<1> & tags.MaxLength<50>;
        attachment_id: string & tags.MinLength<1>;
        uploaded_by_id: number;
        visibility?: Visibility;
        metadata?: Record<string, unknown>;
    }
    interface IAttachmentResponse extends BaseResponse {
        shopId: number | string;
        opportunityId: number | string;
        type: string;
        attachmentId: number | string;
        visibility: Visibility;
        metadata: Record<string, unknown> | null;
        uploadedById: number | string;
    }
    interface IDeleteResult {
        deleted: boolean;
    }
    interface IGrantResult {
        attachment_id: string;
        opportunity_id: number;
        visibility: string;
        granted: true;
    }
}
