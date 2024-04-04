import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IApiKey } from "../../../../libs/shared/src/types/iapi-key.type";
export declare function findAll(connection: IConnection): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<Array<IApiKey.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/api-keys";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function create(connection: IConnection): Promise<create.Output>;
export declare namespace create {
    type Output = Primitive<IResponse<IApiKey.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/api-keys";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function update(connection: IConnection, data: update.Input, id: string): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<IApiKey.IUpdate>;
    type Output = Primitive<IResponse<IApiKey.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/api-keys/:id";
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
