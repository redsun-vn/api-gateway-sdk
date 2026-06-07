import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmPipeline } from "../../../../../../libs/shared/src/types/crm-service/ipipeline";
export declare function getQualifyGate(connection: IConnection, pipelineId: number): Promise<getQualifyGate.Output>;
export declare namespace getQualifyGate {
    type Output = Primitive<IResponse<ICrmPipeline.IQualifyGate>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/pipelines/:id/qualify-gate";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (pipelineId: number) => string;
}
export declare function updateQualifyGate(connection: IConnection, pipelineId: number, body: updateQualifyGate.Input): Promise<updateQualifyGate.Output>;
export declare namespace updateQualifyGate {
    type Input = Resolved<ICrmPipeline.IQualifyGate>;
    type Output = Primitive<IResponse<ICrmPipeline.IQualifyGate>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/crm/pipelines/:id/qualify-gate";
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
    const path: (pipelineId: number) => string;
}
