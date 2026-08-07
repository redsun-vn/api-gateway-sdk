import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ISmsConfig } from "../../../../../../libs/shared/src/types/notification/isms-config.type";
export declare function activateConfig(connection: IConnection, id: number): Promise<activateConfig.Output>;
export declare namespace activateConfig {
    type Output = Primitive<IResponse<ISmsConfig.IConfigResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/sms/config/:id/activate";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
