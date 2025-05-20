import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IPartner } from "../../../../../libs/shared/src/types/partner-service/ipartner";
export * as update_info from "./update_info";
export * as addresses from "./addresses";
export declare function me(connection: IConnection): Promise<me.Output>;
export declare namespace me {
    type Output = Primitive<IResponse<null | IPartner.IPartnerResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/web-builder/auth/me";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
