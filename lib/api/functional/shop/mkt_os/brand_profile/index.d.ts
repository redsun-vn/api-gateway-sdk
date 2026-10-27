import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../libs/shared/src/types/crm-service/imkt-os";
export * as versions from "./versions";
export * as examples from "./examples";
export * as draft from "./draft";
export declare function get(connection: IConnection, query: get.Query): Promise<get.Output>;
export declare namespace get {
    type Query = Resolved<IMktOs.IBrandProfileQuery>;
    type Output = Primitive<IResponse<IMktOs.IBrandProfileResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/brand-profile";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: get.Query) => string;
}
