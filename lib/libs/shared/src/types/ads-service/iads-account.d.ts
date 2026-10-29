import { tags } from 'typia';
import { IAdsCommon } from './iads-common';
export declare namespace IAdsAccount {
    interface IView {
        id: string;
        platform: IAdsCommon.Platform;
        platform_label: string | null;
        source: 'api' | 'manual';
        external_account_id: string;
        linked_external_account_id: string | null;
        name: string;
        currency: string;
        timezone: string;
        is_tracked: boolean;
        created_at: string;
        updated_at: string;
    }
    interface IListQuery {
        platform?: IAdsCommon.Platform;
        source?: 'api' | 'manual';
        include_untracked?: boolean;
    }
    interface ICreateManual {
        platform: IAdsCommon.Platform;
        platform_label?: string & tags.MaxLength<50>;
        name: string & tags.MinLength<1> & tags.MaxLength<255>;
        currency: IAdsCommon.CurrencyCode;
        timezone: string & tags.MaxLength<64>;
        linked_external_account_id?: string & tags.MaxLength<64>;
    }
    interface IUpdate {
        name?: string & tags.MinLength<1> & tags.MaxLength<255>;
        platform_label?: (string & tags.MaxLength<50>) | null;
        is_tracked?: boolean;
        linked_external_account_id?: (string & tags.MaxLength<64>) | null;
    }
}
