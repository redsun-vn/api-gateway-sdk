import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IUtmCampaign } from "../../../libs/shared/src/types/admin-service/utm/iutm-campaign";
import type { IQuery, IResponse, IResponsePagination } from "../../../libs/shared/src/types/common.type";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IUtmCampaign.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/utm-campaigns";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
