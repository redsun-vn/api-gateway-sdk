import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { ISalaryCalculation } from "../../../../../../libs/shared/src/types/hr/salary/salary-calculation";
export * as manual from "./manual";
export * as request_approve from "./request_approve";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ISalaryCalculation.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/calculations";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<ISalaryCalculation.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/calculations/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function approve(connection: IConnection, id: string): Promise<approve.Output>;
export declare namespace approve {
    type Output = Primitive<IResponse<ISalaryCalculation.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/salary/calculations/:id/approve";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function pay(connection: IConnection, id: string, data: pay.Input): Promise<pay.Output>;
export declare namespace pay {
    type Input = Resolved<ISalaryCalculation.IPayment>;
    type Output = Primitive<IResponse<ISalaryCalculation.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/salary/calculations/:id/pay";
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
        readonly path: "/shop/hr/salary/calculations/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
