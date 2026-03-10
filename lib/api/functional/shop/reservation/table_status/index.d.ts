import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ITableStatus } from "../../../../../libs/shared/src/types/reservation-service/itable-status";
export declare function getBatchStatus(connection: IConnection, query: getBatchStatus.Query): Promise<getBatchStatus.Output>;
export declare namespace getBatchStatus {
    type Query = Resolved<ITableStatus.IQueryBranch>;
    type Output = Primitive<IResponse<Array<ITableStatus.ITableStatusItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/table_status";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getBatchStatus.Query) => string;
}
export declare function getSingleStatus(connection: IConnection, id: string): Promise<getSingleStatus.Output>;
export declare namespace getSingleStatus {
    type Output = Primitive<IResponse<ITableStatus.ITableStatusItem>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/table_status/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
