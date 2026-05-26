import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmOpportunity } from "../../../../../libs/shared/src/types/crm-service/iopportunity";
export * as bulk_reassign from "./bulk_reassign";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ICrmOpportunity.IListColumn>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/opportunities";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function kanban(connection: IConnection, query: kanban.Query): Promise<kanban.Output>;
export declare namespace kanban {
    type Query = Resolved<ICrmOpportunity.IQueryPipeline>;
    type Output = Primitive<IResponse<ICrmOpportunity.IKanbanResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/opportunities/kanban";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: kanban.Query) => string;
}
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ICrmOpportunity.ICreate>;
    type Output = Primitive<IResponse<ICrmOpportunity.ICrmOpportunityResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/opportunities";
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
    type Output = Primitive<IResponse<ICrmOpportunity.ICrmOpportunityResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/opportunities/:id";
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
    type Input = Resolved<Partial<ICrmOpportunity.ICreate>>;
    type Output = Primitive<IResponse<ICrmOpportunity.ICrmOpportunityResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/opportunities/:id";
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
        readonly path: "/shop/crm/opportunities/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function move(connection: IConnection, id: number, body: move.Input): Promise<move.Output>;
export declare namespace move {
    type Input = Resolved<ICrmOpportunity.IMove>;
    type Output = Primitive<IResponse<ICrmOpportunity.ICrmOpportunityResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/opportunities/:id/move";
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
export declare function won(connection: IConnection, id: number, body: won.Input): Promise<won.Output>;
export declare namespace won {
    type Input = Resolved<ICrmOpportunity.IWon>;
    type Output = Primitive<IResponse<ICrmOpportunity.ICrmOpportunityResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/opportunities/:id/won";
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
export declare function lost(connection: IConnection, id: number, body: lost.Input): Promise<lost.Output>;
export declare namespace lost {
    type Input = Resolved<ICrmOpportunity.ILost>;
    type Output = Primitive<IResponse<ICrmOpportunity.ICrmOpportunityResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/opportunities/:id/lost";
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
