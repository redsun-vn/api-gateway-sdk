import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export * as trigger from "./trigger";
export declare function syncProductStatus(connection: IConnection, opts: syncProductStatus.Input): Promise<syncProductStatus.Output>;
export declare namespace syncProductStatus {
    type Input = Primitive<any>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel/sync/products/status";
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
