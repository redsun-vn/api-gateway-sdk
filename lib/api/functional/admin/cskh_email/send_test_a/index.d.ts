import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICskhEmailConfig } from "../../../../../libs/shared/src/types/admin-service/icskh-email-config";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function sendTestA(connection: IConnection, data: sendTestA.Input): Promise<sendTestA.Output>;
export declare namespace sendTestA {
    type Input = Resolved<ICskhEmailConfig.ISendTest>;
    type Output = Primitive<IResponse<ICskhEmailConfig.ISendTestResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cskh-email/send-test-a";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
