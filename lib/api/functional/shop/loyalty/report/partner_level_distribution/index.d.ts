import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { IReportLoyalty } from "../../../../../../libs/shared/src/types/loyalty-service/ireport";
export declare function getPartnerLevelDistribution(connection: IConnection, query: getPartnerLevelDistribution.Query): Promise<getPartnerLevelDistribution.Output>;
export declare namespace getPartnerLevelDistribution {
    type Query = Resolved<Omit<IReportLoyalty.IReportFilter, "shop_id">>;
    type Output = Primitive<IResponse<IResponsePagination<IReportLoyalty.ILevelDistributionReport>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty/report/partner-level-distribution";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPartnerLevelDistribution.Query) => string;
}
