import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmLead } from "../../../../../libs/shared/src/types/crm-service/ilead";
export * as bulk_assign from "./bulk_assign";
export * as recompute_score from "./recompute_score";
export * as score_breakdown from "./score_breakdown";
export * as recompute_bant from "./recompute_bant";
export * as bant_breakdown from "./bant_breakdown";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ICrmLead.ICrmLeadResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/leads";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ICrmLead.ICreate>;
    type Output = Primitive<IResponse<ICrmLead.ICrmLeadResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/leads";
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
export declare function findOne(connection: IConnection, id: number): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<ICrmLead.ICrmLeadResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/leads/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function update(connection: IConnection, id: number, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ICrmLead.IUpdate>;
    type Output = Primitive<IResponse<ICrmLead.ICrmLeadResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/leads/:id";
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
export declare function $delete(connection: IConnection, id: number): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/crm/leads/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function qualify(connection: IConnection, id: number, body: qualify.Input): Promise<qualify.Output>;
export declare namespace qualify {
    type Input = Resolved<ICrmLead.IQualify>;
    type Output = Primitive<IResponse<ICrmLead.IQualifyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/leads/:id/qualify";
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
    const path: (id: number) => string;
}
export declare function assign(connection: IConnection, id: number, body: assign.Input): Promise<assign.Output>;
export declare namespace assign {
    type Input = Resolved<ICrmLead.IAssign>;
    type Output = Primitive<IResponse<ICrmLead.ICrmLeadResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/leads/:id/assign";
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
    const path: (id: number) => string;
}
export declare function $import(connection: IConnection, body: $import.Input): Promise<$import.Output>;
export declare namespace $import {
    type Input = Resolved<ICrmLead.IImportRequest>;
    type Output = Primitive<IResponse<ICrmLead.IImportResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/leads/import";
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
