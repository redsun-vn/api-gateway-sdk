import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmLead } from "../../../../../../libs/shared/src/types/crm-service/ilead";
export declare function bulkAssign(connection: IConnection, body: bulkAssign.Input): Promise<bulkAssign.Output>;
export declare namespace bulkAssign {
    type Input = Resolved<ICrmLead.IBulkAssign>;
    type Output = Primitive<IResponse<ICrmLead.IBulkAssignResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/leads/bulk-assign";
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
