import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ILeavePolicy } from "../../../../../../libs/shared/src/types/hr/salary/leave-policy";
export * as by_shop from "./by_shop";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ILeavePolicy.ICreateLeavePolicyRequest>;
    type Output = Primitive<IResponse<ILeavePolicy.ILeavePolicyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/salary/leave-policies";
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
