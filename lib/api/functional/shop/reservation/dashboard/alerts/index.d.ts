import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IDashboard } from "../../../../../../libs/shared/src/types/reservation-service/idashboard";
export declare function getAlerts(connection: IConnection, query: getAlerts.Query): Promise<getAlerts.Output>;
export declare namespace getAlerts {
    type Query = Resolved<IDashboard.IDashboardQuery>;
    type Output = Primitive<IResponse<Array<IDashboard.IDashboardAlert>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/dashboard/alerts";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getAlerts.Query) => string;
}
