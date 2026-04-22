import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISubscription } from "../../../../../libs/shared/src/types/isubscription";
export declare function createTrial(connection: IConnection, data: createTrial.Input): Promise<createTrial.Output>;
export declare namespace createTrial {
    type Input = Resolved<ISubscription.ICreateTrial>;
    type Output = Primitive<IResponse<ISubscription.ITrialResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/subscriptions/trial";
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
