import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMisaInvoice } from "../../../../../libs/shared/src/types/order-service/imisa-invoice.type";
export declare function upsertConfig(connection: IConnection, shopId: string, data: upsertConfig.Input): Promise<upsertConfig.Output>;
export declare namespace upsertConfig {
    type Input = Resolved<IMisaInvoice.IMisaShopConfigInput>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/misa-invoice/:shopId/upsert";
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
    const path: (shopId: string) => string;
}
