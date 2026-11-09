import { tags } from 'typia';
import { IAdsCommon } from './iads-common';
import { ISocialChannel } from './isocial-channel';
import { ISocialPost } from './isocial-post';
export declare namespace ISocialAnalytics {
    interface ISummaryQuery {
        from?: IAdsCommon.CalendarDate;
        to?: IAdsCommon.CalendarDate;
        channel_ids?: IAdsCommon.Id[] & tags.MaxItems<100>;
    }
    interface IChannelStats {
        channel_id: string;
        platform: ISocialChannel.Platform;
        display_name: string | null;
        followers: number | null;
        followers_delta: number | null;
        impressions: number | null;
        reach: number | null;
        engagements: number | null;
        views: number | null;
        days_with_data: number;
    }
    interface IDay {
        date: string;
        followers: number | null;
        impressions: number | null;
        reach: number | null;
        engagements: number | null;
        views: number | null;
    }
    interface ITopPost {
        post_id: string;
        target_id: string;
        channel_id: string;
        platform: ISocialChannel.Platform;
        channel_name: string | null;
        excerpt: string;
        published_at: string | null;
        release_url: string | null;
        engagements: number | null;
        likes: number | null;
        comments: number | null;
        shares: number | null;
        views: number | null;
        reach: number | null;
    }
    interface ISpendAmount {
        currency: string;
        spend: string;
    }
    interface ISpendByPlatform extends ISpendAmount {
        platform: IAdsCommon.Platform;
    }
    interface ISpendSummary {
        by_currency: ISpendAmount[];
        by_platform: ISpendByPlatform[];
    }
    interface ISummary {
        from: string;
        to: string;
        channels: IChannelStats[];
        days: IDay[];
        top_posts: ITopPost[];
        ads_spend: ISpendSummary;
    }
    interface IPostDay {
        date: string;
        likes: number | null;
        comments: number | null;
        shares: number | null;
        views: number | null;
        impressions: number | null;
        reach: number | null;
        engagements: number | null;
    }
    interface IPostTarget {
        target_id: string;
        channel_id: string;
        platform: ISocialChannel.Platform;
        channel_name: string | null;
        status: ISocialPost.TargetStatus;
        published_at: string | null;
        days: IPostDay[];
    }
    interface IPostStats {
        post_id: string;
        targets: IPostTarget[];
    }
}
