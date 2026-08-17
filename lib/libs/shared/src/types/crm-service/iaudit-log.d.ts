export declare namespace ICrmAuditLog {
    type EntityType = 'lead' | 'opportunity';
    interface IFieldChange {
        field: string;
        before: unknown;
        after: unknown;
        masked?: boolean;
    }
    interface IEntry {
        id: number | string;
        action: string;
        changed_at: Date | string;
        changed_by_id: number | string | null;
        changed_by_name: string | null;
        changes: IFieldChange[];
        context: Record<string, unknown> | null;
    }
    interface IListResponse {
        items: IEntry[];
        total: number;
    }
    interface IListQuery {
        limit?: number;
        offset?: number;
    }
}
