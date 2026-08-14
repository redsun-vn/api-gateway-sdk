import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function importStaffs(connection: IConnection, body: importStaffs.Input): Promise<importStaffs.Output>;
export declare namespace importStaffs {
    type Input = Resolved<IStaff.IImportRequest>;
    type Output = Primitive<IResponse<IStaff.IImportResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/staffs/import";
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
