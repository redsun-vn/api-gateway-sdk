import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdminUser } from "../../../../../libs/shared/src/types/admin-service/iuser";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function getAllChildrens(connection: IConnection, id: string): Promise<getAllChildrens.Output>;
export declare namespace getAllChildrens {
    type Output = Primitive<IResponse<Array<IAdminUser.IResponseWithoutSecret>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/users/:id/childrens";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
