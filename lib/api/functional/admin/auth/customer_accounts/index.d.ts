import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdminAuth } from "../../../../../libs/shared/src/types/admin-service/iauth";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function createCustomerAccount(connection: IConnection, input: createCustomerAccount.Input): Promise<createCustomerAccount.Output>;
export declare namespace createCustomerAccount {
    type Input = Resolved<IAdminAuth.ICreateCustomerAccount>;
    type Output = Primitive<IResponse<IAdminAuth.ICreateCustomerAccountResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/auth/customer-accounts";
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
