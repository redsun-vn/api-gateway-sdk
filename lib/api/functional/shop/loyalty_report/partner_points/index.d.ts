import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IReportLoyalty } from "../../../../../libs/shared/src/types/loyalty-service/ireport";
export declare function getPartnerPoints(connection: IConnection, query: getPartnerPoints.Query): Promise<getPartnerPoints.Output>;
export declare namespace getPartnerPoints {
    type Query = Resolved<Omit<IReportLoyalty.IReportFilter, "shop_id">>;
    type Output = Primitive<IResponse<IResponsePagination<IReportLoyalty.IPartnerPointReport>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty-report/partner-points";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPartnerPoints.Query) => string;
}
