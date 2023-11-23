import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../libs/shared/src/types/common.type";
import type { IBusinessType } from "../../../libs/shared/src/types/ibusiness-type";
export declare function findAll(connection: IConnection): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<Array<IBusinessType.IBusinessTypeResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/business-types";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function search(connection: IConnection): Promise<search.Output>;
export declare namespace search {
    type Output = Primitive<IResponse<IResponsePagination<IBusinessType.IBusinessTypeResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/business-types/search";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IBusinessType.IBusinessTypeResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/business-types/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<IBusinessType.ICreate>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/business-types";
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
export declare function update(connection: IConnection, data: update.Input, id: string): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<IBusinessType.IUpdate>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/business-types/:id";
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
        readonly path: "/business-types/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
