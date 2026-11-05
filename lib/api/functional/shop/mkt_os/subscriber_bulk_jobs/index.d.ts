import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsSubscriber } from "../../../../../libs/shared/src/types/crm-service/imkt-os-subscriber";
export * as list_members from "./list_members";
export * as unsubscribes from "./unsubscribes";
export * as deletes from "./deletes";
export declare function list(connection: IConnection): Promise<list.Output>;
export declare namespace list {
    type Output = Primitive<IResponse<IMktOsSubscriber.IBulkJobsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/subscriber-bulk-jobs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function get(connection: IConnection, id: number): Promise<get.Output>;
export declare namespace get {
    type Output = Primitive<IResponse<IMktOsSubscriber.IBulkJob>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/subscriber-bulk-jobs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
