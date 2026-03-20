import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { ISubscription } from "../../../libs/shared/src/types/isubscription";
export declare function checkStats(connection: IConnection, id: string): Promise<checkStats.Output>;
export declare namespace checkStats {
    type Output = Primitive<IResponse<ISubscription.IStatsPublic>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop-subscription-public/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
