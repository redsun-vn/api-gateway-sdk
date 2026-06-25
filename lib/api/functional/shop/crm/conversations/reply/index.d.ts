import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IConversation } from "../../../../../../libs/shared/src/types/crm-service/iconversation";
export declare function sendReply(connection: IConnection, id: string, body: sendReply.Input): Promise<sendReply.Output>;
export declare namespace sendReply {
    type Input = Resolved<IConversation.ISendReplyBody>;
    type Output = Primitive<IResponse<IConversation.ISendReplyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/conversations/:id/reply";
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
    const path: (id: string) => string;
}
