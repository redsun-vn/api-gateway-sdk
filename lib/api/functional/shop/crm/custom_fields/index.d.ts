import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICustomField } from "../../../../../libs/shared/src/types/crm-service/icustom-field";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<ICustomField.IFindAllQuery>;
    type Output = Primitive<IResponse<ICustomField.IFindAllResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/custom-fields";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ICustomField.ICreateBody>;
    type Output = Primitive<IResponse<ICustomField.ICustomFieldResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/custom-fields";
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
    type Input = Resolved<ICustomField.IUpdateBody>;
    type Output = Primitive<IResponse<ICustomField.ICustomFieldResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/crm/custom-fields/:id";
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
export declare function $delete(connection: IConnection, id: string, body: $delete.Input): Promise<$delete.Output>;
export declare namespace $delete {
    type Input = Resolved<ICustomField.IDeleteBody>;
    type Output = Primitive<IResponse<ICustomField.ICustomFieldResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/crm/custom-fields/:id";
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
