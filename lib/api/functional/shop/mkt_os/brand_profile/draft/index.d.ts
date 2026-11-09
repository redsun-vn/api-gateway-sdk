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
export declare function deleteDraft(connection: IConnection, query: deleteDraft.Query): Promise<deleteDraft.Output>;
export declare namespace deleteDraft {
    type Query = Resolved<IMktOs.IBrandProfileDraftDeleteQuery>;
    type Output = Primitive<IResponse<IMktOs.IBrandProfileDraftDeleted>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/brand-profile/draft";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: deleteDraft.Query) => string;
}
