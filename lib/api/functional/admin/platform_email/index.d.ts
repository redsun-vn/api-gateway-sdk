import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IPlatformEmail } from "../../../../libs/shared/src/types/admin-service/iplatform-email";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export * as senders from "./senders";
export * as events from "./events";
export * as groups from "./groups";
export * as brands from "./brands";
export * as templates from "./templates";
export * as configs from "./configs";
export declare function stats(connection: IConnection, query: stats.Query): Promise<stats.Output>;
export declare namespace stats {
    type Query = Resolved<IPlatformEmail.IStatsQuery>;
    type Output = Primitive<IResponse<Array<IPlatformEmail.IStatsRow>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/platform-email/stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: stats.Query) => string;
}
