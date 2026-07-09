import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmOpportunity } from "../../../../../../libs/shared/src/types/crm-service/iopportunity";
export declare function linkSaleOrder(connection: IConnection, id: number, body: linkSaleOrder.Input): Promise<linkSaleOrder.Output>;
export declare namespace linkSaleOrder {
    type Input = Resolved<ICrmOpportunity.ILinkSaleOrder>;
    type Output = Primitive<IResponse<ICrmOpportunity.ILinkSaleOrderResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/opportunities/:id/link-sale-order";
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
