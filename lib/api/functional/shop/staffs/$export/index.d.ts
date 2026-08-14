import type { IConnection, Resolved } from "@nestia/fetcher";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function exportStaffs(connection: IConnection, query: exportStaffs.Query, labels: exportStaffs.Input): Promise<void>;
export declare namespace exportStaffs {
    type Query = Resolved<IStaff.IExportQuery>;
    type Input = Resolved<IStaff.IExportLabels>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/staffs/export";
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
    const path: (query: exportStaffs.Query) => string;
}
