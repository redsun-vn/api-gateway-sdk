import { tags } from 'typia';
export declare namespace ICrmReportView {
    type CrmPeriodGrain = 'day' | 'week';
    type CrmReportLayout = 'kpi_cards' | 'table' | 'chart';
    type CrmReportVisibility = 'private' | 'team' | 'shop';
    type CrmExportFormat = 'csv' | 'xlsx';
    type CrmFilterOperator = 'eq' | 'ne' | 'in' | 'nin' | 'gt' | 'gte' | 'lt' | 'lte' | 'between' | 'is_null' | 'not_null' | 'contains';
    type CrmAggregation = 'count' | 'count_distinct' | 'sum' | 'avg' | 'min' | 'max';
    interface IStageTagMacro {
        $stage_tag: string;
    }
    interface IMeMacro {
        $me: true;
    }
    type ScalarFilterValue = string | number | boolean | null;
    type FilterValue = ScalarFilterValue | ScalarFilterValue[] | IStageTagMacro | IMeMacro;
    interface IFilterCondition {
        field: string;
        op: CrmFilterOperator;
        value?: FilterValue;
    }
    interface IMetricDefinition {
        key: string;
        label: string;
        dataset: string;
        agg: CrmAggregation;
        field?: string | null;
        filter?: IFilterCondition[] | null;
        unit?: string | null;
        description?: string | null;
    }
    interface IMetricQuery {
        from: string & tags.Format<'date-time'>;
        to: string & tags.Format<'date-time'>;
        grain?: CrmPeriodGrain;
        staff_id?: number;
        team_id?: number;
        department_id?: number;
        branch_id?: number;
    }
    interface IMetricBucket {
        period_start: string;
        period_label: string;
        value: number;
    }
    type MetricUnconfiguredReason = 'no_tagged_stage';
    interface IMetricSeriesResponse {
        metric: string;
        grain: CrmPeriodGrain;
        total: number;
        buckets: IMetricBucket[];
        unconfigured?: MetricUnconfiguredReason;
        effective_owner_ids: number[] | null;
    }
    interface ISaleCallsResponse extends IMetricSeriesResponse {
        connected: number;
        call_connect_rate: number;
        missing_outcome: number;
        missing_outcome_rate: number;
    }
    type TrialStatus = 'no_deadline' | 'expired' | 'expiring_soon' | 'active';
    interface ITrialRow {
        opportunity_id: number;
        opportunity_name: string;
        partner_uuid: string | null;
        owner_id: number;
        pipeline_id: number;
        stage_id: number;
        trial_start_at: string | null;
        trial_end_at: string | null;
        status: TrialStatus;
    }
    interface IActiveTrialsResponse {
        rows: ITrialRow[];
        total: number;
        unconfigured?: MetricUnconfiguredReason;
        by_status: Record<TrialStatus, number>;
        effective_owner_ids: number[] | null;
    }
    interface IReportViewSpec {
        metrics: IMetricDefinition[];
        dimensions?: string[];
        grain?: CrmPeriodGrain;
    }
    interface ICreate {
        name: string & tags.MinLength<1> & tags.MaxLength<255>;
        dataset: string;
        layout: CrmReportLayout;
        spec: IReportViewSpec;
        visibility?: CrmReportVisibility;
        shared_team_ids?: number[];
        is_pinned?: boolean;
    }
    type IUpdate = Partial<ICreate>;
    interface ICrmReportViewResponse {
        id: number;
        shop_id: number;
        name: string;
        dataset: string;
        layout: CrmReportLayout;
        spec: IReportViewSpec;
        spec_version: number;
        visibility: CrmReportVisibility;
        owner_staff_id: number;
        shared_team_ids: number[] | null;
        is_pinned: boolean;
        last_viewed_at: string | null;
        created_at: string;
        updated_at: string;
    }
    type ReportCellValue = string | number | boolean | null;
    type IReportRow = Record<string, ReportCellValue>;
    interface IRunQuery {
        from: string & tags.Format<'date-time'>;
        to: string & tags.Format<'date-time'>;
    }
    interface IMetricDescription {
        sentence: string;
        caveats: string[];
        warnings: string[];
    }
    interface IViewDescription {
        metrics: IMetricDescription[];
        scopeNote: string;
    }
    interface IRunViewResponse {
        view: ICrmReportViewResponse;
        rows: IReportRow[];
        columns: string[];
        truncated: boolean;
        warnings: string[];
        effective_owner_ids: number[] | null;
        description: IViewDescription;
    }
    type DimensionSource = 'dataset' | 'custom_field';
    interface IAvailableDimension {
        ref: string;
        label: string;
        kind: string;
        source: DimensionSource;
    }
    interface ICatalogMetric extends IMetricDefinition {
        description_text: IMetricDescription;
    }
    interface ICatalogQuery {
        dataset: string;
        industry_group_code?: string;
    }
    interface ICatalogResponse {
        metrics: ICatalogMetric[];
        dimensions: IAvailableDimension[];
    }
    type MetricSource = 'global' | 'industry' | 'shop';
    interface IAdminMetric {
        id: number;
        key: string;
        label: string;
        dataset: string;
        agg: CrmAggregation;
        field?: string | null;
        filter?: IFilterCondition[] | null;
        unit?: string | null;
        description?: string | null;
        source: MetricSource;
        editable: boolean;
        issues: string[];
    }
    interface IWriteMetric {
        key: string & tags.MinLength<2> & tags.MaxLength<64>;
        label: string & tags.MinLength<1> & tags.MaxLength<255>;
        dataset: string;
        agg: CrmAggregation;
        field?: string | null;
        filter?: IFilterCondition[] | null;
        unit?: (string & tags.MaxLength<16>) | null;
        description?: string | null;
    }
    interface IAdminMetricListResponse {
        metrics: IAdminMetric[];
    }
    interface IAdminMetricQuery {
        industry_group_code?: string;
    }
    interface IExportRequest {
        dataset: string;
        metrics: IMetricDefinition[];
        dimensions?: string[];
        from: string & tags.Format<'date-time'>;
        to: string & tags.Format<'date-time'>;
        grain?: CrmPeriodGrain;
        format: CrmExportFormat;
        filename?: string;
        headers?: Record<string, string>;
    }
    interface IExportResponse {
        filename: string;
        mimeType: string;
        content: string;
        rowCount: number;
        truncated: boolean;
        warnings: string[];
    }
}
