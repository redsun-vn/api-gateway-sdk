import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IUtmLink } from "../../../../../libs/shared/src/types/admin-service/utm/iutm-link";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function findOneByCode(connection: IConnection, code: string): Promise<findOneByCode.Output>;
export declare namespace findOneByCode {
    type Output = Primitive<IResponse<IUtmLink.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/utm-links/:code/code";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (code: string) => string;
}
