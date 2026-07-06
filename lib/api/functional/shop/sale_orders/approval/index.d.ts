import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISaleOrderApproval } from "../../../../../libs/shared/src/types/order-service/isale-order-approval";
export declare function getApproval(connection: IConnection, id: string): Promise<getApproval.Output>;
export declare namespace getApproval {
    type Output = Primitive<IResponse<ISaleOrderApproval.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/sale-orders/:id/approval";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
