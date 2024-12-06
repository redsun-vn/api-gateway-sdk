import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdminCustomer } from "../../../libs/shared/src/types/admin-service/icustomer";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IAdminCustomer.ICreate>;
    type Output = Primitive<IResponse<IAdminCustomer.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin-customer";
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
