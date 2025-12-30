import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getCostAnalysis(connection: IConnection, query: getCostAnalysis.Query): Promise<getCostAnalysis.Output>;
export declare namespace getCostAnalysis {
    type Query = Resolved<Omit<IReport.ICostAnalysisRequest, "shop_id">>;
    type Output = Primitive<IResponse<IReport.ICostAnalysisResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/cost-analysis";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getCostAnalysis.Query) => string;
}
