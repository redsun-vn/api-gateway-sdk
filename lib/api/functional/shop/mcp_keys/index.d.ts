import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IStaffApiKey } from "../../../../libs/shared/src/types/istaff-api-key.type";
export declare function findAll(connection: IConnection): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<Array<IStaffApiKey.IListItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mcp-keys";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IStaffApiKey.ICreateBody>;
    type Output = Primitive<IResponse<IStaffApiKey.ICreateResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mcp-keys";
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
export declare function revoke(connection: IConnection, id: string): Promise<revoke.Output>;
export declare namespace revoke {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mcp-keys/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
