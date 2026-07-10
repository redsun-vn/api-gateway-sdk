import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmTeam } from "../../../../../libs/shared/src/types/crm-service/iteam";
export * as config from "./config";
export * as detail from "./detail";
export * as members from "./members";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<ICrmTeam.IListQuery>;
    type Output = Primitive<IResponse<ICrmTeam.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/teams";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function mine(connection: IConnection): Promise<mine.Output>;
export declare namespace mine {
    type Output = Primitive<IResponse<ICrmTeam.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/teams/mine";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function dashboard(connection: IConnection, query: dashboard.Query): Promise<dashboard.Output>;
export declare namespace dashboard {
    type Query = Resolved<ICrmTeam.IDashboardQuery>;
    type Output = Primitive<IResponse<ICrmTeam.IDashboardSummaryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/teams/dashboard";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: dashboard.Query) => string;
}
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ICrmTeam.ICreateRequest>;
    type Output = Primitive<IResponse<ICrmTeam.ITeamResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/teams";
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
    type Input = Resolved<ICrmTeam.IUpdateRequest>;
    type Output = Primitive<IResponse<ICrmTeam.ITeamResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/teams";
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
export declare function remove(connection: IConnection, query: remove.Query): Promise<remove.Output>;
export declare namespace remove {
    type Query = Resolved<ICrmTeam.IDeleteQuery>;
    type Output = Primitive<IResponse<ICrmTeam.IDeleteResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/crm/teams";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: remove.Query) => string;
}
