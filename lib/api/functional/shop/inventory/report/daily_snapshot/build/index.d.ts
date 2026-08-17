import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IDailySnapshot } from "../../../../../../../libs/shared/src/types/inventory-service/idaily-snapshot.type";
export declare function buildDailySnapshot(connection: IConnection, input: buildDailySnapshot.Input): Promise<buildDailySnapshot.Output>;
export declare namespace buildDailySnapshot {
    type Input = Resolved<IDailySnapshot.IBuildBody>;
    type Output = Primitive<IResponse<IDailySnapshot.IBuildResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/report/daily-snapshot/build";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
