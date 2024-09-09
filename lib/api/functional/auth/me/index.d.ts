import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../libs/shared/src/types/istaff";
export declare function getMe(connection: IConnection): Promise<getMe.Output>;
export declare namespace getMe {
    type Output = Primitive<IResponse<IStaff.IStaffResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/auth/me";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
