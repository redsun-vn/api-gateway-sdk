import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmBant } from "../../../../../../libs/shared/src/types/crm-service/ibant";
export declare function previewRubric(connection: IConnection, body: previewRubric.Input): Promise<previewRubric.Output>;
export declare namespace previewRubric {
    type Input = Resolved<ICrmBant.IPreviewRequest>;
    type Output = Primitive<IResponse<ICrmBant.IPreviewResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/bant/preview";
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
