import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IDailySnapshot } from "../../../../../../libs/shared/src/types/inventory-service/idaily-snapshot.type";
export * as compare from "./compare";
export * as build from "./build";
export declare function getDailySnapshot(connection: IConnection, query: getDailySnapshot.Query): Promise<getDailySnapshot.Output>;
export declare namespace getDailySnapshot {
    type Query = Resolved<IDailySnapshot.IDailySnapshotQuery>;
    type Output = Primitive<IResponse<IDailySnapshot.IDailySnapshotResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/daily-snapshot";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getDailySnapshot.Query) => string;
}
