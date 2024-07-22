import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IGhnDto } from "../../../../libs/shared/src/types/fulfillment-service/ighn";
export declare function getProvinces(connection: IConnection, shippingCode: string): Promise<getProvinces.Output>;
export declare namespace getProvinces {
    type Output = Primitive<IResponse<Array<IGhnDto.IProvince>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shipping-providers/:shippingCode/provinces";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (shippingCode: string) => string;
}
