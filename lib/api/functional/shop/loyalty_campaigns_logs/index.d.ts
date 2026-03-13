import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { ICampaign } from "../../../../libs/shared/src/types/loyalty-service/icampaign.type";
export declare function findLogs(connection: IConnection, id: string, query: findLogs.Query): Promise<findLogs.Output>;
export declare namespace findLogs {
    type Query = Resolved<ICampaign.ICampaignFindLogs>;
    type Output = Primitive<IResponse<IResponsePagination<ICampaign.ICampaignExecutionResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty-campaigns-logs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, query: findLogs.Query) => string;
}
