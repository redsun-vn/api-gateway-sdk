import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICRMQuote } from "../../../../../../libs/shared/src/types/admin-service/crm/quote";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function createFromDeal(connection: IConnection, dealId: string): Promise<createFromDeal.Output>;
export declare namespace createFromDeal {
    type Output = Primitive<IResponse<ICRMQuote.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/crm/quotes/create-from-deal/:dealId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (dealId: string) => string;
}
