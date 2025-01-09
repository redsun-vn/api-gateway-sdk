import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function getAccessToke(connection: IConnection, id: string): Promise<getAccessToke.Output>;
export declare namespace getAccessToke {
    type Output = Primitive<IResponse<string>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/tomotek-config/:id/access-token";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
