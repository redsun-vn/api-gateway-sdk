import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IUtmLink } from "../../../../../libs/shared/src/types/admin-service/utm/iutm-link";
import type { IUtmLinkClick } from "../../../../../libs/shared/src/types/admin-service/utm/iutm-link-click";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function countClick(connection: IConnection, data: countClick.Input, code: string): Promise<countClick.Output>;
export declare namespace countClick {
    type Input = Resolved<IUtmLinkClick.ICreate>;
    type Output = Primitive<IResponse<IUtmLink.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/utm-links/:code/count-click";
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
    const path: (code: string) => string;
}
