import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICskhEmailConfig } from "../../../../../libs/shared/src/types/admin-service/icskh-email-config";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function getConfig(connection: IConnection): Promise<getConfig.Output>;
export declare namespace getConfig {
    type Output = Primitive<IResponse<ICskhEmailConfig.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/cskh-email/config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
