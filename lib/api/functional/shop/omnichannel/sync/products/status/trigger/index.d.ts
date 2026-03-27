import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
export declare function triggerProductStatusSync(connection: IConnection, opts: triggerProductStatusSync.Input): Promise<triggerProductStatusSync.Output>;
export declare namespace triggerProductStatusSync {
    type Input = Primitive<any>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel/sync/products/status/trigger";
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
