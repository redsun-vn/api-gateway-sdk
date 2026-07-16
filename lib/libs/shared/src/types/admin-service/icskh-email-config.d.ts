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
    interface ISendTest {
        email: string & tags.Format<'email'>;
    }
    interface ISendTestResult {
        accepted: boolean;
    }
}
