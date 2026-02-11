import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IQuery, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { ISystemPricebook } from "../../../../libs/shared/src/types/shop-service/system-pricebook.type";
export * as entry from "./entry";
export * as entry_bulk from "./entry_bulk";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ISystemPricebook.ICreate>;
    type Output = Primitive<IResponse<ISystemPricebook.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/system-pricebook";
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
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<ISystemPricebook.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/system-pricebook/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function find(connection: IConnection, query: find.Query): Promise<find.Output>;
export declare namespace find {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ISystemPricebook.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/system-pricebook";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: find.Query) => string;
}
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ISystemPricebook.IUpdate>;
    type Output = Primitive<IResponse<ISystemPricebook.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/system-pricebook/:id";
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
        readonly path: "/admin/system-pricebook/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
