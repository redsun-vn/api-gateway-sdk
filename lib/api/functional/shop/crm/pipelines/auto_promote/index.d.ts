import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmOpportunity } from "../../../../../../libs/shared/src/types/crm-service/iopportunity";
export declare function getAutoPromote(connection: IConnection, pipelineId: number): Promise<getAutoPromote.Output>;
export declare namespace getAutoPromote {
    type Output = Primitive<IResponse<ICrmOpportunity.IAutoPromoteConfig>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/pipelines/:id/auto-promote";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (pipelineId: number) => string;
}
export declare function updateAutoPromote(connection: IConnection, pipelineId: number, body: updateAutoPromote.Input): Promise<updateAutoPromote.Output>;
export declare namespace updateAutoPromote {
    type Input = Resolved<ICrmOpportunity.IAutoPromoteConfig>;
    type Output = Primitive<IResponse<ICrmOpportunity.IAutoPromoteConfig>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/crm/pipelines/:id/auto-promote";
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
