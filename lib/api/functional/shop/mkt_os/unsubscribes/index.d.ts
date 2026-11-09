import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../libs/shared/src/types/crm-service/imkt-os";
export declare function listUnsubscribes(connection: IConnection, query: listUnsubscribes.Query): Promise<listUnsubscribes.Output>;
export declare namespace listUnsubscribes {
    type Query = Resolved<IMktOs.IUnsubscribesQuery>;
    type Output = Primitive<IResponse<IMktOs.IUnsubscribesResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/unsubscribes";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listUnsubscribes.Query) => string;
}
