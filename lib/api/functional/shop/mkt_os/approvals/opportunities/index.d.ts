import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsResults } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-results";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IMktOsResults.IApprovalListQuery>;
    type Output = Primitive<IResponse<IMktOsResults.IApprovalPage>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/approvals/opportunities";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function decideMany(connection: IConnection, body: decideMany.Input): Promise<decideMany.Output>;
export declare namespace decideMany {
    type Input = Resolved<IMktOsResults.IApprovalDecideRequest>;
    type Output = Primitive<IResponse<IMktOsResults.IApprovalDecided>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/approvals/opportunities";
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
export declare function remind(connection: IConnection, body: remind.Input): Promise<remind.Output>;
export declare namespace remind {
    type Input = Resolved<IMktOsResults.IApprovalRemindRequest>;
    type Output = Primitive<IResponse<IMktOsResults.IApprovalReminded>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/approvals/opportunities/remind";
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
export declare function get(connection: IConnection, id: number, query: get.Query): Promise<get.Output>;
export declare namespace get {
    type Query = Resolved<IMktOsResults.IApprovalGetQuery>;
    type Output = Primitive<IResponse<IMktOsResults.IApprovalDetail>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/approvals/opportunities/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number, query: get.Query) => string;
}
export declare function decideOne(connection: IConnection, id: number, body: decideOne.Input): Promise<decideOne.Output>;
export declare namespace decideOne {
    type Input = Resolved<IMktOsResults.IApprovalDecideRequest>;
    type Output = Primitive<IResponse<IMktOsResults.IApprovalDecided>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/approvals/opportunities/:id";
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
    const path: (id: number) => string;
}
