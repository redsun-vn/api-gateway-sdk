import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IMktOsRun } from "../../../../../../../libs/shared/src/types/crm-service/imkt-os-run";
export declare function confirmStep(connection: IConnection, id: number, stage: IMktOsRun.Stage, body?: confirmStep.Input): Promise<confirmStep.Output>;
export declare namespace confirmStep {
    type Input = Resolved<IMktOsRun.IStepConfirmRequest>;
    type Output = Primitive<IResponse<IMktOsRun.IRunSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/runs/:id/steps/:stage/confirm";
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
