import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../libs/shared/src/types/istaff";
export * as profiles from "./profiles";
export * as password from "./password";
export * as user_devices from "./user_devices";
export declare function invite(connection: IConnection, input: invite.Input): Promise<invite.Output>;
export declare namespace invite {
    type Input = Resolved<IStaff.IInvite>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/staff/invite";
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
