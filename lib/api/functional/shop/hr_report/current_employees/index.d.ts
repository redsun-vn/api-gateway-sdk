import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IHRReport } from "../../../../../libs/shared/src/types/shop-service/hr-report";
export declare function getCurrentEmployees(connection: IConnection, query: getCurrentEmployees.Query): Promise<getCurrentEmployees.Output>;
export declare namespace getCurrentEmployees {
    type Query = Resolved<Omit<IHRReport.ICurrentEmployeeFilter, "shop_id">>;
    type Output = Primitive<IResponse<IHRReport.ICurrentEmployeeResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr-report/current-employees";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getCurrentEmployees.Query) => string;
}
