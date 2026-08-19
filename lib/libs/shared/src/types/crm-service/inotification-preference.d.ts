import { tags } from 'typia';
export declare namespace ICrmNotificationPreference {
    export type Category = 'ownership' | 'record_change' | 'sla' | 'performance' | 'system' | 'digest';
    export type Channel = 'in_app' | 'email';
    export type CategoryPrefs = {
        [K in Category]?: {
            [C in Channel]?: boolean;
        };
    };
    export interface IPreference {
        in_app_enabled: boolean;
        email_enabled: boolean;
        category_prefs: CategoryPrefs;
        quiet_hours_start: string | null;
        quiet_hours_end: string | null;
        sent_today: number;
        daily_cap: number;
    }
    type HHmm = string & tags.Pattern<'^([01][0-9]|2[0-3]):[0-5][0-9]$'>;
    export interface IUpdateBody {
        in_app_enabled?: boolean;
        email_enabled?: boolean;
        category_prefs?: CategoryPrefs;
        quiet_hours_start?: HHmm | null;
        quiet_hours_end?: HHmm | null;
    }
    export {};
}
