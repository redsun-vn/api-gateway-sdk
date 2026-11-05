import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsSubscriber } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-subscriber";
export declare function markBounced(connection: IConnection, id: number): Promise<markBounced.Output>;
export declare namespace markBounced {
    type Output = Primitive<IResponse<IMktOsSubscriber.IBounced>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscribers/:id/bounced";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
