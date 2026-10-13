import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISaleOrder } from "../../../../../libs/shared/src/types/order-service/isale-order";
export declare function sendEmail(connection: IConnection, id: string, body: sendEmail.Input): Promise<sendEmail.Output>;
export declare namespace sendEmail {
    type Input = Resolved<ISaleOrder.ISendEmailBody>;
    type Output = Primitive<IResponse<ISaleOrder.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/sale-orders/:id/send-email";
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
    const path: (id: string) => string;
}
