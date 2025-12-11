import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export * as provider from "./provider";
export declare function updateProviderShop(connection: IConnection, id: number, data: updateProviderShop.Input): Promise<updateProviderShop.Output>;
export declare namespace updateProviderShop {
    type Input = Resolved<IOmnichannel.IUpdate>;
    type Output = Primitive<IResponse<IOmnichannel.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/omnichannel/shop/configs/:id";
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
    const path: (id: number) => string;
}
export declare function deleteProviderShopById(connection: IConnection, id: number): Promise<deleteProviderShopById.Output>;
export declare namespace deleteProviderShopById {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/omnichannel/shop/configs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
