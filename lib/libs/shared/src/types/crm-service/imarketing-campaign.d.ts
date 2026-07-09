import { IResponse, IResponsePagination } from '../common.type';
export declare namespace IMarketingCampaign {
    type Status = 'active' | 'archived';
    interface ICampaignItem {
        id: number | string;
        shop_id: number | string;
        utm_campaign: string;
        display_name: string;
        channel: string | null;
        status: Status;
        lead_count: number | string;
        first_seen_at: string;
        last_lead_at: string | null;
    }
    interface IListQueryRequest {
        page?: number;
        limit?: number;
        status?: Status;
        search?: string;
    }
    interface IListQuery extends IListQueryRequest {
        shop_id: number | string;
    }
    interface IUpdateInputRequest {
        display_name?: string;
        status?: Status;
    }
    interface IUpdateInput extends IUpdateInputRequest {
        shop_id: number | string;
        id: number | string;
    }
    type IListResponse = IResponse<IResponsePagination<ICampaignItem>>;
    type IUpdateResponse = IResponse<ICampaignItem>;
    type Granularity = 'day' | 'week';
    interface IReportInputRequest {
        date_from?: string;
        date_to?: string;
        campaign_id?: string;
        granularity?: Granularity;
    }
    interface IReportInput extends IReportInputRequest {
        shop_id: number | string;
    }
    interface IReportSummary {
        total_leads: number;
        active_campaigns: number;
        converted: number;
        won: number;
        convert_rate: number;
        win_rate: number;
    }
    interface IReportCampaignRow {
        id: number | string;
        display_name: string;
        utm_campaign: string;
        channel: string | null;
        status: Status;
        leads: number;
        converted: number;
        won: number;
        convert_rate: number;
        win_rate: number;
        last_lead_at: string | null;
    }
    interface IReportTrendBucket {
        bucket: string;
        leads: number;
    }
    interface IReportChannelRow {
        channel: string;
        utm_source: string | null;
        utm_medium: string | null;
        leads: number;
    }
    interface IReportResponse {
        summary: IReportSummary;
        campaigns: IReportCampaignRow[];
        trend: IReportTrendBucket[];
        channelBreakdown: IReportChannelRow[];
    }
    type IReportResponseWrapped = IResponse<IReportResponse>;
}
