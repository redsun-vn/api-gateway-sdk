import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ITableNote } from "../../../../../libs/shared/src/types/reservation-service/itable-note";
export declare function create(connection: IConnection, tableId: string, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ITableNote.ICreate>;
    type Output = Primitive<IResponse<ITableNote.ITableNoteResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/reservation/table_notes/:tableId";
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
    const path: (tableId: string) => string;
}
export declare function findByTable(connection: IConnection, tableId: string, filter: findByTable.Query): Promise<findByTable.Output>;
export declare namespace findByTable {
    type Query = Resolved<ITableNote.IFilter>;
    type Output = Primitive<IResponse<IResponsePagination<ITableNote.ITableNoteResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/table_notes/:tableId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (tableId: string, filter: findByTable.Query) => string;
}
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<Partial<Omit<ITableNote.ICreate, "shop_id" | "branch_id" | "table_id">>>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/reservation/table_notes/:id";
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
        readonly path: "/shop/reservation/table_notes/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
