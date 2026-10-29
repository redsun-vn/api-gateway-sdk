import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsToday } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-today";
export declare function dismissSuggestion(connection: IConnection, id: number, body: dismissSuggestion.Input): Promise<dismissSuggestion.Output>;
export declare namespace dismissSuggestion {
    type Input = Resolved<IMktOsToday.ISuggestionDismissRequest>;
    type Output = Primitive<IResponse<IMktOsToday.ISuggestionDismissed>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/suggestions/:id/dismiss";
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
    const path: (id: number) => string;
}
