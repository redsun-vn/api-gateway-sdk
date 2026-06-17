import { tags } from 'typia';
import { CrmActivityRelatedToType } from '../../enum/crm-service/activity';
export declare namespace ICrmComms {
    interface ISendEmail {
        related_to_type: CrmActivityRelatedToType;
        related_to_id: number;
        partner_uuid?: (string & tags.Format<'uuid'>) | null;
        to_email?: (string & tags.Format<'email'>) | null;
        subject: string & tags.MinLength<1> & tags.MaxLength<255>;
        content: string & tags.MinLength<1>;
        idempotency_key?: string;
    }
    type SendEmailStatus = 'queued' | 'skipped_duplicate' | 'no_recipient';
    interface ISendEmailResponse {
        sent: boolean;
        status: SendEmailStatus;
        activity_id?: number;
    }
}
