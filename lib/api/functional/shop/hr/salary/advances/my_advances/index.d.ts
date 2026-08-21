import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../../libs/shared/src/types/common.type";
import type { ISalaryAdvance } from "../../../../../../../libs/shared/src/types/hr/salary/salary-advance";
export declare function findAllMyAdvances(connection: IConnection, query: findAllMyAdvances.Query): Promise<findAllMyAdvances.Output>;
export declare namespace findAllMyAdvances {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ISalaryAdvance.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/advances/my-advances";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllMyAdvances.Query) => string;
}
