import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IAttendanceReport } from "../../../../../libs/shared/src/types/report-service/iattendance-report.type";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IAttendanceReport.IOverviewReport>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/attendance-overview";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function detail(connection: IConnection, userId: string, query: detail.Query): Promise<detail.Output>;
export declare namespace detail {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IAttendanceReport.IOverviewReport>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/attendance-overview/:user_id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (userId: string, query: detail.Query) => string;
}
