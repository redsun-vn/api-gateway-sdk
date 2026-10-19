export declare namespace ICall {
    type Id = number | string;
    type RelatedType = 'lead' | 'opportunity' | 'partner';
    type Direction = 'inbound' | 'outbound';
    type CallStatus = 'ringing' | 'answered' | 'ended';
    type CallOutcome = 'connected' | 'no_answer' | 'busy' | 'missed' | 'failed';
    type WrapupOutcome = 'connected' | 'no_answer' | 'busy' | 'voicemail' | 'wrong_number';
    type MatchStatus = 'intent' | 'matched' | 'ambiguous' | 'unmatched';
    interface IStaffScope {
        shop_id: Id;
        staff_id: Id;
    }
    type ISoftphoneStatusInput = IStaffScope;
    interface ISoftphoneStatusResponse {
        enabled: boolean;
        reason: 'ok' | 'not_configured' | 'cti_disabled' | 'not_verified' | 'outbound_not_ready' | 'agent_not_mapped' | 'not_permitted';
        can_make: boolean;
        outbound_ready: boolean;
        stringee_user_id: string | null;
    }
    type IClientTokenInput = IStaffScope;
    interface IClientTokenResponse {
        token: string;
        stringee_user_id: string;
        expires_at: Date | string;
    }
    interface IPlaceRequest {
        related_type: RelatedType;
        related_id: Id;
    }
    interface IPlaceInput extends IPlaceRequest, IStaffScope {
        scoped_owner_ids?: number[];
    }
    interface IPlaceResponse {
        stringee_call_id: string;
        agent_user_id: string;
    }
    interface ILookupRequest {
        stringee_call_id: string;
    }
    interface ILookupInput extends ILookupRequest, IStaffScope {
        scoped_owner_ids?: number[];
    }
    interface ILookupResponse {
        status: 'pending' | MatchStatus;
        related_type: RelatedType | null;
        related_id: Id | null;
        display_name: string | null;
    }
    interface IWrapupRequest {
        outcome: WrapupOutcome;
        note?: string | null;
    }
    interface IWrapupInput extends IWrapupRequest, IStaffScope {
        stringee_call_id: string;
    }
    interface ICallRecordItem {
        id: Id;
        stringee_call_id: string;
        direction: Direction | null;
        status: CallStatus;
        outcome: CallOutcome | null;
        wrapup_outcome: WrapupOutcome | null;
        wrapup_note: string | null;
        started_at: Date | string | null;
        answered_at: Date | string | null;
        ended_at: Date | string | null;
        talk_sec: number | null;
        agent_staff_id: Id | null;
        related_type: RelatedType | null;
        related_id: Id | null;
        match_status: MatchStatus | null;
    }
    interface IWrapupResponse {
        call: ICallRecordItem;
    }
    interface IListQuery {
        related_type: RelatedType;
        related_id: string;
        page?: number;
        limit?: number;
    }
    interface IListInput extends IListQuery, IStaffScope {
        scoped_owner_ids?: number[];
    }
    interface IListResponse {
        items: ICallRecordItem[];
        total: number;
        page: number;
        limit: number;
    }
    interface IRecentQuery {
        related_type: RelatedType;
        related_id: string;
    }
    interface IRecentInput extends IRecentQuery, IStaffScope {
        scoped_owner_ids?: number[];
    }
    interface IRecentResponse {
        call: ICallRecordItem | null;
    }
}
