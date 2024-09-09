import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { INotification } from "../../../../libs/shared/src/types/inotification";
export declare function createSubscriber(connection: IConnection, input: createSubscriber.Input): Promise<createSubscriber.Output>;
export declare namespace createSubscriber {
    type Input = Resolved<INotification.ICreateSubscriber>;
    type Output = Primitive<IResponse<INotification.ICreateSubscriberResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/notification/subscribers";
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
