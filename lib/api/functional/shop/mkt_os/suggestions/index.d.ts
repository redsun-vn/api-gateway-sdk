import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsToday } from "../../../../../libs/shared/src/types/crm-service/imkt-os-today";
export * as accept from "./accept";
export * as dismiss from "./dismiss";
export declare function listSuggestions(connection: IConnection, query: listSuggestions.Query): Promise<listSuggestions.Output>;
export declare namespace listSuggestions {
    type Query = Resolved<IMktOsToday.ISuggestionListQuery>;
    type Output = Primitive<IResponse<IMktOsToday.ISuggestionList>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/suggestions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listSuggestions.Query) => string;
}
export declare function refreshSuggestions(connection: IConnection): Promise<refreshSuggestions.Output>;
export declare namespace refreshSuggestions {
    type Output = Primitive<IResponse<IMktOsToday.ISuggestionRefreshed>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/suggestions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
