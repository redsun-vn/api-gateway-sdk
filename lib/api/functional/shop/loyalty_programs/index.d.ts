import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { ILoyaltyProgram } from "../../../../libs/shared/src/types/loyalty-service/iloyalty-program";
export * as order from "./order";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<ILoyaltyProgram.ILoyaltyProgramCreate>;
    type Output = Primitive<IResponse<ILoyaltyProgram.ILoyaltyProgramResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/loyalty-programs";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ILoyaltyProgram.ILoyaltyProgramResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty-programs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (query: list.Query) => string;
}
export declare function detail(connection: IConnection, id: string): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<ILoyaltyProgram.ILoyaltyProgramResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty-programs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<ILoyaltyProgram.ILoyaltyProgramUpdate>;
    type Output = Primitive<IResponse<ILoyaltyProgram.ILoyaltyProgramResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/loyalty-programs/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/loyalty-programs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
