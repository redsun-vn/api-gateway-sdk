import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEmailTemplate, IEmailConfig } from "../../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function testSendTemplate(connection: IConnection, id: number, dto: testSendTemplate.Input): Promise<testSendTemplate.Output>;
export declare namespace testSendTemplate {
    type Input = Resolved<IEmailTemplate.ITestSendRequest>;
    type Output = Primitive<IResponse<IEmailConfig.ITestSendResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/email/templates/:id/test-send";
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
