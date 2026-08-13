import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getOversell(connection: IConnection, query: getOversell.Query): Promise<getOversell.Output>;
export declare namespace getOversell {
    type Query = Resolved<IReport.IOversellQuery>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/reports/oversell";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getOversell.Query) => string;
}
