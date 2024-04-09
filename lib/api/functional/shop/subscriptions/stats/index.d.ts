import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISubscription } from "../../../../../libs/shared/src/types/isubscription";
export declare function checkStats(connection: IConnection): Promise<checkStats.Output>;
export declare namespace checkStats {
    type Output = Primitive<IResponse<ISubscription.IStats>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/subscriptions/stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
