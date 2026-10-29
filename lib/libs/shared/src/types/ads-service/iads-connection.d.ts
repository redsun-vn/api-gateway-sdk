import { tags } from 'typia';
export declare namespace IAdsConnection {
    type Platform = 'meta' | 'google' | 'tiktok';
    type Status = 'pending_confirmation' | 'listing_accounts' | 'active' | 'expiring_soon' | 'reauth_needed' | 'revoked';
    interface IPlatform {
        platform: Platform;
        connect_mode: 'oauth' | 'crm_link';
        configured: boolean;
    }
    interface IAccount {
        id: string;
        external_account_id: string;
        name: string;
        currency: string;
        timezone: string;
        account_status: string | null;
        is_tracked: boolean;
        backfilled_at: string | null;
        last_synced_at: string | null;
        last_sync_status: string | null;
        paused_reason: string | null;
    }
    interface IView {
        id: string;
        platform: Platform;
        token_kind: 'user' | 'refresh' | 'advertiser' | 'crm_delegated';
        status: Status;
        display_name: string | null;
        external_principal_id: string | null;
        token_expires_at: string | null;
        connected_by: string | null;
        last_error_code: string | null;
        last_error_at: string | null;
        created_at: string;
        revoked_at: string | null;
        accounts: IAccount[];
    }
    interface IHealth {
        attention: Array<{
            connection_id: string;
            platform: string;
            status: Status;
            token_expires_at: string | null;
            last_error_code: string | null;
        }>;
        paused_accounts: number;
    }
    interface IMetaLinkResult {
        needs_crm_facebook_login: boolean;
        reason: 'not_connected' | 'missing_ads_read' | null;
        connection: IView | null;
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
    interface IAccountsUpdate {
        tracked_account_ids: Array<string & tags.Pattern<'^[1-9][0-9]{0,18}$'>> & tags.MaxItems<500>;
    }
}
