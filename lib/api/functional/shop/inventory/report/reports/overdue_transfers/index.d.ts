import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getOverdueTransfers(connection: IConnection, query: getOverdueTransfers.Query): Promise<getOverdueTransfers.Output>;
export declare namespace getOverdueTransfers {
    type Query = Resolved<IReport.IOverdueTransferQuery>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/reports/overdue-transfers";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getOverdueTransfers.Query) => string;
}
