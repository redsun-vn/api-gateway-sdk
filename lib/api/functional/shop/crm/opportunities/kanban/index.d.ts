import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmOpportunity } from "../../../../../../libs/shared/src/types/crm-service/iopportunity";
export * as scoped from "./scoped";
export declare function kanban(connection: IConnection, query: kanban.Query): Promise<kanban.Output>;
export declare namespace kanban {
    type Query = Resolved<ICrmOpportunity.IQueryPipeline>;
    type Output = Primitive<IResponse<ICrmOpportunity.IKanbanResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/opportunities/kanban";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: kanban.Query) => string;
}
