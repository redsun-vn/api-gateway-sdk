import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISaleOrderApproval } from "../../../../../libs/shared/src/types/order-service/isale-order-approval";
export declare function getApprovalConfig(connection: IConnection): Promise<getApprovalConfig.Output>;
export declare namespace getApprovalConfig {
    type Output = Primitive<IResponse<ISaleOrderApproval.IConfigResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/sale-orders/approval-config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function upsertApprovalConfig(connection: IConnection, body: upsertApprovalConfig.Input): Promise<upsertApprovalConfig.Output>;
export declare namespace upsertApprovalConfig {
    type Input = Resolved<ISaleOrderApproval.IConfigUpsertBody>;
    type Output = Primitive<IResponse<ISaleOrderApproval.IConfigResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/sale-orders/approval-config";
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
    const path: () => string;
}
