import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IFulfillment } from "../../../../../libs/shared/src/types/fulfillment-service/ifulfillment";
export declare function updateCod(connection: IConnection, id: string, data: updateCod.Input): Promise<updateCod.Output>;
export declare namespace updateCod {
    type Input = Resolved<IFulfillment.IUpdateCod>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/fulfillments/:id/cod";
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
