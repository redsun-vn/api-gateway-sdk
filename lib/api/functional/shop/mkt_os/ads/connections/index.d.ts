import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdsConnection } from "../../../../../../libs/shared/src/types/ads-service/iads-connection";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export * as meta from "./meta";
export * as oauth from "./oauth";
export * as accounts from "./accounts";
export declare function list(connection: IConnection): Promise<list.Output>;
export declare namespace list {
    type Output = Primitive<IResponse<Array<IAdsConnection.IView>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/ads/connections";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function platforms(connection: IConnection): Promise<platforms.Output>;
export declare namespace platforms {
    type Output = Primitive<IResponse<Array<IAdsConnection.IPlatform>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/ads/connections/platforms";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function health(connection: IConnection): Promise<health.Output>;
export declare namespace health {
    type Output = Primitive<IResponse<IAdsConnection.IHealth>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/ads/connections/health";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function disconnect(connection: IConnection, id: string): Promise<disconnect.Output>;
export declare namespace disconnect {
    type Output = Primitive<IResponse<IAdsConnection.IView>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/ads/connections/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
