import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEmailConfig } from "../../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function testSendConfig(connection: IConnection, id: number, dto: testSendConfig.Input): Promise<testSendConfig.Output>;
export declare namespace testSendConfig {
    type Input = Resolved<IEmailConfig.ITestSendRequest>;
    type Output = Primitive<IResponse<IEmailConfig.ITestSendResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/email/config/:id/test-send";
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
    const path: (id: number) => string;
}
