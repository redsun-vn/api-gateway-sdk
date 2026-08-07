import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ISmsConfig } from "../../../../../../libs/shared/src/types/notification/isms-config.type";
export declare function testSend(connection: IConnection, id: number, dto: testSend.Input): Promise<testSend.Output>;
export declare namespace testSend {
    type Input = Resolved<ISmsConfig.ITestSendRequest & ISmsConfig.IAdminLisConfigQuery>;
    type Output = Primitive<IResponse<ISmsConfig.ITestSendResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/sms/config/:id/test";
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
