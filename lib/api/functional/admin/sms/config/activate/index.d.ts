import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ISmsConfig } from "../../../../../../libs/shared/src/types/notification/isms-config.type";
export declare function activateConfig(connection: IConnection, id: number, dto: activateConfig.Input): Promise<activateConfig.Output>;
export declare namespace activateConfig {
    type Input = Resolved<ISmsConfig.IAdminLisConfigQuery>;
    type Output = Primitive<IResponse<ISmsConfig.IConfigResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/sms/config/:id/activate";
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
    const path: (id: number) => string;
}
