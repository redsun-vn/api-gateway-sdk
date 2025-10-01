import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IMisaInvoice } from "../../../../libs/shared/src/types/order-service/imisa-invoice.type";
export * as upsert from "./upsert";
export * as cancel from "./cancel";
export * as publish from "./publish";
export * as print from "./print";
export * as test_connection from "./test_connection";
export declare function findOne(connection: IConnection, shopId: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IMisaInvoice.IMisaShopConfig>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/e-invoice/:shopId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string) => string;
}
export declare function deactive(connection: IConnection, shopId: string): Promise<deactive.Output>;
export declare namespace deactive {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/e-invoice/:shopId/deactive";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string) => string;
}
