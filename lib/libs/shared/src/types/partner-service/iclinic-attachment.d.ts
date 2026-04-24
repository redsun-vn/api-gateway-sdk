export declare namespace IClinicAttachment {
    interface ICreate {
        visit_id: string;
        type: string;
        attachment_id: string;
        metadata?: Record<string, unknown> | null;
    }
    interface IRow {
        id: string;
        visit_id: string;
        type: string;
        attachment_id: string;
        metadata: Record<string, unknown> | null;
        uploaded_by_id: string;
        uploaded_at: string;
    }
    interface IResponse extends IRow {
    }
    interface IDelete {
        deleted: boolean;
    }
    interface IIssueShareUrlPayload {
        url?: string;
        expiresAt?: number;
        error?: 'NOT_FOUND' | 'FORBIDDEN' | 'INVALID_REQUEST';
    }
}
