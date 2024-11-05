import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IPaymentTermLine } from "../../../../../../../libs/shared/src/types/financial-service/debt/ipayment-term-line";
export declare function createLineMultiple(connection: IConnection, id: string, data: createLineMultiple.Input): Promise<createLineMultiple.Output>;
export declare namespace createLineMultiple {
    type Input = Resolved<IPaymentTermLine.ICreateMultiple>;
    type Output = Primitive<IResponse<Array<IPaymentTermLine.IResponse>>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/accounting/payment-terms/:id/lines/multiple";
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
