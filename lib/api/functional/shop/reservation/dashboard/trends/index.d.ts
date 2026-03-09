import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IDashboard } from "../../../../../../libs/shared/src/types/reservation-service/idashboard";
export declare function getTrends(connection: IConnection, query: getTrends.Query): Promise<getTrends.Output>;
export declare namespace getTrends {
    type Query = Resolved<IDashboard.IDashboardQuery>;
    type Output = Primitive<IResponse<Array<IDashboard.IDashboardTrendPoint>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/dashboard/trends";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getTrends.Query) => string;
}
