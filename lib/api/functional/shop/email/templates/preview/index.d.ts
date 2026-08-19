import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEmailTemplate } from "../../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function previewTemplate(connection: IConnection, id: number): Promise<previewTemplate.Output>;
export declare namespace previewTemplate {
    type Output = Primitive<IResponse<IEmailTemplate.IPreviewResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/email/templates/:id/preview";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
