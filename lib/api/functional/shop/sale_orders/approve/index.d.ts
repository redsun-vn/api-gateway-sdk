import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISaleOrderApproval } from "../../../../../libs/shared/src/types/order-service/isale-order-approval";
export declare function approveApproval(connection: IConnection, id: string, body: approveApproval.Input): Promise<approveApproval.Output>;
export declare namespace approveApproval {
    type Input = Resolved<ISaleOrderApproval.IApproveBody>;
    type Output = Primitive<IResponse<ISaleOrderApproval.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/sale-orders/:id/approve";
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
