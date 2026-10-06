import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ITheme } from "../../../../../../libs/shared/src/types/cms-service/itheme";
import type { IThemePublish } from "../../../../../../libs/shared/src/types/cms-service/itheme-publish";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function returnThemes(connection: IConnection, body: returnThemes.Input): Promise<returnThemes.Output>;
export declare namespace returnThemes {
    type Input = Resolved<IThemePublish.IReturnReq>;
    type Output = Primitive<IResponse<Array<ITheme.IAdminResponse>>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/themes/return";
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
