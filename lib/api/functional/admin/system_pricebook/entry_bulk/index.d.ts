import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISystemPricebook } from "../../../../../libs/shared/src/types/shop-service/system-pricebook.type";
export declare function bulkCreateEntry(connection: IConnection, id: number, data: bulkCreateEntry.Input): Promise<bulkCreateEntry.Output>;
export declare namespace bulkCreateEntry {
    type Input = Resolved<Omit<ISystemPricebook.IBulkEntryCreate, "pricebookId">>;
    type Output = Primitive<IResponse<ISystemPricebook.IBulkOperationResult>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/system-pricebook/:id/entry-bulk";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
