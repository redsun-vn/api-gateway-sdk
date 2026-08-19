import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IEmailHistory } from "../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function listHistory(connection: IConnection, query: listHistory.Query): Promise<listHistory.Output>;
export declare namespace listHistory {
    type Query = Resolved<IEmailHistory.IListQuery>;
    type Output = Primitive<IResponse<IEmailHistory.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/email/history";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listHistory.Query) => string;
}
