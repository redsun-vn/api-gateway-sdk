import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMLeadScoringConfig } from "../../../../../libs/shared/src/types/admin-service/crm/lead-scoring-config";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
export * as set_default_config from "./set_default_config";
export * as activate_config from "./activate_config";
export * as clone_config from "./clone_config";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ICRMLeadScoringConfig.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/lead-scoring-configs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<ICRMLeadScoringConfig.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/lead-scoring-configs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ICRMLeadScoringConfig.ICreate>;
    type Output = Primitive<IResponse<ICRMLeadScoringConfig.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/crm/lead-scoring-configs";
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
export declare function update(connection: IConnection, data: update.Input, id: string): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ICRMLeadScoringConfig.IUpdate>;
    type Output = Primitive<IResponse<ICRMLeadScoringConfig.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/crm/lead-scoring-configs/:id";
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
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/crm/lead-scoring-configs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
