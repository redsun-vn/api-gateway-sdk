import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IWebsite } from "../../../../../../libs/shared/src/types/cms-service/iwebsite";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
export declare function findSuspensionLogs(connection: IConnection, id: string, query: findSuspensionLogs.Query): Promise<findSuspensionLogs.Output>;
export declare namespace findSuspensionLogs {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IWebsite.ISuspensionLogItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/cms/websites/:id/suspension-logs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, query: findSuspensionLogs.Query) => string;
}
