import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IDepositPolicy } from "../../../../libs/shared/src/types/deposit-service/ideposit-policy";
export declare function findAll(connection: IConnection): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<Array<IDepositPolicy.IPolicyResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/deposit-policies";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IDepositPolicy.IPolicyResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/deposit-policies/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IDepositPolicy.ICreate>;
    type Output = Primitive<IResponse<IDepositPolicy.IPolicyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/deposit-policies";
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
export declare function update(connection: IConnection, id: string, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IDepositPolicy.IUpdate>;
    type Output = Primitive<IResponse<IDepositPolicy.IPolicyResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/deposit-policies/:id";
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
export declare function remove(connection: IConnection, id: string): Promise<remove.Output>;
export declare namespace remove {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/deposit-policies/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function resolve(connection: IConnection, body: resolve.Input): Promise<resolve.Output>;
export declare namespace resolve {
    type Input = Resolved<IDepositPolicy.IResolve>;
    type Output = Primitive<IResponse<IDepositPolicy.IResolveResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/deposit-policies/resolve";
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
