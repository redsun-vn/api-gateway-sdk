import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IWebsite } from "../../../../../libs/shared/src/types/cms-service/iwebsite";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function provision(connection: IConnection, shopId: string, input: provision.Input): Promise<provision.Output>;
export declare namespace provision {
    type Input = Resolved<IWebsite.IAdminProvisionReq>;
    type Output = Primitive<IResponse<IWebsite.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/shops/:shopId/website";
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
    const path: (shopId: string) => string;
}
