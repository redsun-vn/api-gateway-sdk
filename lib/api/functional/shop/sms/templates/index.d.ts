import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISmsConfig } from "../../../../../libs/shared/src/types/notification/isms-config.type";
export declare function listTemplates(connection: IConnection): Promise<listTemplates.Output>;
export declare namespace listTemplates {
    type Output = Primitive<IResponse<Array<ISmsConfig.ITemplate>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/sms/templates";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
