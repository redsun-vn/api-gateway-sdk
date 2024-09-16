import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdminUser } from "../../../../../libs/shared/src/types/admin-service/iuser";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function getMe(connection: IConnection): Promise<getMe.Output>;
export declare namespace getMe {
    type Output = Primitive<IResponse<IAdminUser.IResponseWithoutSecret>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/auth/me";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
