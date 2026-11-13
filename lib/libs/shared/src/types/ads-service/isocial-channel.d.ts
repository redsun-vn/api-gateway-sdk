import { tags } from 'typia';
export declare namespace ISocialChannel {
    type Platform = 'facebook' | 'instagram' | 'tiktok' | 'gbp' | 'linkedin';
    type GrantPlatform = 'tiktok' | 'google' | 'linkedin';
    type ChannelStatus = 'active' | 'reauth_needed' | 'revoked';
    type GrantStatus = 'pending_confirmation' | 'listing_targets' | 'active' | 'reauth_needed' | 'revoked';
    type MetricChannelName = 'followers' | 'impressions' | 'reach' | 'engagements' | 'views';
    type MetricPostName = 'likes' | 'comments' | 'shares' | 'views' | 'impressions' | 'reach' | 'engagements';
    interface IChannelView {
        id: string;
        platform: Platform;
        grant_id: string | null;
        external_id: string;
        display_name: string | null;
        avatar_url: string | null;
        token_kind: 'crm_delegated' | 'grant';
        status: ChannelStatus;
        can_publish: boolean;
        settings: Record<string, unknown>;
        last_error_code: string | null;
        refresh_expiring_soon: boolean;
        refresh_expires_at: string | null;
        posting_times: string[];
        created_at: string;
        revoked_at: string | null;
    }
    interface IPostingTimesUpdate {
        times: (string & tags.Pattern<'^([01][0-9]|2[0-3]):[0-5][0-9]$'>)[] & tags.MaxItems<24>;
    }
    interface ITikTokCreatorInfo {
        channel_id: string;
        creator_username: string | null;
        creator_nickname: string | null;
        creator_avatar_url: string | null;
        privacy_level_options: string[];
        comment_disabled: boolean;
    }
    interface IGrantView {
        id: string;
        platform: GrantPlatform;
        status: GrantStatus;
        display_name: string | null;
        external_principal_id: string;
        refresh_expiring_soon: boolean;
        refresh_expires_at: string | null;
        last_error_code: string | null;
        created_at: string;
    }
    interface IList {
        channels: IChannelView[];
        pending_grants: IGrantView[];
    }
    interface ICapabilities {
        text: {
            max_length: number;
            title_max_length: number | null;
        };
        media: {
            min: number;
            max: number;
            source_mimes: string[];
            sent_as: 'jpeg' | 'keep';
            min_short_edge_px: number | null;
        };
        first_comment: boolean;
        required_settings: string[];
        metrics: {
            channel: MetricChannelName[];
            post: MetricPostName[];
        };
        processing_timeout_ms: number | null;
        unverified: string[];
    }
    interface IPlatformAvailability {
        platform: Platform;
        connect_mode: 'crm_link' | 'oauth';
        configured: boolean;
        capabilities: ICapabilities;
    }
    interface IMetaLinkResult {
        needs_crm_facebook_login: boolean;
        reason: 'not_connected' | 'missing_ads_read' | 'missing_social_publish' | null;
        pages_needing_relogin: number;
        channels: IChannelView[];
    }
    interface IOAuthStartQuery {
        return_url: string & tags.MaxLength<2048>;
    }
    interface IOAuthStartResult {
        url: string;
    }
    interface IOAuthComplete {
        completion_token: string & tags.Pattern<'^[0-9a-f]{64}$'>;
    }
    interface IOAuthCompleteResult {
        grant: IGrantView;
        channels: IChannelView[];
    }
    interface ITargetOption {
        external_id: string;
        display_name: string;
        account_name: string | null;
    }
    interface ITargetListing {
        state: 'listing' | 'ready' | 'failed';
        targets: ITargetOption[];
        error_code: string | null;
    }
    interface ITargetsSelect {
        external_ids: Array<string & tags.MinLength<1> & tags.MaxLength<255>> & tags.MinItems<1> & tags.MaxItems<100> & tags.UniqueItems;
    }
}
