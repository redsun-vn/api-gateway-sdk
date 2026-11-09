import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsEmail } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-email";
export declare function preview(connection: IConnection, id: number, body: preview.Input): Promise<preview.Output>;
export declare namespace preview {
    type Input = Resolved<IMktOsEmail.IPreviewRequest>;
    type Output = Primitive<IResponse<IMktOsEmail.IPreviewResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/runs/:id/email/preview";
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
    const path: (id: number) => string;
}
