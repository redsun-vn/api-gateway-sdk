import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../../libs/shared/src/types/crm-service/imkt-os";
export declare function saveDraft(connection: IConnection, body: saveDraft.Input): Promise<saveDraft.Output>;
export declare namespace saveDraft {
    type Input = Resolved<IMktOs.IBrandProfileDraftRequest>;
    type Output = Primitive<IResponse<IMktOs.IBrandProfileDraftSaved>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/brand-profile/draft";
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
