import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ICampaign {
    type CampaignStatus = 'draft' | 'active' | 'paused' | 'archived';
    type CampaignType = 'event' | 'scheduled';
    type CampaignChannel = 'sms' | 'email' | 'zalo_oa';
    type CampaignTriggerEvent = 'order_completed' | 'birthday' | 'inactivity' | 'level_changed' | 'reservation_reminder' | 'reservation_created';
    interface ICampaignCreate {
        name: string;
        description?: string;
        type: CampaignType;
        status?: CampaignStatus;
        trigger_event: CampaignTriggerEvent;
        trigger_config?: Record<string, any>;
        delay_config?: {
            type: 'immediate' | 'delay';
            value?: number;
            unit?: 'minutes' | 'hours' | 'days';
        };
        channels: CampaignChannel[];
        schedule_cron?: string;
        target_audience?: {
            levels?: string[];
            tags?: string[];
        };
        rate_limit_per_day?: number;
        templates: ICampaignTemplateCreate[];
    }
    interface ICampaignUpdate {
        name?: string;
        description?: string;
        type?: CampaignType;
        trigger_event?: CampaignTriggerEvent;
        trigger_config?: Record<string, any>;
        delay_config?: {
            type: 'immediate' | 'delay';
            value?: number;
            unit?: 'minutes' | 'hours' | 'days';
        };
        channels?: CampaignChannel[];
        schedule_cron?: string;
        target_audience?: {
            levels?: string[];
            tags?: string[];
        };
        rate_limit_per_day?: number;
        templates?: ICampaignTemplateCreate[];
    }
    interface ICampaignTemplateCreate {
        channel: CampaignChannel;
        subject?: string;
        content: string;
        zns_template_id?: string;
        variables?: string[];
    }
    interface ICampaignResponse extends BaseResponse {
        shop_id: number | string;
        name: string;
        description?: string | null;
        type: CampaignType;
        status: CampaignStatus;
        trigger_event: string;
        trigger_config?: Record<string, any> | null;
        delay_config?: Record<string, any> | null;
        channels: CampaignChannel[];
        schedule_cron?: string | null;
        target_audience?: Record<string, any> | null;
        rate_limit_per_day: number | string;
        templates?: ICampaignTemplateResponse[];
    }
    interface ICampaignTemplateResponse extends BaseResponse {
        shop_id: number | string;
        campaign_id: number | string;
        channel: CampaignChannel;
        subject?: string | null;
        content: string;
        zns_template_id?: string | null;
        variables?: string[] | null;
    }
    interface ICampaignExecutionResponse extends BaseResponse {
        shop_id: number | string;
        campaign_id: number | string;
        customer_id: number | string;
        trigger_event?: string | null;
        trigger_data?: Record<string, any> | null;
        channels_sent?: string[] | null;
        status: string;
        scheduled_at?: string | null;
        sent_at?: string | null;
        error?: string | null;
        trigger_date?: string | null;
        retry_count: number | string;
        next_retry_at?: string | null;
    }
    interface ICampaignUpdateStatus {
        status: CampaignStatus;
    }
    interface ICampaignFindLogs {
        page?: number & tags.Type<'uint32'>;
        limit?: number & tags.Type<'uint32'>;
        status?: string;
    }
    interface ICampaignStats {
        active_count: number | string;
        sent_today: number | string;
        fail_rate: number | string;
        pending_count: number | string;
    }
}
