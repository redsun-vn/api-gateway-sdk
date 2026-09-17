import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IPlatformEmail } from "../../../../../../libs/shared/src/types/admin-service/iplatform-email";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function publishTemplate(connection: IConnection, id: string): Promise<publishTemplate.Output>;
export declare namespace publishTemplate {
    type Output = Primitive<IResponse<IPlatformEmail.ITemplate>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/platform-email/templates/:id/publish";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
