import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IGhnDto } from "../../../../libs/shared/src/types/fulfillment-service/ighn";
export declare function getDistricts(connection: IConnection, shippingCode: string, provinceId: string): Promise<getDistricts.Output>;
export declare namespace getDistricts {
    type Output = Primitive<IResponse<Array<IGhnDto.IDistrict>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shipping-providers/:shippingCode/districts";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (shippingCode: string, provinceId: string) => string;
}
