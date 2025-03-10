import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { ISalaryAdvance } from "../../../../../../libs/shared/src/types/hr/salary/salary-advance";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ISalaryAdvance.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/advances";
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
    type Output = Primitive<IResponse<ISalaryAdvance.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/advances/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ISalaryAdvance.ICreate>;
    type Output = Primitive<IResponse<ISalaryAdvance.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/salary/advances";
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
    const path: () => string;
}
export declare function update(connection: IConnection, data: update.Input, id: string): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ISalaryAdvance.IUpdate>;
    type Output = Primitive<IResponse<ISalaryAdvance.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/salary/advances/:id";
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
export declare function approve(connection: IConnection, id: string): Promise<approve.Output>;
export declare namespace approve {
    type Output = Primitive<IResponse<ISalaryAdvance.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/salary/advances/:id/approve";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function reject(connection: IConnection, id: string, data: reject.Input): Promise<reject.Output>;
export declare namespace reject {
    type Input = Resolved<ISalaryAdvance.IUpdate>;
    type Output = Primitive<IResponse<ISalaryAdvance.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/salary/advances/:id/reject";
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
        readonly path: "/shop/hr/salary/advances/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
