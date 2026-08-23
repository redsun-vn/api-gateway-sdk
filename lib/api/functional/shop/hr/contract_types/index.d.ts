import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaffContractType } from "../../../../../libs/shared/src/types/hr/istaff-contract";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IStaffContractType.IListQuery>;
    type Output = Primitive<IResponse<Array<IStaffContractType.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/contract-types";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IStaffContractType.ICreateInput>;
    type Output = Primitive<IResponse<IStaffContractType.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/contract-types";
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
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IStaffContractType.IUpdateInput>;
    type Output = Primitive<IResponse<IStaffContractType.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/contract-types/:id";
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
        readonly path: "/shop/hr/contract-types/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
