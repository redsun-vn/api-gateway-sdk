import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IQuery, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IDeposit } from "../../../../libs/shared/src/types/deposit-service/ideposit";
export * as confirm_received from "./confirm_received";
export * as apply_to_order from "./apply_to_order";
export * as by_target from "./by_target";
export * as summary from "./summary";
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IDeposit.ICreate>;
    type Output = Primitive<IResponse<IDeposit.IDepositResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/deposits";
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
export declare function refund(connection: IConnection, id: string, body: refund.Input): Promise<refund.Output>;
export declare namespace refund {
    type Input = Resolved<IDeposit.IRefund>;
    type Output = Primitive<IResponse<IDeposit.IDepositTransactionResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/deposits/:id/refund";
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
    const path: (id: string) => string;
}
export declare function forfeit(connection: IConnection, id: string, body: forfeit.Input): Promise<forfeit.Output>;
export declare namespace forfeit {
    type Input = Resolved<IDeposit.IForfeit>;
    type Output = Primitive<IResponse<IDeposit.IDepositResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/deposits/:id/forfeit";
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
    const path: (id: string) => string;
}
export declare function cancel(connection: IConnection, id: string, body: cancel.Input): Promise<cancel.Output>;
export declare namespace cancel {
    type Input = Resolved<IDeposit.ICancel>;
    type Output = Primitive<IResponse<IDeposit.IDepositResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/deposits/:id/cancel";
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
    const path: (id: string) => string;
}
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IDeposit.IDepositResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/deposits";
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
    type Output = Primitive<IResponse<IDeposit.IDepositResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/deposits/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function transactions(connection: IConnection, id: string): Promise<transactions.Output>;
export declare namespace transactions {
    type Output = Primitive<IResponse<Array<IDeposit.IDepositTransactionResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/deposits/:id/transactions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
