import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ITheme } from "../../../../../../libs/shared/src/types/cms-service/itheme";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function duplicateForShop(connection: IConnection, data: duplicateForShop.Input): Promise<duplicateForShop.Output>;
export declare namespace duplicateForShop {
    type Input = Resolved<ITheme.IAdminDuplicateForShop>;
    type Output = Primitive<IResponse<ITheme.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/themes/duplicate-for-shop";
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
