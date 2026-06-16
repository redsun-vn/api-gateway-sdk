import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IKpiTargetFindAllQuery, IKpiTargetFindAllResponse, IKpiTargetLeaderboardQuery, IKpiTargetLeaderboardRow, IKpiTargetResponse, IKpiTargetProgress, IKpiTargetCreate, IKpiTargetUpdate, IKpiTargetCascadeApply } from "../../../../../libs/shared/src/types/crm-service/kpi-target";
export * as hierarchy_options from "./hierarchy_options";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IKpiTargetFindAllQuery>;
    type Output = Primitive<IResponse<IKpiTargetFindAllResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/kpi-targets";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function leaderboard(connection: IConnection, query: leaderboard.Query): Promise<leaderboard.Output>;
export declare namespace leaderboard {
    type Query = Resolved<IKpiTargetLeaderboardQuery>;
    type Output = Primitive<IResponse<Array<IKpiTargetLeaderboardRow>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/kpi-targets/leaderboard";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: leaderboard.Query) => string;
}
export declare function findOne(connection: IConnection, id: number): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IKpiTargetResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/kpi-targets/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function progress(connection: IConnection, id: number): Promise<progress.Output>;
export declare namespace progress {
    type Output = Primitive<IResponse<IKpiTargetProgress>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/kpi-targets/:id/progress";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IKpiTargetCreate>;
    type Output = Primitive<IResponse<IKpiTargetResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/kpi-targets";
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
export declare function update(connection: IConnection, id: number, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IKpiTargetUpdate>;
    type Output = Primitive<IResponse<IKpiTargetResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/kpi-targets/:id";
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
        readonly path: "/shop/crm/kpi-targets/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function cascade(connection: IConnection, id: number, body: cascade.Input): Promise<cascade.Output>;
export declare namespace cascade {
    type Input = Resolved<IKpiTargetCascadeApply>;
    type Output = Primitive<IResponse<Array<IKpiTargetResponse>>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/kpi-targets/:id/cascade";
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
export declare function activate(connection: IConnection, id: number): Promise<activate.Output>;
export declare namespace activate {
    type Output = Primitive<IResponse<IKpiTargetResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/kpi-targets/:id/activate";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
