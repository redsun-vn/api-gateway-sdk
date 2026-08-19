import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEmailConfig } from "../../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function activateConfig(connection: IConnection, id: number, dto: activateConfig.Input): Promise<activateConfig.Output>;
export declare namespace activateConfig {
    type Input = Resolved<IEmailConfig.IActivateRequest>;
    type Output = Primitive<IResponse<IEmailConfig.IConfigResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/email/config/:id/activate";
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
