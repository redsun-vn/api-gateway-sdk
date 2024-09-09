import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IShopShippingConfig } from "../../../../libs/shared/src/types/fulfillment-service/ishop-shipping-config.type";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IShopShippingConfig.ICreate>;
    type Output = Primitive<IResponse<IShopShippingConfig.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/shipping-config";
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
export declare function detail(connection: IConnection, id: string): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<IShopShippingConfig.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/shipping-config/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function findAllByProvider(connection: IConnection, providerCode: string): Promise<findAllByProvider.Output>;
export declare namespace findAllByProvider {
    type Output = Primitive<IResponse<Array<IShopShippingConfig.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/shipping-config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (providerCode: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/shipping-config/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
