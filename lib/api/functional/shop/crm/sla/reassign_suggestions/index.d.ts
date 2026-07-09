import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmSlaReassign } from "../../../../../../libs/shared/src/types/crm-service/isla-reassign";
export declare function list(connection: IConnection): Promise<list.Output>;
export declare namespace list {
    type Output = Primitive<IResponse<ICrmSlaReassign.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/sla/reassign-suggestions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function approve(connection: IConnection, id: number, body: approve.Input): Promise<approve.Output>;
export declare namespace approve {
    type Input = Resolved<ICrmSlaReassign.IApproveBody>;
    type Output = Primitive<IResponse<ICrmSlaReassign.IDecisionResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/sla/reassign-suggestions/:id/approve";
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
export declare function dismiss(connection: IConnection, id: number): Promise<dismiss.Output>;
export declare namespace dismiss {
    type Output = Primitive<IResponse<ICrmSlaReassign.IDecisionResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/sla/reassign-suggestions/:id/dismiss";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
