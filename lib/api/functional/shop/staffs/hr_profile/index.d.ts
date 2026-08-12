import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function createHrProfile(connection: IConnection, input: createHrProfile.Input): Promise<createHrProfile.Output>;
export declare namespace createHrProfile {
    type Input = Resolved<IStaff.IHrProfileCreate>;
    type Output = Primitive<IResponse<IStaff.IHrProfileResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/staffs/hr-profile";
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
