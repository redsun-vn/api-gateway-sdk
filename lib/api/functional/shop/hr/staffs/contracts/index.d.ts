import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStaffContract } from "../../../../../../libs/shared/src/types/hr/istaff-contract";
export declare function findByStaff(connection: IConnection, staffId: string): Promise<findByStaff.Output>;
export declare namespace findByStaff {
    type Output = Primitive<IResponse<Array<IStaffContract.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/staffs/:staffId/contracts";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (staffId: string) => string;
}
