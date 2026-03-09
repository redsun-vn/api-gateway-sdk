import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IDashboard } from "../../../../../../libs/shared/src/types/reservation-service/idashboard";
export declare function getOverview(connection: IConnection, query: getOverview.Query): Promise<getOverview.Output>;
export declare namespace getOverview {
    type Query = Resolved<IDashboard.IDashboardQuery>;
    type Output = Primitive<IResponse<IDashboard.IDashboardOverview>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/dashboard/overview";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getOverview.Query) => string;
}
