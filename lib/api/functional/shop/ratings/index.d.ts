import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRating } from "../../../../libs/shared/src/types/comment-service/irating.type";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
export * as criteria from "./criteria";
export * as statistics from "./statistics";
export * as toggle_visibility from "./toggle_visibility";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IRating.IRatingResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ratings";
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
    type Output = Primitive<IResponse<IRating.IRatingResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ratings/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IRating.ICreateShop>;
    type Output = Primitive<IResponse<IRating.IRatingResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ratings";
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
export declare function update(connection: IConnection, id: number, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IRating.IUpdate>;
    type Output = Primitive<IResponse<IRating.IRatingResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/ratings/:id";
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
export declare function verify(connection: IConnection, id: number, data: verify.Input): Promise<verify.Output>;
export declare namespace verify {
    type Input = Resolved<IRating.IVerify>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ratings/:id/verify";
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
export declare function respond(connection: IConnection, id: number, data: respond.Input): Promise<respond.Output>;
export declare namespace respond {
    type Input = Resolved<IRating.IShopResponse>;
    type Output = Primitive<IResponse<IRating.IRatingResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ratings/:id/respond";
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
export declare function $delete(connection: IConnection, id: number): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/ratings/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
