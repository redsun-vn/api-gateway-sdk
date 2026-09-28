import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IPlatformEmail } from "../../../../../../libs/shared/src/types/admin-service/iplatform-email";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function testSendTemplate(connection: IConnection, id: string, body: testSendTemplate.Input): Promise<testSendTemplate.Output>;
export declare namespace testSendTemplate {
    type Input = Resolved<IPlatformEmail.ITestSendInput>;
    type Output = Primitive<IResponse<IPlatformEmail.ITestSendResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/platform-email/templates/:id/test-send";
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
    const path: (id: string) => string;
}
