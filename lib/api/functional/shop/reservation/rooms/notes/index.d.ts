import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IRoomNote } from "../../../../../../libs/shared/src/types/reservation-service/iroom-note";
export * as status from "./status";
export declare function create(connection: IConnection, roomId: string, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IRoomNote.ICreate>;
    type Output = Primitive<IResponse<IRoomNote.IRoomNoteResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/reservation/rooms/:roomId/notes";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (roomId: string) => string;
}
export declare function findByRoom(connection: IConnection, roomId: string, filter: findByRoom.Query): Promise<findByRoom.Output>;
export declare namespace findByRoom {
    type Query = Resolved<IRoomNote.IFilter>;
    type Output = Primitive<IResponse<Array<IRoomNote.IRoomNoteResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/rooms/:roomId/notes";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (roomId: string, filter: findByRoom.Query) => string;
}
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<Partial<Omit<IRoomNote.ICreate, "shop_id" | "branch_id" | "room_id">>>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/reservation/rooms/notes/:id";
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
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/reservation/rooms/notes/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
