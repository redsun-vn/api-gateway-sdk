import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function getProvinces(connection: IConnection, shippingCode: string): Promise<getProvinces.Output>;
export declare namespace getProvinces {
    type Output = Primitive<IResponse<Array<any>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shipping-providers/:shippingCode/provinces";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shippingCode: string) => string;
}
