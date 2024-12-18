import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IPaymentTermLine } from "../../../../../../libs/shared/src/types/financial-service/debt/ipayment-term-line";
export * as multiple from "./multiple";
export declare function createLine(connection: IConnection, id: string, data: createLine.Input): Promise<createLine.Output>;
export declare namespace createLine {
    type Input = Resolved<IPaymentTermLine.ICreateBase>;
    type Output = Primitive<IResponse<IPaymentTermLine.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/accounting/payment-terms/:id/lines";
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
export declare function updateLine(connection: IConnection, id: string, lineId: string, data: updateLine.Input): Promise<updateLine.Output>;
export declare namespace updateLine {
    type Input = Resolved<Partial<IPaymentTermLine.ICreateBase>>;
    type Output = Primitive<IResponse<IPaymentTermLine.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/accounting/payment-terms/:id/lines/:lineId";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, lineId: string) => string;
}
export declare function deleteLine(connection: IConnection, id: string, lineId: string): Promise<deleteLine.Output>;
export declare namespace deleteLine {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/accounting/payment-terms/:id/lines/:lineId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, lineId: string) => string;
}
