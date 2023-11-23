import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function findOneByUserId(connection: IConnection, userId: string): Promise<findOneByUserId.Output>;
export declare namespace findOneByUserId {
    type Output = Primitive<IResponse<string | IStaff.IStaffResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/staffs/user/:userId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (userId: string) => string;
}
