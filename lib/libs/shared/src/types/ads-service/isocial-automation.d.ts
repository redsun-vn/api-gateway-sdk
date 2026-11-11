import { tags } from 'typia';
import { IAdsCommon } from './iads-common';
import { ISocialChannel } from './isocial-channel';
export declare namespace ISocialAutomation {
    interface IDeleted {
        id: string;
    }
    interface IPageQuery {
        page?: number & tags.Type<'uint32'>;
        limit?: number & tags.Type<'uint32'> & tags.Maximum<100>;
    }
    interface ISetCreate {
        name: string & tags.MinLength<1> & tags.MaxLength<120>;
        body?: (string & tags.MaxLength<63206>) | null;
        channel_ids: IAdsCommon.Id[] & tags.MinItems<1> & tags.MaxItems<20> & tags.UniqueItems;
        settings?: Record<string, Record<string, unknown>>;
    }
    type ISetUpdate = Partial<ISetCreate>;
    interface ISetView {
        id: string;
        name: string;
        body: string | null;
        channel_ids: string[];
        settings: Record<string, Record<string, unknown>>;
        created_at: string;
        updated_at: string;
    }
    interface ISetAppliedChannel {
        channel_id: string;
        platform: ISocialChannel.Platform;
        display_name: string | null;
        settings: Record<string, unknown>;
    }
    interface ISetMissingChannel {
        channel_id: string;
        reason: 'not_found' | 'reauth_needed' | 'revoked';
    }
    interface ISetApplied {
        set_id: string;
        name: string;
        body: string | null;
        channels: ISetAppliedChannel[];
        missing_channels: ISetMissingChannel[];
    }
    interface ISignatureCreate {
        name: string & tags.MinLength<1> & tags.MaxLength<120>;
        body: string & tags.MinLength<1> & tags.MaxLength<2000>;
        is_default?: boolean;
        platforms?: (ISocialChannel.Platform[] & tags.MinItems<1> & tags.MaxItems<5>) | null;
    }
    type ISignatureUpdate = Partial<ISignatureCreate>;
    interface ISignatureView {
        id: string;
        name: string;
        body: string;
        is_default: boolean;
        platforms: ISocialChannel.Platform[] | null;
        created_at: string;
        updated_at: string;
    }
    type RssMode = 'draft' | 'auto_schedule';
    interface IRssCreate {
        url: string & tags.MinLength<1> & tags.MaxLength<2048>;
        set_id: IAdsCommon.Id;
        mode?: RssMode;
    }
    interface IRssUpdate extends Partial<IRssCreate> {
        enabled?: boolean;
    }
    interface IRssView {
        id: string;
        set_id: string | null;
        url: string;
        mode: RssMode;
        enabled: boolean;
        last_checked_at: string | null;
        consecutive_failures: number;
        disabled_reason: string | null;
        created_at: string;
    }
    type PlugMetric = 'likes' | 'comments' | 'shares' | 'views' | 'impressions' | 'reach' | 'engagements';
    type PlugAction = 'comment' | 'repost';
    type PlugThreshold = (number & tags.Type<'int64'> & tags.Minimum<1> & tags.Maximum<1000000000000>) | (string & tags.MinLength<1> & tags.MaxLength<13>);
    interface IPlugCreate {
        channel_id: IAdsCommon.Id;
        metric: PlugMetric;
        threshold: PlugThreshold;
        action: PlugAction;
        action_body?: (string & tags.MaxLength<8000>) | null;
        within_hours?: number & tags.Type<'uint32'> & tags.Minimum<24> & tags.Maximum<720>;
    }
    interface IPlugUpdate extends Partial<Omit<IPlugCreate, 'channel_id'>> {
        enabled?: boolean;
    }
    interface IPlugView {
        id: string;
        channel_id: string;
        metric: string;
        threshold: string;
        action: PlugAction;
        action_body: string | null;
        within_hours: number;
        enabled: boolean;
        created_at: string;
    }
    interface IPlugRunQuery extends IPageQuery {
        plug_id?: IAdsCommon.Id;
    }
    interface IPlugRunView {
        id: string;
        plug_id: string;
        target_id: string;
        status: string;
        sent_at: string | null;
        result_external_id: string | null;
        error_code: string | null;
        created_at: string;
    }
    interface IPlugRunPage {
        items: IPlugRunView[];
        meta: IAdsCommon.IPageMeta;
    }
    type WebhookEvent = 'post.published' | 'post.failed' | 'post.partially_failed' | 'post.unconfirmed' | 'post.approved';
    interface IWebhookCreate {
        url: string & tags.MinLength<1> & tags.MaxLength<2048>;
        events: WebhookEvent[] & tags.MinItems<1> & tags.MaxItems<5> & tags.UniqueItems;
    }
    interface IWebhookUpdate extends Partial<IWebhookCreate> {
        enabled?: boolean;
    }
    interface IWebhookView {
        id: string;
        url: string;
        events: WebhookEvent[];
        enabled: boolean;
        consecutive_failures: number;
        disabled_reason: string | null;
        created_at: string;
    }
    interface IWebhookCreated extends IWebhookView {
        secret: string;
    }
    type WebhookTestOutcome = 'ok' | 'timeout' | 'blocked' | 'http_error';
    interface IWebhookTestResult {
        result: WebhookTestOutcome;
    }
    interface IWebhookDeliveryQuery extends IPageQuery {
        webhook_id?: IAdsCommon.Id;
    }
    interface IWebhookDeliveryView {
        id: string;
        webhook_id: string;
        outbox_id: string;
        event: string;
        status: string;
        attempts: number;
        next_attempt_at: string | null;
        last_status_code: number | null;
        last_result: string | null;
        delivered_at: string | null;
        created_at: string;
    }
    interface IWebhookDeliveryPage {
        items: IWebhookDeliveryView[];
        meta: IAdsCommon.IPageMeta;
    }
}
