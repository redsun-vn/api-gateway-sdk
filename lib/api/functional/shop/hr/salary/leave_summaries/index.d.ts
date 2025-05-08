import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { ILeaveSummary } from "../../../../../../libs/shared/src/types/hr/salary/leave-summary";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ILeaveSummary.ILeaveSummaryResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/leave-summaries";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOneByStaffId(connection: IConnection, staffId: string, data: findOneByStaffId.Query): Promise<findOneByStaffId.Output>;
export declare namespace findOneByStaffId {
    type Query = Resolved<ILeaveSummary.ILeaveSummaryRequest>;
    type Output = Primitive<IResponse<ILeaveSummary.ILeaveSummaryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/leave-summaries/:staffId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (staffId: string, data: findOneByStaffId.Query) => string;
}
