import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../libs/shared/src/types/istaff";
export declare function staffRegister(connection: IConnection, data: staffRegister.Input): Promise<staffRegister.Output>;
export declare namespace staffRegister {
    type Input = Resolved<Omit<IStaff.ICreateRegister, "password">>;
    type Output = Primitive<IResponse<IStaff.IRegisterResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/staffs-register";
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
