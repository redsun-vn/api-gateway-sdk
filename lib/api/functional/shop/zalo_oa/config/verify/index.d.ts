import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IZaloOA } from "../../../../../../libs/shared/src/types/notification/izalo-oa.type";
export declare function verifyConfig(connection: IConnection): Promise<verifyConfig.Output>;
export declare namespace verifyConfig {
    type Output = Primitive<IResponse<IZaloOA.IVerifyShopZaloOAResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/zalo-oa/config/verify";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
