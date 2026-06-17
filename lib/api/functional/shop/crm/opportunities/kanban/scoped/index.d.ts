import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmOpportunity } from "../../../../../../../libs/shared/src/types/crm-service/iopportunity";
export declare function kanbanScoped(connection: IConnection, query: kanbanScoped.Query): Promise<kanbanScoped.Output>;
export declare namespace kanbanScoped {
    type Query = Resolved<ICrmOpportunity.IQueryPipeline>;
    type Output = Primitive<IResponse<ICrmOpportunity.IKanbanResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/opportunities/kanban/scoped";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: kanbanScoped.Query) => string;
}
