import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../libs/shared/src/types/istaff";
export declare function staffRegisterV2(connection: IConnection, data: staffRegisterV2.Input): Promise<staffRegisterV2.Output>;
export declare namespace staffRegisterV2 {
    type Input = Resolved<Omit<IStaff.ICreateRegister, "password">>;
    type Output = Primitive<IResponse<IStaff.IRegisterResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/staffs-register-v2";
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
