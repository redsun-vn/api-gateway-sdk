import { tags } from 'typia';
export declare namespace IPlatformEmail {
    interface IEventGroup {
        key: string;
        flow: string;
        name: string;
        defaultRecipients: string;
        sortOrder: number;
    }
    interface IEvent {
        displayCode: string;
        eventKey: string;
        nameVi: string;
        groupKey: string;
        flow: string;
        audience: string;
        schedule: string;
        nature: string;
        sendDelay?: string;
        isWired: boolean;
    }
    interface IBrand {
        id: number | string;
        code: string;
        name: string;
        senderDisplayName: string;
        deptMailbox: string;
        shopSource: string | null;
        isSystem: boolean;
        status: string;
    }
    interface IBrandCreate {
        code: string;
        name: string;
        senderDisplayName: string;
        deptMailbox: string;
        shopSource?: string | null;
    }
    type IBrandUpdate = Partial<IBrandCreate>;
    interface ITemplate {
        id: number | string;
        eventKey: string;
        flow: string;
        brandCode: string;
        lang: string;
        code: string;
        name: string;
        status: string;
        subject: string;
        preheader: string | null;
        bodyHtml: string;
        designJson: Record<string, unknown> | null;
        variables: string[];
        senderDisplayName: string | null;
        fromEmail: string | null;
        replyTo: string | null;
        cc: string[];
        bcc: string[];
        sendDelay: string | null;
        dailySendHour: string | null;
        reminderOffsets: number[];
    }
    interface ITemplateCreate {
        eventKey: string;
        flow: string;
        brandCode: string;
        lang: string;
        name: string;
        subject: string;
        bodyHtml: string;
        preheader?: string | null;
        designJson?: Record<string, unknown> | null;
        variables?: string[];
        senderDisplayName?: string | null;
        fromEmail?: string | null;
        replyTo?: string | null;
        cc?: string[];
        bcc?: string[];
        sendDelay?: string | null;
        dailySendHour?: string | null;
        reminderOffsets?: number[];
    }
    type ITemplateUpdate = Partial<ITemplateCreate>;
    interface ITemplateListQuery {
        eventKey?: string;
        flow?: string;
        brandCode?: string;
        status?: string;
    }
    interface IEventToggle {
        cus: boolean;
        int: boolean;
    }
    interface IConfig {
        id: number | string;
        brandCode: string;
        masterEnabled: boolean;
        flowCusEnabled: boolean;
        flowIntEnabled: boolean;
        eventToggles: Record<string, IEventToggle>;
        internalRecipients: Record<string, string[]>;
        defaultOffsets: number[];
    }
    interface IConfigUpdate {
        masterEnabled?: boolean;
        flowCusEnabled?: boolean;
        flowIntEnabled?: boolean;
        eventToggles?: Record<string, IEventToggle>;
        internalRecipients?: Record<string, string[]>;
        defaultOffsets?: number[];
    }
    interface IStatsQuery {
        dateFrom: string;
        dateTo: string;
        groupBy?: string;
    }
    interface IStatsRow {
        key: string | null;
        total: number;
        sent: number;
        failed: number;
        skipped: number;
    }
    interface ISender {
        id: number | string;
        brand_code: string;
        provider: string;
        from_email: string;
        from_name: string;
        reply_to: string | null;
        is_active: boolean;
        last_test_ok_at: (string & tags.Format<'date-time'>) | null;
        transport_config: unknown;
    }
    interface ISenderUpsert {
        brand_code: string;
        provider: string;
        credentials: Record<string, unknown>;
        transport_config: Record<string, unknown>;
        from_email: string;
        from_name: string;
        reply_to?: string | null;
    }
    interface ISenderTestSend {
        brandCode: string;
        recipient: string;
    }
    interface ISenderTestResult {
        ok: boolean;
        errorMessage?: string;
    }
    interface IDeleteResult {
        deleted: boolean;
    }
}
