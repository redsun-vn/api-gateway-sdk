import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function updatePermissions(connection: IConnection, data: updatePermissions.Input, id: string): Promise<updatePermissions.Output>;
export declare namespace updatePermissions {
    type Input = Resolved<IStaff.IUpdatePermissions>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/staffs/:id/permissions";
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
