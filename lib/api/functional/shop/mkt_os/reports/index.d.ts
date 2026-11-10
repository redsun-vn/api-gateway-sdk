import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsReports } from "../../../../../libs/shared/src/types/crm-service/imkt-os-reports";
export declare function access(connection: IConnection): Promise<access.Output>;
export declare namespace access {
    type Output = Primitive<IResponse<IMktOsReports.IAccess>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/reports/access";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function mine(connection: IConnection, query: mine.Query): Promise<mine.Output>;
export declare namespace mine {
    type Query = Resolved<IMktOsReports.IPeriodQuery>;
    type Output = Primitive<IResponse<IMktOsReports.IMineReport>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/reports/mine";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: mine.Query) => string;
}
export declare function staff(connection: IConnection, query: staff.Query): Promise<staff.Output>;
export declare namespace staff {
    type Query = Resolved<IMktOsReports.IStaffReportQuery>;
    type Output = Primitive<IResponse<IMktOsReports.IStaffReport>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/reports/staff";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: staff.Query) => string;
}
export declare function company(connection: IConnection, query: company.Query): Promise<company.Output>;
export declare namespace company {
    type Query = Resolved<IMktOsReports.IPeriodQuery>;
    type Output = Primitive<IResponse<IMktOsReports.ICompanyReport>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/reports/company";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: company.Query) => string;
}
