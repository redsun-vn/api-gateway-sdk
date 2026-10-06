import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ITheme } from "../../../../../../libs/shared/src/types/cms-service/itheme";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function createDraft(connection: IConnection, id: string): Promise<createDraft.Output>;
export declare namespace createDraft {
    type Output = Primitive<IResponse<ITheme.IAdminResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/themes/:id/draft";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
