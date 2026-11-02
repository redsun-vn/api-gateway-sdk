import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IMktOsRun } from "../../../../../../../libs/shared/src/types/crm-service/imkt-os-run";
export declare function testSend(connection: IConnection, id: number, seq: number): Promise<testSend.Output>;
export declare namespace testSend {
    type Output = Primitive<IResponse<IMktOsRun.IEmailTestSendResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/runs/:id/messages/:seq/test-send";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number, seq: number) => string;
}
