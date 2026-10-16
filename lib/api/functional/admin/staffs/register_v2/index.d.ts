import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function registerOwnerV2(connection: IConnection, input: registerOwnerV2.Input): Promise<registerOwnerV2.Output>;
export declare namespace registerOwnerV2 {
    type Input = Resolved<IStaff.IAdminRegisterV2>;
    type Output = Primitive<IResponse<IStaff.IRegisterResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/staffs/register-v2";
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
