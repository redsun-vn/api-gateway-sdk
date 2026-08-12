import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function findByPhone(connection: IConnection, query: findByPhone.Query): Promise<findByPhone.Output>;
export declare namespace findByPhone {
    type Query = Resolved<IStaff.IFindByPhoneQuery>;
    type Output = Primitive<IResponse<null | IStaff.IStaffByPhoneResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/staffs/by-phone";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findByPhone.Query) => string;
}
