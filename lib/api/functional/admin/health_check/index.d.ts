import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse, IHealthCheck } from "../../../../libs/shared/src/types/common.type";
export declare function findAll(connection: IConnection): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<IHealthCheck>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/health-check";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
