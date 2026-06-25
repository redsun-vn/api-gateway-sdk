import { tags } from 'typia';
export declare namespace IConversation {
    interface IListQuery {
        channel?: string;
        status?: string;
        assignment?: 'mine' | 'unassigned' | 'all';
        since?: string & tags.Format<'date-time'>;
        page?: number;
        limit?: number;
    }
    interface IConversationItem {
        id: number | string;
        shop_id: number | string;
        channel: string;
        page_or_oa_id: string;
        external_thread_id: string;
        status: string;
        assigned_staff_id: number | string | null;
        owning_branch_id: number | string | null;
        channel_identity_id: number | string | null;
        last_message_at: string | null;
        window_expires_at: string | null;
        unread_count: number;
        createdAt: string;
        updatedAt: string;
    }
    interface IMessageItem {
        id: number | string;
        conversation_id: number | string;
        shop_id: number | string;
        channel: string;
        external_msg_id: string | null;
        direction: string;
        sender_external_id: string | null;
        content_type: string;
        text: string | null;
        attachments: {
            url: string;
            contentType: string;
        }[] | null;
        request_id: string | null;
        send_status: string | null;
        error_code: string | null;
        sent_at: string;
        createdAt: string;
    }
    interface IListResponse {
        items: IConversationItem[];
        total: number;
    }
    interface IDetailResponse {
        conversation: IConversationItem;
        messages: IMessageItem[];
    }
    interface ISendAttachment {
        url?: string;
        attachmentId?: string;
        contentType: string;
    }
    interface ISendReplyBody {
        request_id: string & tags.Format<'uuid'>;
        text?: string;
        attachment?: ISendAttachment;
    }
    interface ISendReplyResponse {
        message_id: number | string;
        status: string;
        external_msg_id: string | null;
    }
}
