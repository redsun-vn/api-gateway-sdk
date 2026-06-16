import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmOpportunity } from "../../../../../../libs/shared/src/types/crm-service/iopportunity";
export declare function bulkReassign(connection: IConnection, body: bulkReassign.Input): Promise<bulkReassign.Output>;
export declare namespace bulkReassign {
    type Input = Resolved<ICrmOpportunity.IBulkAssign>;
    type Output = Primitive<IResponse<ICrmOpportunity.IBulkAssignResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/opportunities/bulk-reassign";
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
