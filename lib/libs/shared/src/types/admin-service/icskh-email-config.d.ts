import { tags } from 'typia';
import { AdminBaseResponse as BaseResponse } from '../common.type';
export declare namespace ICskhEmailConfig {
    interface IEventToggle {
        a: boolean;
        b: boolean;
    }
    interface IUpdate {
        masterEnabled?: boolean;
        flowAEnabled?: boolean;
        flowBEnabled?: boolean;
        recipientsA?: (string & tags.Format<'email'>)[];
        eventToggles?: Record<string, IEventToggle>;
        defaultOffsets?: number[];
    }
    interface IResponse extends BaseResponse {
        masterEnabled: boolean;
        flowAEnabled: boolean;
        flowBEnabled: boolean;
        recipientsA: string[];
        eventToggles: Record<string, IEventToggle>;
        defaultOffsets: number[];
    }
    interface ISendTestA {
        email: string & tags.Format<'email'>;
        eventKey: string;
    }
    interface ISendTestB {
        email: string & tags.Format<'email'>;
        templateId?: number;
        eventKey?: string;
        locale?: string;
    }
    interface ISendTestResult {
        accepted: boolean;
    }
    interface IUnsubscribeRequest {
        token: string;
    }
    interface IUnsubscribeResult {
        success: boolean;
    }
    interface ISendLogQuery {
        status?: string;
        eventType?: string;
        shopId?: string;
        flow?: string;
        dateFrom?: string;
        dateTo?: string;
        page?: number & tags.Type<'uint32'>;
        limit?: number & tags.Type<'uint32'>;
    }
    interface INovuWebhookAck {
        received: boolean;
    }
    interface ISendLogView {
        id: number | string;
        eventType: string;
        milestoneOffset: number;
        recipient: string;
        flow: string;
        referenceId: string;
        shopId: string | null;
        status: string;
        errorCode: number | null;
        errorMessage: string | null;
        retryCount: number;
        sentAt: (string & tags.Format<'date-time'>) | null;
        createdAt?: string & tags.Format<'date-time'>;
    }
}
