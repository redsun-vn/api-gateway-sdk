import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ISocialAutomation } from "../../../../../../../libs/shared/src/types/ads-service/isocial-automation";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function listPlugRuns(connection: IConnection, query: listPlugRuns.Query): Promise<listPlugRuns.Output>;
export declare namespace listPlugRuns {
    type Query = Resolved<ISocialAutomation.IPlugRunQuery>;
    type Output = Primitive<IResponse<ISocialAutomation.IPlugRunPage>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/plugs/runs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listPlugRuns.Query) => string;
}
