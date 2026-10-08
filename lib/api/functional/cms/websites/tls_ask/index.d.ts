import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IWebsite } from "../../../../../libs/shared/src/types/cms-service/iwebsite";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function tlsAsk(connection: IConnection, query: tlsAsk.Query): Promise<tlsAsk.Output>;
export declare namespace tlsAsk {
    type Query = Resolved<IWebsite.IQueryTlsAsk>;
    type Output = Primitive<IResponse<IWebsite.ITlsAskResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/cms/websites/tls-ask";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: tlsAsk.Query) => string;
}
