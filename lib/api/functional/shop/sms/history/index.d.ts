import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISmsConfig } from "../../../../../libs/shared/src/types/notification/isms-config.type";
export declare function listHistory(connection: IConnection, query: listHistory.Query): Promise<listHistory.Output>;
export declare namespace listHistory {
    type Query = Resolved<ISmsConfig.IHistoryQuery>;
    type Output = Primitive<IResponse<ISmsConfig.IHistoryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/sms/history";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listHistory.Query) => string;
}
