import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IPartner } from "../../../../../../libs/shared/src/types/partner-service/ipartner";
export declare function updateInfo(connection: IConnection, credentials: updateInfo.Input): Promise<updateInfo.Output>;
export declare namespace updateInfo {
    type Input = Resolved<IPartner.IUpdateWebsite>;
    type Output = Primitive<IResponse<IPartner.IPartnerResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/web-builder/auth/me/update-info";
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
