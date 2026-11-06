import { tags } from 'typia';
import { IAdsCommon } from './iads-common';
import { ISocialChannel } from './isocial-channel';
export declare namespace ISocialPost {
    type Status = 'draft' | 'pending_approval' | 'scheduled' | 'publishing' | 'published' | 'partially_failed' | 'failed' | 'unconfirmed' | 'paused' | 'cancelled';
    type TargetStatus = 'scheduled' | 'publishing' | 'processing' | 'published' | 'failed' | 'unconfirmed' | 'paused' | 'cancelled';
    type Source = 'manual' | 'rss' | 'api' | 'plug';
    type RepeatUnit = 'day' | 'week' | 'month';
    type FirstCommentStatus = 'pending' | 'sending' | 'done' | 'failed' | 'unconfirmed';
    type Instant = string & tags.MinLength<10> & tags.MaxLength<40>;
    interface IMediaInput {
        file_id: IAdsCommon.Id;
        mime: string & tags.MinLength<7> & tags.MaxLength<46>;
        width?: (number & tags.Type<'uint32'> & tags.Minimum<1> & tags.Maximum<100000>) | null;
        height?: (number & tags.Type<'uint32'> & tags.Minimum<1> & tags.Maximum<100000>) | null;
    }
    interface IRepeatRule {
        every: RepeatUnit;
        interval?: number & tags.Type<'uint32'> & tags.Minimum<1> & tags.Maximum<365>;
        until?: (string & tags.MaxLength<20>) | null;
    }
    interface IFirstCommentInput {
        body: string & tags.MinLength<1> & tags.MaxLength<8000>;
        delay_min?: number & tags.Type<'uint32'> & tags.Maximum<10080>;
    }
    interface ITargetInput {
        channel_id: IAdsCommon.Id;
        body_override?: (string & tags.MaxLength<63206>) | null;
        media_override?: (IMediaInput[] & tags.MaxItems<35>) | null;
        settings?: Record<string, unknown>;
        first_comment?: IFirstCommentInput | null;
    }
    interface IContent {
        body?: string & tags.MaxLength<63206>;
        media?: IMediaInput[] & tags.MaxItems<35>;
        channels?: ITargetInput[] & tags.MaxItems<20>;
        scheduled_at?: Instant | null;
        repeat_rule?: IRepeatRule | null;
        set_id?: IAdsCommon.Id | null;
    }
    type ICreate = IContent;
    type IUpdate = IContent;
    interface ISchedule {
        scheduled_at?: Instant;
        repeat_rule?: IRepeatRule | null;
    }
    interface IReschedule {
        scheduled_at: Instant;
    }
    interface IApprove {
        expected_content_hash: string & tags.Pattern<'^[0-9a-f]{64}$'>;
    }
    interface IReject {
        reason?: (string & tags.MaxLength<500>) | null;
    }
    interface ICancel {
        series?: boolean;
    }
    interface IRetry {
        confirm_checked?: boolean;
    }
    interface IMarkPublished {
        url?: (string & tags.MaxLength<2048>) | null;
    }
    interface INoteAdd {
        body: string & tags.MinLength<1> & tags.MaxLength<2000>;
    }
    interface ISettingUpdate {
        require_approval: boolean;
    }
    interface IListQuery {
        status?: Status[] & tags.MaxItems<10>;
        channel_id?: IAdsCommon.Id;
        from?: Instant;
        to?: Instant;
        page?: number & tags.Type<'uint32'>;
        limit?: number & tags.Type<'uint32'> & tags.Maximum<100>;
    }
    interface ICalendarQuery {
        from: Instant;
        to: Instant;
        channel_id?: IAdsCommon.Id;
    }
    interface IMedia {
        file_id: string;
        mime: string;
        width: number | null;
        height: number | null;
    }
    interface IRepeatRuleView {
        every: RepeatUnit;
        interval: number;
        until: string | null;
    }
    interface IFirstCommentView {
        body: string;
        delay_min: number;
        status: FirstCommentStatus | null;
        due_at: string | null;
        external_id: string | null;
    }
    interface ITargetView {
        id: string;
        channel_id: string;
        platform: ISocialChannel.Platform;
        channel_name: string | null;
        status: TargetStatus;
        body_override: string | null;
        media_override: IMedia[] | null;
        settings: Record<string, unknown>;
        first_comment: IFirstCommentView | null;
        attempts: number;
        attempt_seq: number;
        next_attempt_at: string | null;
        external_post_id: string | null;
        release_url: string | null;
        error_code: string | null;
        error_message: string | null;
        published_at: string | null;
        pause_reason: string | null;
        late: boolean;
        processing_deadline_at: string | null;
    }
    interface IView {
        id: string;
        status: Status;
        body: string;
        media: IMedia[];
        scheduled_at: string | null;
        scheduled_at_vn: string | null;
        repeat_rule: IRepeatRuleView | null;
        series_id: string | null;
        occurrence_index: number;
        source: Source;
        set_id: string | null;
        approved: boolean;
        content_hash: string & tags.Pattern<'^[0-9a-f]{64}$'>;
        approved_by: string | null;
        approved_at: string | null;
        created_by: string | null;
        last_edited_by: string | null;
        version: number;
        created_at: string;
        updated_at: string;
        targets: ITargetView[];
    }
    interface IPage {
        items: IView[];
        meta: IAdsCommon.IPageMeta;
    }
    interface ICalendarTarget {
        channel_id: string;
        platform: ISocialChannel.Platform;
        status: TargetStatus;
    }
    interface ICalendarItem {
        id: string;
        status: Status;
        scheduled_at: string | null;
        scheduled_at_vn: string | null;
        excerpt: string;
        series_id: string | null;
        late: boolean;
        targets: ICalendarTarget[];
    }
    interface INoteView {
        id: string;
        post_id: string;
        author_id: string | null;
        body: string;
        created_at: string;
    }
    interface ISettingView {
        require_approval: boolean;
        updated_at: string | null;
    }
}
