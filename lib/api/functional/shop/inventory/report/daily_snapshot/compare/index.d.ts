import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IDailySnapshot } from "../../../../../../../libs/shared/src/types/inventory-service/idaily-snapshot.type";
export declare function compareDailySnapshot(connection: IConnection, query: compareDailySnapshot.Query): Promise<compareDailySnapshot.Output>;
export declare namespace compareDailySnapshot {
    type Query = Resolved<IDailySnapshot.ICompareQuery>;
    type Output = Primitive<IResponse<IDailySnapshot.ICompareResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/daily-snapshot/compare";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: compareDailySnapshot.Query) => string;
}
