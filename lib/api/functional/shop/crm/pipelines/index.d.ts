import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmPipeline } from "../../../../../libs/shared/src/types/crm-service/ipipeline";
export * as auto_promote from "./auto_promote";
export * as qualify_gate from "./qualify_gate";
export * as bant_rubric from "./bant_rubric";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<ICrmPipeline.IFindAllQuery>;
    type Output = Primitive<IResponse<ICrmPipeline.IFindAllResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/pipelines";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, id: number): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<ICrmPipeline.IFindOneResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/pipelines/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function instantiate(connection: IConnection, body: instantiate.Input): Promise<instantiate.Output>;
export declare namespace instantiate {
    type Input = Resolved<ICrmPipeline.IInstantiateBody>;
    type Output = Primitive<IResponse<ICrmPipeline.IPipelineResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/pipelines/instantiate";
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
    const path: () => string;
}
export declare function update(connection: IConnection, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ICrmPipeline.IUpdateBody>;
    type Output = Primitive<IResponse<ICrmPipeline.IPipelineResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/pipelines";
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
    const path: () => string;
}
export declare function deactivate(connection: IConnection, body: deactivate.Input): Promise<deactivate.Output>;
export declare namespace deactivate {
    type Input = Resolved<ICrmPipeline.IDeactivateBody>;
    type Output = Primitive<IResponse<ICrmPipeline.IDeactivateResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/pipelines/deactivate";
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
    const path: () => string;
}
