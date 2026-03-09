import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IRoomStatus } from "../../../../../../libs/shared/src/types/reservation-service/iroom-status";
export * as refresh from "./refresh";
export declare function getBatchStatus(connection: IConnection, query: getBatchStatus.Query): Promise<getBatchStatus.Output>;
export declare namespace getBatchStatus {
    type Query = Resolved<IRoomStatus.IQueryBranch>;
    type Output = Primitive<IResponse<Array<IRoomStatus.IRoomStatusItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/rooms/status";
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
    type Output = Primitive<IResponse<IRoomStatus.IRoomStatusItem>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/rooms/:id/status";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
