import { tags } from 'typia';
type PositiveInt = number & tags.Type<'uint32'> & tags.Minimum<1>;
export declare namespace IMktOsSubscriber {
    type Kind = 'email' | 'phone';
    type Status = 'subscribed' | 'unsubscribed' | 'bounced';
    type Source = 'import' | 'staff' | 'form';
    type ChannelState = 'subscribed' | 'unsubscribed';
    type UnsubscribeChannel = 'email' | 'sms' | 'zns' | 'all';
    type FieldType = 'text' | 'number' | 'date';
    interface IChannelStatus {
        sms: ChannelState;
        zns: ChannelState;
    }
    interface IListRef {
        id: string;
        name: string;
    }
    interface IListQuery {
        q?: string & tags.MaxLength<254>;
        kind?: Kind;
        status?: Status;
        list_id?: PositiveInt;
        source?: Source;
        subscribed_from?: string & tags.Format<'date'>;
        subscribed_to?: string & tags.Format<'date'>;
        page?: PositiveInt;
        page_size?: PositiveInt & tags.Maximum<50>;
    }
    interface IItem {
        id: string;
        kind: Kind;
        name: string | null;
        status: Status;
        channel_status?: IChannelStatus;
        source: Source;
        source_label: string | null;
        lists: IListRef[];
        subscribed_at: string;
        address_masked?: string | null;
    }
    interface IListResponse {
        items: IItem[];
        total: number;
    }
    interface IConsentEvidence {
        staff_id: number | null;
        file_name?: string;
        row_number?: number;
        confirmed_at?: string;
        note?: string;
    }
    interface IJourney {
        campaign_id: string;
        name: string;
        state: string;
    }
    interface IDetail extends IItem {
        attributes: Record<string, string | number>;
        consent: {
            source: Source;
            at: string;
            evidence: IConsentEvidence;
        };
        journeys: IJourney[];
    }
    interface ICreateRequest {
        email?: string & tags.MaxLength<320>;
        phone?: string & tags.MaxLength<32>;
        name?: string & tags.MaxLength<400>;
        attributes?: Record<string, string | number | null>;
        list_ids?: PositiveInt[] & tags.MaxItems<50>;
        consent: {
            confirmed: boolean;
            note?: string & tags.MaxLength<600>;
        };
    }
    interface ICreated {
        id: string;
        kind: Kind;
        status: Status;
        suppressed: boolean;
    }
    interface ICreateResponse {
        created: ICreated[];
    }
    interface IUpdateRequest {
        name?: (string & tags.MaxLength<400>) | null;
        attributes?: Record<string, string | number | null>;
        list_ids?: PositiveInt[] & tags.MaxItems<50>;
    }
    interface IDeleted {
        deleted: boolean;
    }
    interface IUnsubscribeRequest {
        channel: UnsubscribeChannel;
        reason?: string & tags.MaxLength<600>;
    }
    interface IUnsubscribed {
        status: Status;
        channel_status?: IChannelStatus;
    }
    interface IBounced {
        status: 'bounced';
    }
    interface IListsQuery {
        include_archived?: boolean;
    }
    interface IList {
        id: string;
        name: string;
        member_count: number;
        archived_at: string | null;
    }
    interface IListsResponse {
        items: IList[];
    }
    interface IListRequest {
        name: string & tags.MaxLength<400>;
    }
    interface IField {
        key: string;
        label: string;
        type: FieldType;
    }
    interface IFieldsResponse {
        items: IField[];
    }
    interface IFieldRequest {
        label: string & tags.MaxLength<200>;
        type: FieldType;
    }
    type ImportStatus = 'uploading' | 'analyzing' | 'ready' | 'importing' | 'done' | 'failed' | 'cancelled';
    type ImportProblemReason = 'missing_contact' | 'invalid_consent_date' | 'invalid_email' | 'invalid_phone' | 'duplicate_email_in_file' | 'duplicate_phone_in_file' | 'invalid_attribute';
    interface IImportCreateRequest {
        file_name: string & tags.MaxLength<255>;
        row_count: PositiveInt;
        mapping: {
            email?: string & tags.MaxLength<200>;
            phone?: string & tags.MaxLength<200>;
            name?: string & tags.MaxLength<200>;
            consent_at?: string & tags.MaxLength<200>;
            attributes?: Record<string, string & tags.MaxLength<200>>;
        };
        options?: {
            list_id?: PositiveInt;
            new_list_name?: string & tags.MaxLength<400>;
            on_existing?: 'update' | 'skip';
            source_label?: string & tags.MaxLength<400>;
        };
        consent: {
            confirmed: boolean;
            statement_version: 'subscriber-import-v1';
        };
    }
    interface IImportLimits {
        max_rows: number;
        max_per_shop: number;
    }
    interface IImportCreated {
        id: string;
        status: 'uploading';
        limits: IImportLimits;
    }
    interface IImportRow {
        row_number: PositiveInt;
        email?: (string & tags.MaxLength<400>) | number;
        phone?: (string & tags.MaxLength<100>) | number;
        name?: (string & tags.MaxLength<400>) | number;
        consent_at?: (string & tags.MaxLength<100>) | number;
        attributes?: Record<string, (string & tags.MaxLength<1000>) | number | null>;
    }
    interface IImportRowsRequest {
        rows: IImportRow[] & tags.MinItems<1> & tags.MaxItems<500>;
    }
    interface IImportRowsReceived {
        received: number;
    }
    interface IImportStep {
        id: string;
        status: ImportStatus;
    }
    interface IImportKindCounts {
        new: number;
        updated: number;
        skipped: number;
        suppressed: number;
    }
    interface IImportCounts {
        email: IImportKindCounts;
        phone: IImportKindCounts;
        missing_contact: number;
        invalid_email: number;
        invalid_phone: number;
        invalid_consent_date: number;
        invalid_attribute: number;
        duplicate_email_in_file: number;
        duplicate_phone_in_file: number;
    }
    interface IImportProblem {
        row_number: number;
        reason: ImportProblemReason;
        contact_masked?: string;
    }
    interface IImport {
        id: string;
        status: ImportStatus;
        file_name: string;
        row_count: number;
        processed_rows: number;
        counts: IImportCounts | null;
        problem_total: number;
        limits: IImportLimits;
        options: {
            list_id: string | null;
            on_existing: 'update' | 'skip';
            source_label: string | null;
        };
        error: string | null;
        created_by: string | null;
        created_at: string;
        finished_at: string | null;
    }
    interface IImportsResponse {
        items: IImport[];
    }
    interface IImportDetail extends IImport {
        problems: IImportProblem[];
        existing_total: number;
        over_limit: boolean;
    }
}
export {};
