import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEmailSenderIdentity, IEmailConfig } from "../../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function testSendSenderIdentity(connection: IConnection, id: number, dto: testSendSenderIdentity.Input): Promise<testSendSenderIdentity.Output>;
export declare namespace testSendSenderIdentity {
    type Input = Resolved<IEmailSenderIdentity.ITestSendRequest>;
    type Output = Primitive<IResponse<IEmailConfig.ITestSendResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/email/identities/:id/test-send";
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
