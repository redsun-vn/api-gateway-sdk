import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmPipeline } from "../../../../../libs/shared/src/types/crm-service/ipipeline";
export * as auto_promote from "./auto_promote";
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
