import { tags } from 'typia';
export declare namespace ICrmNotificationPreference {
    export interface IPreference {
        in_app_enabled: boolean;
        email_enabled: boolean;
        quiet_hours_start: string | null;
        quiet_hours_end: string | null;
    }
    type HHmm = string & tags.Pattern<'^([01][0-9]|2[0-3]):[0-5][0-9]$'>;
    export interface IUpdateBody {
        in_app_enabled?: boolean;
        email_enabled?: boolean;
        quiet_hours_start?: HHmm | null;
        quiet_hours_end?: HHmm | null;
    }
    export {};
}
