import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../libs/shared/src/types/crm-service/imkt-os";
export declare function getEntitlement(connection: IConnection): Promise<getEntitlement.Output>;
export declare namespace getEntitlement {
    type Output = Primitive<IResponse<IMktOs.IEntitlementResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/entitlement";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
