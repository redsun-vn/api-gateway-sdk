import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../libs/shared/src/types/iauth";
export declare function phoneStatus(connection: IConnection, input: phoneStatus.Input): Promise<phoneStatus.Output>;
export declare namespace phoneStatus {
    type Input = Resolved<IAuth.IOTPSMS>;
    type Output = Primitive<IResponse<IAuth.IPhoneStatusResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/auth/phone-status";
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
