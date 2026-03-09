import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IRoomStatus } from "../../../../../../../libs/shared/src/types/reservation-service/iroom-status";
export declare function forceRefreshStatuses(connection: IConnection): Promise<forceRefreshStatuses.Output>;
export declare namespace forceRefreshStatuses {
    type Output = Primitive<IResponse<Array<IRoomStatus.IRoomStatusItem>>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/reservation/rooms/status/refresh";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
