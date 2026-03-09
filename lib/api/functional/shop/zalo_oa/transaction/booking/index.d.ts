import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IZaloOA } from "../../../../../../libs/shared/src/types/notification/izalo-oa.type";
export declare function sendTransactionBooking(connection: IConnection, input: sendTransactionBooking.Input): Promise<sendTransactionBooking.Output>;
export declare namespace sendTransactionBooking {
    type Input = Resolved<IZaloOA.IOATransactionMessage>;
    type Output = Primitive<IResponse<IZaloOA.ISendMessageResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/zalo-oa/transaction/booking";
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
    const path: () => string;
}
