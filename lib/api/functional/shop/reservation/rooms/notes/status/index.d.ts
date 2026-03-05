import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IRoomNote } from "../../../../../../../libs/shared/src/types/reservation-service/iroom-note";
export declare function updateStatus(connection: IConnection, id: string, data: updateStatus.Input): Promise<updateStatus.Output>;
export declare namespace updateStatus {
    type Input = Resolved<IRoomNote.IUpdateStatus>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/reservation/rooms/notes/:id/status";
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
    const path: (id: string) => string;
}
