import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IPlatformEmail } from "../../../../../../libs/shared/src/types/admin-service/iplatform-email";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function testSend(connection: IConnection, body: testSend.Input): Promise<testSend.Output>;
export declare namespace testSend {
    type Input = Resolved<IPlatformEmail.ISenderTestSend>;
    type Output = Primitive<IResponse<IPlatformEmail.ISenderTestResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/platform-email/senders/test-send";
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
