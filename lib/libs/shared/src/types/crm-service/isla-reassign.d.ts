export declare namespace ICrmSlaReassign {
    interface ISuggestion {
        id: number | string;
        entity_type: 'lead' | 'opportunity';
        entity_id: number | string;
        current_owner_id: number | string;
        created_at: string;
    }
    interface IListResponse {
        items: ISuggestion[];
    }
    interface IApproveBody {
        new_owner_id: number | string;
    }
    interface IDecisionResult {
        id: number | string;
        status: 'approved' | 'dismissed';
    }
}
