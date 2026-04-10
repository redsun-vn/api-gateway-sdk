import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IIdentity } from "../../../../libs/shared/src/types/iidentity";
export declare function lockOrUnlock(connection: IConnection, input: lockOrUnlock.Input): Promise<lockOrUnlock.Output>;
export declare namespace lockOrUnlock {
    type Input = Resolved<IIdentity.ILockOrUnlockUser>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/staffs/lock-or-unlock";
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
