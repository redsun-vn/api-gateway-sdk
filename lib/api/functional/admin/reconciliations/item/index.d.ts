import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IAdminReconciliationItem } from "../../../../../libs/shared/src/types/reconciliation-service/iadmin-reconciliation-item";
export declare function createItem(connection: IConnection, id: string, data: createItem.Input): Promise<createItem.Output>;
export declare namespace createItem {
    type Input = Primitive<IAdminReconciliationItem.ICreateFromFulfillment>;
    type Output = Primitive<IResponse<IAdminReconciliationItem.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/reconciliations/:id/item";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function removeItem(connection: IConnection, id: string, itemId: string): Promise<removeItem.Output>;
export declare namespace removeItem {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/reconciliations/:id/item/:item_id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string, itemId: string) => string;
}
