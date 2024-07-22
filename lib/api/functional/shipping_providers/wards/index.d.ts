import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IGhnDto } from "../../../../libs/shared/src/types/fulfillment-service/ighn";
import type { IVnPostDTO } from "../../../../libs/shared/src/types/fulfillment-service/ivnpost.type";
export declare function getWards(connection: IConnection, shippingCode: string, districtId: string): Promise<getWards.Output>;
export declare namespace getWards {
    type Output = Primitive<IResponse<Array<IGhnDto.IWard> | Array<IVnPostDTO.IWard>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shipping-providers/:shippingCode/wards";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (shippingCode: string, districtId: string) => string;
}
