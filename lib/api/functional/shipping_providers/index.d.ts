import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { IGhnDto } from "../../../libs/shared/src/types/fulfillment-service/ighn";
export * as provinces from "./provinces";
export * as districts from "./districts";
export * as wards from "./wards";
export declare function schedule(connection: IConnection, shippingCode: string): Promise<schedule.Output>;
export declare namespace schedule {
    type Output = Primitive<IResponse<Array<IGhnDto.IShiftSchedule>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shipping-providers/:shippingCode/schedule";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (shippingCode: string) => string;
}
export declare function detail(connection: IConnection, shippingCode: string, orderCode: string): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<IGhnDto.IOrderInfo>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shipping-providers/:shippingCode/detail/:orderCode";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (shippingCode: string, orderCode: string) => string;
}
