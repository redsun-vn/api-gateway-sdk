import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ISyncActivityLog } from "../../../../libs/shared/src/types/isync-acitivity-log";
export declare function createTable(connection: IConnection, data: createTable.Input): Promise<createTable.Output>;
export declare namespace createTable {
    type Input = Resolved<ISyncActivityLog.ICreateTable>;
    type Output = Primitive<IResponse<ISyncActivityLog.IEventCreateTable>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/sync-activity-logs/create-table";
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
