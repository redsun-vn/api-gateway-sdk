import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaffContract } from "../../../../../libs/shared/src/types/hr/istaff-contract";
export * as $export from "./$export";
export * as file_url from "./file_url";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IStaffContract.IListQuery>;
    type Output = Primitive<IResponse<IStaffContract.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/contracts";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function summary(connection: IConnection): Promise<summary.Output>;
export declare namespace summary {
    type Output = Primitive<IResponse<IStaffContract.ISummary>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/contracts/summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IStaffContract.ICreateInput>;
    type Output = Primitive<IResponse<IStaffContract.IMutationResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/contracts";
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
    type Output = Primitive<IResponse<IStaffContract.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/contracts/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IStaffContract.IUpdateInput>;
    type Output = Primitive<IResponse<IStaffContract.IMutationResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/contracts/:id";
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
        readonly path: "/shop/hr/contracts/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function renew(connection: IConnection, id: string, data: renew.Input): Promise<renew.Output>;
export declare namespace renew {
    type Input = Resolved<IStaffContract.IRenewInput>;
    type Output = Primitive<IResponse<IStaffContract.IMutationResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/contracts/:id/renew";
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
export declare function terminate(connection: IConnection, id: string, data: terminate.Input): Promise<terminate.Output>;
export declare namespace terminate {
    type Input = Resolved<IStaffContract.ITerminateInput>;
    type Output = Primitive<IResponse<IStaffContract.IMutationResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/contracts/:id/terminate";
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
