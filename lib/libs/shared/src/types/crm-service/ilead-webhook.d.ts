import { CrmSlaPriority } from '../../enum/crm-service/sla';
import { CrmLeadSource } from '../../enum/crm-service/lead';
import { IResponse, IResponsePagination } from '../common.type';
export declare namespace ILeadWebhook {
    interface IUtmParams {
        source?: string;
        medium?: string;
        campaign?: string;
        content?: string;
        term?: string;
    }
    interface IInboundEvent {
        shop_id: number | string;
        source_ref?: string | null;
        utm: IUtmParams;
        raw: Record<string, unknown>;
    }
    interface IMappingResponse {
        id: number | string;
        shop_id: number | string;
        field_mapping: Record<string, string>;
        default_owner_id: number | string | null;
        default_branch_id: number | string | null;
        default_team_id: number | string | null;
        pipeline_id: number | string | null;
        default_sla_priority: CrmSlaPriority | null;
        default_source: CrmLeadSource;
        require_phone: boolean;
        is_active: boolean;
        campaign_auto_create_daily_cap: number | null;
        rate_limit_shop_per_min: number | null;
        bypass_ip_limit: boolean;
        createdAt: Date | string;
        updatedAt: Date | string;
    }
    interface IGetInput {
        shop_id: number | string;
    }
    interface IUpsertInputRequest {
        field_mapping: Record<string, string>;
        default_owner_id?: number | string | null;
        default_branch_id?: number | string | null;
        default_team_id?: number | string | null;
        pipeline_id?: number | string | null;
        default_sla_priority?: CrmSlaPriority | null;
        default_source?: CrmLeadSource;
        require_phone?: boolean;
        is_active?: boolean;
        campaign_auto_create_daily_cap?: number | null;
        rate_limit_shop_per_min?: number | null;
        bypass_ip_limit?: boolean;
    }
    interface IUpsertInput extends IUpsertInputRequest {
        shop_id: number | string;
    }
    type IGetResponse = IResponse<IMappingResponse | null>;
    type IUpsertResponse = IResponse<IMappingResponse>;
    type SyncStatus = 'success' | 'duplicate' | 'failed';
    interface ISyncLogItem {
        id: number | string;
        shop_id: number | string;
        source_ref: string | null;
        status: SyncStatus;
        lead_id: number | string | null;
        campaign_id: number | string | null;
        error_code: string | null;
        error_message: string | null;
        raw_payload: Record<string, unknown> | null;
        created_at: Date | string;
    }
    interface ISyncLogListQueryRequest {
        page?: number;
        limit?: number;
        status?: SyncStatus;
    }
    interface ISyncLogListQuery extends ISyncLogListQueryRequest {
        shop_id: number | string;
    }
    type ISyncLogListResponse = IResponse<IResponsePagination<ISyncLogItem>>;
}
