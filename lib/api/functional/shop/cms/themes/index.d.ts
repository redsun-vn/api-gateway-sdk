import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ITheme } from "../../../../../libs/shared/src/types/cms-service/itheme";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ITheme.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/cms/themes";
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
    type Output = Primitive<IResponse<ITheme.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/cms/themes/:id";
        readonly request: null;
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
        readonly path: "/shop/cms/themes/:id";
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
    type Input = Resolved<ITheme.ICreateReq>;
    type Output = Primitive<IResponse<ITheme.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/cms/themes";
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
    type Input = Resolved<ITheme.IUpdateReq>;
    type Output = Primitive<IResponse<ITheme.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/cms/themes/:id";
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
export declare function duplicate(connection: IConnection, data: duplicate.Input): Promise<duplicate.Output>;
export declare namespace duplicate {
    type Input = Resolved<ITheme.IDuplicateReq>;
    type Output = Primitive<IResponse<ITheme.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/cms/themes/duplicate";
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
