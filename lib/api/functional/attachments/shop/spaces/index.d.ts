import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IQuery, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ISpace } from "../../../../../libs/shared/src/types/ifile";
export declare function createSpace(connection: IConnection, input: createSpace.Input): Promise<createSpace.Output>;
export declare namespace createSpace {
    type Input = Resolved<ISpace.ICreate>;
    type Output = Primitive<IResponse<ISpace.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/attachments/shop/spaces";
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
export declare function findAllSpace(connection: IConnection, query: findAllSpace.Query): Promise<findAllSpace.Output>;
export declare namespace findAllSpace {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ISpace.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/attachments/shop/spaces";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllSpace.Query) => string;
}
export declare function findOneSpace(connection: IConnection, id: string): Promise<findOneSpace.Output>;
export declare namespace findOneSpace {
    type Output = Primitive<IResponse<ISpace.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/attachments/shop/spaces/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function updateSpace(connection: IConnection, id: string, input: updateSpace.Input): Promise<updateSpace.Output>;
export declare namespace updateSpace {
    type Input = Resolved<ISpace.IUpdate>;
    type Output = Primitive<IResponse<ISpace.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/attachments/shop/spaces/:id";
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
export declare function deleteSpace(connection: IConnection, id: string): Promise<deleteSpace.Output>;
export declare namespace deleteSpace {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/attachments/shop/spaces/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
