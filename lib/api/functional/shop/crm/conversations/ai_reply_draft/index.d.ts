import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function requestReplyDraft(connection: IConnection, id: number): Promise<requestReplyDraft.Output>;
export declare namespace requestReplyDraft {
    type Output = Primitive<IResponse<ICrmAiAssist.IReplyDraftResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/conversations/:id/ai-reply-draft";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function getReplyDraft(connection: IConnection, id: number): Promise<getReplyDraft.Output>;
export declare namespace getReplyDraft {
    type Output = Primitive<IResponse<ICrmAiAssist.IReplyDraftResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/conversations/:id/ai-reply-draft";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
