import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IConversation } from "../../../../../../libs/shared/src/types/crm-service/iconversation";
export declare function markRead(connection: IConnection, id: string): Promise<markRead.Output>;
export declare namespace markRead {
    type Output = Primitive<IResponse<IConversation.IMarkReadResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/conversations/:id/read";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
