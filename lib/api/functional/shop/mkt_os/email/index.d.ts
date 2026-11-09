import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsEmail } from "../../../../../libs/shared/src/types/crm-service/imkt-os-email";
export declare function products(connection: IConnection, query: products.Query): Promise<products.Output>;
export declare namespace products {
    type Query = Resolved<IMktOsEmail.IProductsQuery>;
    type Output = Primitive<IResponse<IMktOsEmail.IProductsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/email/products";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: products.Query) => string;
}
export declare function coupons(connection: IConnection): Promise<coupons.Output>;
export declare namespace coupons {
    type Output = Primitive<IResponse<IMktOsEmail.ICouponsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/email/coupons";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
