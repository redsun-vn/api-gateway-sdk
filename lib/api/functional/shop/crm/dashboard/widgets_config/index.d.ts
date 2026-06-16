import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmDashboard } from "../../../../../../libs/shared/src/types/crm-service/idashboard";
export declare function widgetsConfig(connection: IConnection): Promise<widgetsConfig.Output>;
export declare namespace widgetsConfig {
    type Output = Primitive<IResponse<ICrmDashboard.IWidgetsConfigResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/widgets-config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function updateWidgetsConfig(connection: IConnection, body: updateWidgetsConfig.Input): Promise<updateWidgetsConfig.Output>;
export declare namespace updateWidgetsConfig {
    type Input = Resolved<ICrmDashboard.IUpdateWidgetsConfig>;
    type Output = Primitive<IResponse<ICrmDashboard.IWidgetsConfigResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/crm/dashboard/widgets-config";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
