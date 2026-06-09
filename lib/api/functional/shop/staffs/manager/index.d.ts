import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function updateManager(connection: IConnection, data: updateManager.Input, id: string): Promise<updateManager.Output>;
export declare namespace updateManager {
    type Input = Resolved<IStaff.IUpdateManager>;
    type Output = Primitive<IResponse<IStaff.IStaffResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/staffs/:id/manager";
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
    const path: (id: string) => string;
}
