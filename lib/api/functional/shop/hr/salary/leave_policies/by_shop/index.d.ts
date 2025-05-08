import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ILeavePolicy } from "../../../../../../../libs/shared/src/types/hr/salary/leave-policy";
export declare function findOneByShop(connection: IConnection): Promise<findOneByShop.Output>;
export declare namespace findOneByShop {
    type Output = Primitive<IResponse<ILeavePolicy.ILeavePolicyResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/leave-policies/by-shop";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
