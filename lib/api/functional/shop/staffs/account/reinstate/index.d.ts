import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../../libs/shared/src/types/istaff";
export declare function reinstateAccount(connection: IConnection, id: string): Promise<reinstateAccount.Output>;
export declare namespace reinstateAccount {
    type Output = Primitive<IResponse<IStaff.IHrProfileResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/staffs/:id/account/reinstate";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
