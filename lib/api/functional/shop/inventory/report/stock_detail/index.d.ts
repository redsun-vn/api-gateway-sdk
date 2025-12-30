import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getStockDetail(connection: IConnection, query: getStockDetail.Query): Promise<getStockDetail.Output>;
export declare namespace getStockDetail {
    type Query = Resolved<Omit<IReport.IStockDetailRequest, "shop_id">>;
    type Output = Primitive<IResponse<IReport.IStockDetailResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/stock-detail";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getStockDetail.Query) => string;
}
