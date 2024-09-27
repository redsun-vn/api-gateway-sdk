import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IPaymentCard } from "../../../../../libs/shared/src/types/financial-service/ipayment-card.type";
export * as $export from "./$export";
export declare function staffBestSelling(connection: IConnection, query: staffBestSelling.Query): Promise<staffBestSelling.Output>;
export declare namespace staffBestSelling {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IPaymentCard.IResponseReport>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/payment-cards";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: staffBestSelling.Query) => string;
}
