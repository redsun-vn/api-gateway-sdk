import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IConversation } from "../../../../../../../libs/shared/src/types/crm-service/iconversation";
export declare function attachmentAccess(connection: IConnection, refId: string): Promise<attachmentAccess.Output>;
export declare namespace attachmentAccess {
    type Output = Primitive<IResponse<IConversation.IAttachmentAccessResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/conversations/attachments/:refId/access";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (refId: string) => string;
}
