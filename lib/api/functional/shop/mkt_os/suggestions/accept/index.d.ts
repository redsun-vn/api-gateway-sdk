import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsToday } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-today";
export declare function acceptSuggestion(connection: IConnection, id: number): Promise<acceptSuggestion.Output>;
export declare namespace acceptSuggestion {
    type Output = Primitive<IResponse<IMktOsToday.ISuggestionAccepted>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/suggestions/:id/accept";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
