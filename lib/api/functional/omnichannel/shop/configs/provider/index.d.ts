import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function getProviderShops(connection: IConnection, provider: string): Promise<getProviderShops.Output>;
export declare namespace getProviderShops {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/omnichannel/shop/configs/provider/:provider";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (provider: string) => string;
}
