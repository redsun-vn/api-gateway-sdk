import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../libs/shared/src/types/common.type";
import type { ISyncActivityLog } from "../../../libs/shared/src/types/isync-acitivity-log";
export * as create_table from "./create_table";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<ISyncActivityLog.ICreateSyncActivityLog>;
    type Output = Primitive<IResponse<ISyncActivityLog.ISyncActivityLogResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/sync-activity-logs";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ISyncActivityLog.ISyncActivityLogResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/sync-activity-logs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (query: findAll.Query) => string;
}
