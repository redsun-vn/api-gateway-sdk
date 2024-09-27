import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../libs/shared/src/types/common.type";
import type { IShopSalesChannel } from "../../../libs/shared/src/types/ishop-sales-channel";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IShopSalesChannel.IShopSalesChannelResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop-sales-channels";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
