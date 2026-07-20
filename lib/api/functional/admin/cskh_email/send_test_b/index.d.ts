import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICskhEmailConfig } from "../../../../../libs/shared/src/types/admin-service/icskh-email-config";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function sendTestB(connection: IConnection, data: sendTestB.Input): Promise<sendTestB.Output>;
export declare namespace sendTestB {
    type Input = Resolved<ICskhEmailConfig.ISendTestB>;
    type Output = Primitive<IResponse<ICskhEmailConfig.ISendTestResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cskh-email/send-test-b";
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
