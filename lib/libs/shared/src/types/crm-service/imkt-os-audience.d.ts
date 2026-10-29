import { tags } from 'typia';
type PositiveInt = number & tags.Type<'uint32'> & tags.Minimum<1>;
export declare namespace IMktOsAudience {
    type Target = 'lead' | 'opportunity';
    type Mode = 'snapshot' | 'dynamic';
    type FilterOperator = 'eq' | 'neq' | 'in' | 'not_in' | 'gt' | 'lt' | 'between' | 'contains' | 'not_contains' | 'is_null' | 'within_last_days' | 'older_than_days' | 'within_next_days';
    interface IFilterNode {
        field?: string;
        op?: string;
        value?: unknown;
        all?: IFilterNode[];
        any?: IFilterNode[];
    }
    interface IFilter {
        all?: IFilterNode[];
        any?: IFilterNode[];
    }
    type ListStatus = 'in_use' | 'unused' | 'archived';
    type ListSort = 'recent_use' | 'newest' | 'most_people' | 'name';
    interface IListQuery {
        q?: string;
        target?: Target;
        status?: ListStatus;
        sort?: ListSort;
        page?: PositiveInt;
        page_size?: PositiveInt;
    }
    interface ISummary {
        id: number;
        name: string;
        target: Target;
        origin: 'user';
        mode: Mode;
        last_count: number | null;
        last_counted_at: string | null;
        last_used_at: string | null;
        journeys_in_use: number;
        created_by: number | null;
        created_at: string;
        updated_at: string;
        archived_at: string | null;
    }
    interface IListResponse {
        items: ISummary[];
        total: number;
    }
    interface IAudience extends ISummary {
        current_version: number;
        filter: IFilter;
    }
    interface IGetResponse {
        item: IAudience;
    }
    interface ICreateRequest {
        name: string;
        target: Target;
        filter: IFilter;
        mode: Mode;
    }
    interface ICreated {
        ok: true;
        item: IAudience;
    }
    interface IUpdateRequest {
        name?: string;
        filter?: IFilter;
        mode?: Mode;
    }
    interface IUpdated {
        ok: true;
        item: IAudience;
        version_added: boolean;
        journeys_on_old_version: number;
    }
    interface IArchived {
        ok: true;
    }
    interface IFieldsQuery {
        target: Target;
    }
    interface IFieldOption {
        value: string | number | boolean;
        label: string;
        group?: string;
        tags?: string[];
    }
    interface IField {
        code: string;
        label: string;
        type: string;
        operators: FilterOperator[];
        options?: IFieldOption[];
        needs_crm_package: boolean;
        empty_means_never?: boolean;
    }
    interface IFieldGroup {
        key: string;
        label: string;
        fields: IField[];
    }
    interface IFieldsResponse {
        groups: IFieldGroup[];
    }
    interface IPreviewRequest {
        target: Target;
        filter: IFilter;
        mode?: Mode;
        audience_id?: PositiveInt;
    }
    interface IPreviewStarted {
        job_id: string;
    }
    type PreviewStatus = 'pending' | 'running' | 'done' | 'failed';
    type ExclusionRule = 'recent_staff_contact' | 'opportunity_recent_contact' | 'existing_customer' | 'unqualified' | 'converted' | 'no_consent' | 'unsubscribed_email';
    interface IExclusion {
        rule: ExclusionRule;
        count: number;
        days?: number;
    }
    interface ISampleRow {
        display_name: string | null;
        recipient_type: string;
        has_phone: boolean;
        has_email: boolean;
        has_zalo: boolean;
        contact_masked?: string | null;
    }
    type PreviewChannel = 'email';
    interface IChannelReach {
        channel: PreviewChannel;
        reachable: number;
    }
    interface IPreviewResult {
        matched: number;
        unique: number;
        excluded: IExclusion[];
        final: number;
        channels?: IChannelReach[];
        sample: ISampleRow[] | null;
        sample_hidden: 'below_minimum' | null;
        counted_at: string;
    }
    interface IPreviewJob {
        status: PreviewStatus;
        result?: IPreviewResult;
    }
}
export {};
