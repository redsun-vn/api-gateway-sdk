import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IMktOsRun } from "../../../../../../../libs/shared/src/types/crm-service/imkt-os-run";
export declare function retryStep(connection: IConnection, id: number, stage: IMktOsRun.Stage, body: retryStep.Input): Promise<retryStep.Output>;
export declare namespace retryStep {
    type Input = Resolved<IMktOsRun.IStepRetryRequest>;
    type Output = Primitive<IResponse<IMktOsRun.IRunSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/runs/:id/steps/:stage/retry";
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
    const path: (id: number, stage: IMktOsRun.Stage) => string;
}
