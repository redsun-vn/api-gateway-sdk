import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsRun } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-run";
export declare function setRunLayout(connection: IConnection, id: number, body: setRunLayout.Input): Promise<setRunLayout.Output>;
export declare namespace setRunLayout {
    type Input = Resolved<IMktOsRun.IEmailLayoutSetRequest>;
    type Output = Primitive<IResponse<IMktOsRun.IRunSaved>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/runs/:id/email-layout";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
