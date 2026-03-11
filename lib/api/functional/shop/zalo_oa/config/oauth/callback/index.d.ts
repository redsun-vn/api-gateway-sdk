import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IZaloOA } from "../../../../../../../libs/shared/src/types/notification/izalo-oa.type";
export declare function handleOAuthCallback(connection: IConnection, input: handleOAuthCallback.Input): Promise<handleOAuthCallback.Output>;
export declare namespace handleOAuthCallback {
    type Input = Resolved<Omit<IZaloOA.IOAuthCallbackInput, "shop_id">>;
    type Output = Primitive<IResponse<IZaloOA.IOAuthCallbackResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/zalo-oa/config/oauth/callback";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
