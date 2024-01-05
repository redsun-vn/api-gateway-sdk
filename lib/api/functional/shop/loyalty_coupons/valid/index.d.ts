import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ILoyaltyCoupon } from "../../../../../libs/shared/src/types/loyalty-service/iloyalty-coupon";
export declare function validCode(connection: IConnection, code: string): Promise<validCode.Output>;
export declare namespace validCode {
    type Output = Primitive<IResponse<ILoyaltyCoupon.ILoyaltyCouponResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty-coupons/:code/valid";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (code: string) => string;
}
