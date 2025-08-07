import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IShopInvoice } from "../../../../libs/shared/src/types/shop-service/invoice.type";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IShopInvoice.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/invoices";
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
    type Output = Primitive<IResponse<IShopInvoice.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/invoices/:id";
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
    type Input = Resolved<IShopInvoice.ICreate>;
    type Output = Primitive<IResponse<IShopInvoice.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/invoices";
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
    type Input = Resolved<IShopInvoice.IUpdate>;
    type Output = Primitive<IResponse<IShopInvoice.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/invoices/:id";
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
        readonly path: "/admin/invoices/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function approve(connection: IConnection, id: string): Promise<approve.Output>;
export declare namespace approve {
    type Output = Primitive<IResponse<IShopInvoice.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/invoices/:id/approve";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function send(connection: IConnection, id: string, data: send.Input): Promise<send.Output>;
export declare namespace send {
    type Input = Resolved<IShopInvoice.sendMail>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/invoices/:id/send";
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
