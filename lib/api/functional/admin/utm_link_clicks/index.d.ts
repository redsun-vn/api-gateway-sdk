import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IUtmLinkClick } from "../../../../libs/shared/src/types/admin-service/utm/iutm-link-click";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
export declare function findAllClick(connection: IConnection, query: findAllClick.Query): Promise<findAllClick.Output>;
export declare namespace findAllClick {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IUtmLinkClick.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/utm-link-clicks";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllClick.Query) => string;
}
