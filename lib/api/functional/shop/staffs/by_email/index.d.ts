import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function findByEmail(connection: IConnection, query: findByEmail.Query): Promise<findByEmail.Output>;
export declare namespace findByEmail {
    type Query = Resolved<IStaff.IFindByEmailQuery>;
    type Output = Primitive<IResponse<null | IStaff.IStaffByPhoneResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/staffs/by-email";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findByEmail.Query) => string;
}
