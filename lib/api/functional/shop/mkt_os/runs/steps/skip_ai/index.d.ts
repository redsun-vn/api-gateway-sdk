import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IMktOsRun } from "../../../../../../../libs/shared/src/types/crm-service/imkt-os-run";
export declare function skipStepAi(connection: IConnection, id: number, stage: IMktOsRun.Stage): Promise<skipStepAi.Output>;
export declare namespace skipStepAi {
    type Output = Primitive<IResponse<IMktOsRun.IRunSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/runs/:id/steps/:stage/skip-ai";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number, stage: IMktOsRun.Stage) => string;
}
