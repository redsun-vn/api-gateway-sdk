import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IZaloOA } from "../../../../../../../libs/shared/src/types/notification/izalo-oa.type";
export declare function createOAuthState(connection: IConnection, input: createOAuthState.Input): Promise<createOAuthState.Output>;
export declare namespace createOAuthState {
    type Input = Resolved<IZaloOA.ICreateOAuthStateInput>;
    type Output = Primitive<IResponse<IZaloOA.ICreateOAuthStateResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/zalo-oa/config/oauth/state";
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
