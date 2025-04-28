import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../libs/shared/src/types/iauth";
import type { IStaff } from "../../../../libs/shared/src/types/istaff";
export declare function completeRegistration(connection: IConnection, input: completeRegistration.Input): Promise<completeRegistration.Output>;
export declare namespace completeRegistration {
    type Input = Resolved<IAuth.IRegisterTemporaryRequest>;
    type Output = Primitive<IResponse<IStaff.IRegisterResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/auth/complete-registration";
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
