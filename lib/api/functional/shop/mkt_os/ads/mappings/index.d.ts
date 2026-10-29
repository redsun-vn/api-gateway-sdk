import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdsMapping } from "../../../../../../libs/shared/src/types/ads-service/iads-mapping";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IAdsMapping.IListQuery>;
    type Output = Primitive<IResponse<IAdsMapping.IPage>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/ads/mappings";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function targets(connection: IConnection, query: targets.Query): Promise<targets.Output>;
export declare namespace targets {
    type Query = Resolved<IAdsMapping.ITargetQuery>;
    type Output = Primitive<IResponse<Array<IAdsMapping.ITarget>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/ads/mappings/targets";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: targets.Query) => string;
}
export declare function set(connection: IConnection, body: set.Input): Promise<set.Output>;
export declare namespace set {
    type Input = Resolved<IAdsMapping.ISet>;
    type Output = Primitive<IResponse<IAdsMapping.IView>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/ads/mappings";
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
export declare function clear(connection: IConnection, id: string): Promise<clear.Output>;
export declare namespace clear {
    type Output = Primitive<IResponse<IAdsMapping.IClearResult>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/ads/mappings/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function rematch(connection: IConnection): Promise<rematch.Output>;
export declare namespace rematch {
    type Output = Primitive<IResponse<IAdsMapping.IRematchResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/ads/mappings/rematch";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
