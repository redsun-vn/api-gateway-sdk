import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IVNPayWebConfig } from "../../../../../libs/shared/src/types/payment-service/ivnpay-web.type";
export * as find_one from "./find_one";
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/vnpay-web/configs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, id: string, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IVNPayWebConfig.ICreate>;
    type Output = Primitive<IResponse<IVNPayWebConfig.IResponseWithoutSecret>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/vnpay-web/configs/:id";
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
    const path: (id: string) => string;
}
export declare function update(connection: IConnection, data: update.Input, id: string): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IVNPayWebConfig.IUpdate>;
    type Output = Primitive<IResponse<IVNPayWebConfig.IResponseWithoutSecret>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/vnpay-web/configs/:id";
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
