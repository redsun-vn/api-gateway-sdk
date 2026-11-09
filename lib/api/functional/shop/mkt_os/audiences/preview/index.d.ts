import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsAudience } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-audience";
export declare function startPreview(connection: IConnection, body: startPreview.Input): Promise<startPreview.Output>;
export declare namespace startPreview {
    type Input = Resolved<IMktOsAudience.IPreviewRequest>;
    type Output = Primitive<IResponse<IMktOsAudience.IPreviewStarted>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/audiences/preview";
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
export declare function getPreview(connection: IConnection, jobId: string): Promise<getPreview.Output>;
export declare namespace getPreview {
    type Output = Primitive<IResponse<IMktOsAudience.IPreviewJob>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/audiences/preview/:jobId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (jobId: string) => string;
}
