import type { IConnection, Resolved } from "@nestia/fetcher";
import type { IStaffContract } from "../../../../../../libs/shared/src/types/hr/istaff-contract";
export declare function exportContracts(connection: IConnection, query: exportContracts.Query, labels: exportContracts.Input): Promise<void>;
export declare namespace exportContracts {
    type Query = Resolved<IStaffContract.IExportQuery>;
    type Input = Resolved<IStaffContract.IExportLabels>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/contracts/export";
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
    const path: (query: exportContracts.Query) => string;
}
