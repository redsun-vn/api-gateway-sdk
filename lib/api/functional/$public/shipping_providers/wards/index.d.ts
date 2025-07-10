import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function getWards(connection: IConnection, shippingCode: string, districtId: string): Promise<getWards.Output>;
export declare namespace getWards {
    type Output = Primitive<IResponse<Array<any>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/public/shipping-providers/:shippingCode/wards";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shippingCode: string, districtId: string) => string;
}
