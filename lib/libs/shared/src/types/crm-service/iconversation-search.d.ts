export declare namespace IConversationSearch {
    interface ICursor {
        sent_at: string;
        id: number | string;
    }
    interface ISearchQuery {
        q: string;
        channel?: string;
        status?: string;
        assigned_staff_id?: number;
        cursor_sent_at?: string;
        cursor_id?: string;
        limit?: number;
    }
    interface ISearchItem {
        message_id: number | string;
        conversation_id: number | string;
        channel: string;
        direction: string;
        text: string | null;
        sent_at: Date | string;
    }
    interface ISearchResponse {
        items: ISearchItem[];
        next_cursor: ICursor | null;
    }
}
