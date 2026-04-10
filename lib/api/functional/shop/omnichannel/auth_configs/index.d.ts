import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function getAuthConfigsByProvider(connection: IConnection, provider: string): Promise<getAuthConfigsByProvider.Output>;
export declare namespace getAuthConfigsByProvider {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/auth-configs/:provider";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (provider: string) => string;
}
export declare function deleteAuthConfig(connection: IConnection, id: number): Promise<deleteAuthConfig.Output>;
export declare namespace deleteAuthConfig {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/omnichannel/auth-configs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
