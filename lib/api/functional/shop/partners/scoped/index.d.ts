import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IPartner } from "../../../../../libs/shared/src/types/partner-service/ipartner";
export declare function findAllScoped(connection: IConnection, query: findAllScoped.Query): Promise<findAllScoped.Output>;
export declare namespace findAllScoped {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IPartner.IPartnerResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/partners/scoped";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllScoped.Query) => string;
}
export declare function findOneScoped(connection: IConnection, id: string): Promise<findOneScoped.Output>;
export declare namespace findOneScoped {
    type Output = Primitive<IResponse<IPartner.IPartnerResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/partners/scoped/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
