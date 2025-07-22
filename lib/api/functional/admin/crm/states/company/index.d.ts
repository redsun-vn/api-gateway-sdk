import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICrmState } from "../../../../../../libs/shared/src/types/admin-service/crm/crm-state";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function findByCompany(connection: IConnection, companyId: string): Promise<findByCompany.Output>;
export declare namespace findByCompany {
    type Output = Primitive<IResponse<Array<ICrmState.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/states/company/:companyId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (companyId: string) => string;
}
