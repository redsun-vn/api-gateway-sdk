import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmOpportunity } from "../../../../../../libs/shared/src/types/crm-service/iopportunity";
export declare function getQuotePrefill(connection: IConnection, id: number): Promise<getQuotePrefill.Output>;
export declare namespace getQuotePrefill {
    type Output = Primitive<IResponse<ICrmOpportunity.IQuotePrefill>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/opportunities/:id/quote-prefill";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
