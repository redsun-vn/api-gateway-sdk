import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ILineItemReport } from "../../../../../libs/shared/src/types/report-service/line-item-report.type";
export declare function channelSelling(connection: IConnection, query: channelSelling.Query): Promise<channelSelling.Output>;
export declare namespace channelSelling {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ILineItemReport.ISaleChannelItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/channel-selling";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: channelSelling.Query) => string;
}
