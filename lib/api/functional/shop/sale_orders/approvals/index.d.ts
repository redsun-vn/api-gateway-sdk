import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISaleOrderApproval } from "../../../../../libs/shared/src/types/order-service/isale-order-approval";
export declare function approvalInbox(connection: IConnection, query: approvalInbox.Query): Promise<approvalInbox.Output>;
export declare namespace approvalInbox {
    type Query = Resolved<ISaleOrderApproval.IInboxQuery>;
    type Output = Primitive<IResponse<ISaleOrderApproval.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/sale-orders/approvals";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: approvalInbox.Query) => string;
}
