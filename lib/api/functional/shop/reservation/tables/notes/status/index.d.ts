import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ITableNote } from "../../../../../../../libs/shared/src/types/reservation-service/itable-note";
export declare function updateStatus(connection: IConnection, id: string, data: updateStatus.Input): Promise<updateStatus.Output>;
export declare namespace updateStatus {
    type Input = Resolved<ITableNote.IUpdateStatus>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/reservation/tables/notes/:id/status";
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
