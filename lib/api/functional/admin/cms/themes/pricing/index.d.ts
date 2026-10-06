import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ITheme } from "../../../../../../libs/shared/src/types/cms-service/itheme";
import type { IThemePublish } from "../../../../../../libs/shared/src/types/cms-service/itheme-publish";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function setPricing(connection: IConnection, id: string, body: setPricing.Input): Promise<setPricing.Output>;
export declare namespace setPricing {
    type Input = Resolved<IThemePublish.IPricingReq>;
    type Output = Primitive<IResponse<ITheme.IAdminResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/cms/themes/:id/pricing";
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
    const path: (id: string) => string;
}
