import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStaffContract } from "../../../../../../libs/shared/src/types/hr/istaff-contract";
export declare function staffSummary(connection: IConnection, query: staffSummary.Query): Promise<staffSummary.Output>;
export declare namespace staffSummary {
    type Query = Resolved<IStaffContract.IStaffSummaryQuery>;
    type Output = Primitive<IResponse<Array<IStaffContract.IStaffSummaryItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/contracts/staff-summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: staffSummary.Query) => string;
}
