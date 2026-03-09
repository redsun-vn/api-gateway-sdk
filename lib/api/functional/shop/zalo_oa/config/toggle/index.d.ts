import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IZaloOA } from "../../../../../../libs/shared/src/types/notification/izalo-oa.type";
export declare function toggleConfig(connection: IConnection, input: toggleConfig.Input): Promise<toggleConfig.Output>;
export declare namespace toggleConfig {
    type Input = Resolved<Pick<IZaloOA.IToggleShopZaloOA, "is_active">>;
    type Output = Primitive<IResponse<IZaloOA.IShopZaloOAConfig>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/zalo-oa/config/toggle";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
