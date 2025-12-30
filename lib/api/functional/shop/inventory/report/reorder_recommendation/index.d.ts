import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getReorderRecommendation(connection: IConnection, query: getReorderRecommendation.Query): Promise<getReorderRecommendation.Output>;
export declare namespace getReorderRecommendation {
    type Query = Resolved<Omit<IReport.IReorderRecommendationRequest, "shop_id">>;
    type Output = Primitive<IResponse<IReport.IReorderRecommendationResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/reorder-recommendation";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getReorderRecommendation.Query) => string;
}
