import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ITableHistory } from "../../../../../../libs/shared/src/types/reservation-service/itable-history";
export * as enhanced from "./enhanced";
export * as comparison from "./comparison";
export declare function getStats(connection: IConnection, tableId: string): Promise<getStats.Output>;
export declare namespace getStats {
    type Output = Primitive<IResponse<ITableHistory.ITableStats>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/tables/:tableId/stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (tableId: string) => string;
}
