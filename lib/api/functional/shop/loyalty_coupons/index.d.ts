import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ILoyaltyCoupon } from "../../../../libs/shared/src/types/loyalty-service/iloyalty-coupon";
export * as valid from "./valid";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<ILoyaltyCoupon.ILoyaltyCouponCreate>;
    type Output = Primitive<IResponse<ILoyaltyCoupon.ILoyaltyCouponResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/loyalty-coupons";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function detail(connection: IConnection, id: string): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<ILoyaltyCoupon.ILoyaltyCouponResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty-coupons/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<ILoyaltyCoupon.ILoyaltyCouponUpdate>;
    type Output = Primitive<IResponse<ILoyaltyCoupon.ILoyaltyCouponResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/loyalty-coupons/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/loyalty-coupons/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
