import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../libs/shared/src/types/istaff";
export declare function createRegister(connection: IConnection, data: createRegister.Input): Promise<createRegister.Output>;
export declare namespace createRegister {
    type Input = Primitive<IStaff.ICreateRegister>;
    type Output = Primitive<IResponse<IStaff.IRegisterResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/auth/register";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
